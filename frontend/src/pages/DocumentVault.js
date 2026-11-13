import React, { useState, useEffect, useRef } from "react";
import {
    Shield,
    UploadCloud,
    Camera,
    FileText,
    CheckCircle2,
    AlertCircle,
    Clock,
    Trash2,
    Eye,
    Plus,
    Lock,
    RefreshCw,
    X,
    Filter,
    HardDrive,
    Search,
    Download
} from "lucide-react";
import { Page } from "@/components/Layout";
import { performOfflineOCR } from "@/lib/offlineOcr";
import { encryptFile, decryptToFileBlob } from "@/lib/crypto";
import {
    saveVaultDocumentToDB,
    getAllVaultDocumentsFromDB,
    deleteVaultDocumentFromDB,
    getStorageEstimate
} from "@/lib/offlineDb";
import { toast } from "sonner";

const CATEGORIES = [
    { id: "All", label: "All Documents", icon: FileText },
    { id: "Identity", label: "Identity Proofs", icon: Shield, desc: "Aadhaar, Voter ID, PAN, Passport" },
    { id: "Income", label: "Income Certificates", icon: FileText, desc: "Income Certificate, Salary Slip, BPL" },
    { id: "Educational", label: "Educational", icon: FileText, desc: "Marksheets, Degree, Study Certificate" },
    { id: "Residential", label: "Residential", icon: FileText, desc: "Domicile, Ration Card, Utility Bills" },
    { id: "Financial", label: "Financial & Banking", icon: FileText, desc: "Passbook, Canceled Cheque" },
    { id: "Special", label: "Special Categories", icon: FileText, desc: "Caste, UDID Disability, Land Pahani" }
];

export default function DocumentVault() {
    const [documents, setDocuments] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [storageInfo, setStorageInfo] = useState({ usageMB: "0.00", quotaMB: "100.00", percent: 0 });

    // Modals
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [isViewingDoc, setIsViewingDoc] = useState(null);
    const [decryptedViewUrl, setDecryptedViewUrl] = useState(null);

    // OCR & Verification state
    const [ocrProgress, setOcrProgress] = useState(null);
    const [isOcrProcessing, setIsOcrProcessing] = useState(false);
    const [pendingDoc, setPendingDoc] = useState(null);

    const fileInputRef = useRef(null);
    const cameraInputRef = useRef(null);

    // Load documents & storage info on mount
    const loadVault = async () => {
        try {
            const docs = await getAllVaultDocumentsFromDB();
            setDocuments(docs || []);
            const est = await getStorageEstimate();
            setStorageInfo(est);
        } catch (err) {
            console.error("Failed to load document vault:", err);
        }
    };

    useEffect(() => {
        loadVault();
    }, []);

    // Clean up blob URLs when viewer closes
    useEffect(() => {
        return () => {
            if (decryptedViewUrl) {
                URL.revokeObjectURL(decryptedViewUrl);
            }
        };
    }, [decryptedViewUrl]);

    // File selection handler
    const handleFileSelect = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploadOpen(false);
        setIsOcrProcessing(true);
        setOcrProgress(5);

        try {
            // 1. Perform client-side offline OCR
            let ocrResult = {
                documentType: file.name.replace(/\.[^/.]+$/, ""),
                category: "Identity",
                extractedFields: {
                    certificateNumber: "",
                    issuingAuthority: "State Authority",
                    issueDate: new Date().toISOString().split("T")[0],
                    incomeAmount: ""
                },
                isReadable: true,
                readabilityWarning: null,
                confidence: 80
            };

            // Run Tesseract OCR for images
            if (file.type.startsWith("image/")) {
                ocrResult = await performOfflineOCR(file, (p) => setOcrProgress(p));
            } else {
                setOcrProgress(100);
            }

            // 2. Encrypt file client-side with AES-GCM
            const encrypted = await encryptFile(file);

            // 3. Prepare pending document object for user verification
            setPendingDoc({
                id: `vault-doc-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
                name: ocrResult.documentType || file.name,
                originalName: file.name,
                category: ocrResult.category || "Identity",
                uploadDate: new Date().toISOString(),
                expiryDate: "",
                mimeType: file.type,
                size: file.size,
                cipherBuffer: encrypted.cipherBuffer,
                iv: encrypted.iv,
                extractedFields: ocrResult.extractedFields,
                readabilityWarning: ocrResult.readabilityWarning,
                ocrConfidence: ocrResult.confidence,
                verified: false,
                notes: ""
            });
        } catch (err) {
            console.error("Document processing error:", err);
            toast.error("Failed to process document locally. Please try a different file.");
        } finally {
            setIsOcrProcessing(false);
            setOcrProgress(null);
            if (e.target) e.target.value = "";
        }
    };

    // Save pending doc after user confirmation
    const handleConfirmPendingDoc = async () => {
        if (!pendingDoc) return;
        try {
            await saveVaultDocumentToDB(pendingDoc);
            toast.success(`${pendingDoc.name} encrypted & saved into your Vault.`);
            setPendingDoc(null);
            loadVault();
        } catch (err) {
            console.error("Failed to save document:", err);
            toast.error("Could not save document to local database.");
        }
    };

    // View decrypted file
    const handleViewDocument = async (doc) => {
        try {
            if (decryptedViewUrl) {
                URL.revokeObjectURL(decryptedViewUrl);
                setDecryptedViewUrl(null);
            }
            const blob = await decryptToFileBlob(doc.cipherBuffer, doc.iv, doc.mimeType);
            const url = URL.createObjectURL(blob);
            setDecryptedViewUrl(url);
            setIsViewingDoc(doc);
        } catch (err) {
            console.error("Decryption failed:", err);
            toast.error("Unable to decrypt document locally. Key may have expired.");
        }
    };

    // Delete document
    const handleDeleteDocument = async (id, name) => {
        if (window.confirm(`Delete "${name}" permanently from your offline vault?`)) {
            try {
                await deleteVaultDocumentFromDB(id);
                toast.success(`Removed ${name} from vault.`);
                loadVault();
            } catch (err) {
                toast.error("Failed to delete document.");
            }
        }
    };

    // Filter documents
    const filteredDocs = documents.filter((doc) => {
        const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
        const matchesSearch =
            !searchQuery ||
            doc.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.extractedFields?.certificateNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.extractedFields?.issuingAuthority?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Counts for stats
    const totalDocs = documents.length;
    const verifiedCount = documents.filter((d) => d.verified).length;
    const attentionCount = documents.filter((d) => !d.verified || d.readabilityWarning).length;

    return (
        <Page className="max-w-6xl py-8">
            {/* Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#E8E3D9] pb-5">
                <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[#BBF7D0] bg-[#F0FDF4] px-3.5 py-1 text-xs font-bold text-[#046C4E] shadow-2xs">
                        <Lock className="h-3.5 w-3.5 text-[#07966B]" />
                        ADIKHAR Zero-Knowledge Vault â€¢ Client-Side AES-256 Encrypted
                    </div>
                    <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#101B30] tracking-tight">
                        One-Time Document Vault
                    </h1>
                    <p className="mt-1 text-xs sm:text-sm text-[#101B30]/70">
                        Upload your welfare certificates once. Text is recognized offline and matched with schemes automatically.
                    </p>
                </div>

                {/* Upload & Camera Buttons */}
                <div className="flex items-center gap-2 self-start md:self-auto">
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        data-testid="vault-upload-button"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#07966B] px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#057A55] transition-colors shadow-xs"
                    >
                        <UploadCloud className="h-4 w-4" /> Upload Document
                    </button>
                    <button
                        onClick={() => cameraInputRef.current?.click()}
                        data-testid="vault-camera-button"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#E8E3D9] bg-white px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-xs"
                    >
                        <Camera className="h-4 w-4 text-[#07966B]" /> Scan / Camera
                    </button>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,application/pdf"
                        className="hidden"
                        onChange={handleFileSelect}
                    />
                    <input
                        ref={cameraInputRef}
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        onChange={handleFileSelect}
                    />
                </div>
            </div>

            {/* Dashboard Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="rounded-2xl border border-[#E8E3D9] bg-white p-4 shadow-xs">
                    <span className="text-xs font-semibold text-[#101B30]/60 uppercase tracking-wider block">Total Documents</span>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#101B30]">{totalDocs}</span>
                        <span className="text-xs text-[#101B30]/50">stored locally</span>
                    </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-xs">
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">Verified & Ready</span>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">{verifiedCount}</span>
                        <span className="text-xs text-emerald-600">for scheme matching</span>
                    </div>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 shadow-xs">
                    <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider block">Needs Attention</span>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-amber-700">{attentionCount}</span>
                        <span className="text-xs text-amber-600">unverified / low scan</span>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#E8E3D9] bg-white p-4 shadow-xs">
                    <span className="text-xs font-semibold text-[#101B30]/60 uppercase tracking-wider block">Local Storage Used</span>
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#101B30]">{storageInfo.usageMB}</span>
                        <span className="text-xs text-[#101B30]/60">MB</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-[#07966B] rounded-full" style={{ width: `${Math.max(5, storageInfo.percent)}%` }} />
                    </div>
                </div>
            </div>

            {/* OCR Processing Overlay / Bar */}
            {isOcrProcessing && (
                <div className="mb-6 rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4 animate-spin text-[#046C4E]" />
                            <span className="text-sm font-bold text-[#065F46]">
                                Running Local Tesseract OCR & Document Intelligence...
                            </span>
                        </div>
                        <span className="text-xs font-bold text-[#046C4E]">{ocrProgress || 0}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#BBF7D0] overflow-hidden">
                        <div
                            className="h-full bg-[#07966B] transition-all duration-300 rounded-full"
                            style={{ width: `${ocrProgress || 10}%` }}
                        />
                    </div>
                    <p className="mt-2 text-xs text-[#046C4E]">
                        Analyzing certificates, extracting RD/Aadhaar numbers, issuing department, and income values. No data leaves your computer.
                    </p>
                </div>
            )}

            {/* Category Filter Pills & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${selectedCategory === cat.id
                                ? "bg-[#101B30] text-white shadow-xs"
                                : "bg-white border border-[#E8E3D9] text-[#101B30]/70 hover:bg-slate-50 hover:text-[#101B30]"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#101B30]/50" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search certificate or authority..."
                        className="w-full rounded-xl border border-[#E8E3D9] bg-white pl-9 pr-3 py-1.5 text-xs text-[#101B30] focus:outline-none focus:border-[#07966B]"
                    />
                </div>
            </div>

            {/* Document Cards Grid */}
            {filteredDocs.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[#E8E3D9] bg-white p-12 text-center">
                    <UploadCloud className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-[#101B30]">No documents in this category</h3>
                    <p className="mt-1 text-xs text-[#101B30]/60 max-w-sm mx-auto">
                        Upload your Aadhaar, Income Certificate, Ration Card, or Caste Certificate to enable one-click scheme readiness checking.
                    </p>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#07966B] px-4 py-2 text-xs font-bold text-white hover:bg-[#046C4E]"
                    >
                        <Plus className="h-4 w-4" /> Add First Document
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredDocs.map((doc) => (
                        <div
                            key={doc.id}
                            className="rounded-2xl border border-[#E8E3D9] bg-white p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#F0FDF4] text-[#046C4E] font-bold">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#046C4E] block">
                                                {doc.category}
                                            </span>
                                            <h3 className="font-bold text-[#101B30] text-sm leading-snug truncate max-w-[160px] sm:max-w-[200px]">
                                                {doc.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {doc.verified ? (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                                            <CheckCircle2 className="h-3 w-3" /> Verified
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                                            <AlertCircle className="h-3 w-3" /> Review
                                        </span>
                                    )}
                                </div>

                                {/* Extracted Details */}
                                <div className="space-y-1.5 rounded-xl bg-slate-50/70 p-3 text-xs mb-4">
                                    {doc.extractedFields?.certificateNumber && (
                                        <div className="flex items-center justify-between text-[#101B30]/80">
                                            <span className="text-[#101B30]/60 font-medium">Cert / ID No:</span>
                                            <span className="font-mono font-bold text-[#101B30] truncate max-w-[140px]">
                                                {doc.extractedFields.certificateNumber}
                                            </span>
                                        </div>
                                    )}

                                    {doc.extractedFields?.issuingAuthority && (
                                        <div className="flex items-center justify-between text-[#101B30]/80">
                                            <span className="text-[#101B30]/60 font-medium">Authority:</span>
                                            <span className="font-semibold text-slate-800 truncate max-w-[140px]">
                                                {doc.extractedFields.issuingAuthority}
                                            </span>
                                        </div>
                                    )}

                                    {doc.extractedFields?.incomeAmount && (
                                        <div className="flex items-center justify-between text-[#101B30]/80">
                                            <span className="text-[#101B30]/60 font-medium">Income Stated:</span>
                                            <span className="font-bold text-emerald-700">
                                                {doc.extractedFields.incomeAmount}
                                            </span>
                                        </div>
                                    )}

                                    {doc.extractedFields?.issueDate && (
                                        <div className="flex items-center justify-between text-[#101B30]/80">
                                            <span className="text-[#101B30]/60 font-medium">Date of Issue:</span>
                                            <span>{doc.extractedFields.issueDate}</span>
                                        </div>
                                    )}
                                </div>

                                {doc.readabilityWarning && (
                                    <p className="text-[11px] text-amber-700 bg-amber-50 rounded-lg p-2 mb-3 border border-amber-200 flex items-start gap-1.5">
                                        <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                                        <span>{doc.readabilityWarning}</span>
                                    </p>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                                <span className="text-[11px] text-[#101B30]/50">
                                    {(doc.size / 1024).toFixed(0)} KB â€¢ Encrypted
                                </span>

                                <div className="flex items-center gap-1.5">
                                    <button
                                        onClick={() => handleViewDocument(doc)}
                                        data-testid={`vault-view-${doc.id}`}
                                        className="inline-flex items-center gap-1 rounded-lg border border-[#E8E3D9] bg-white px-2.5 py-1 font-semibold text-[#101B30]/80 hover:bg-slate-50"
                                    >
                                        <Eye className="h-3.5 w-3.5" /> View
                                    </button>

                                    <button
                                        onClick={() => handleDeleteDocument(doc.id, doc.name)}
                                        data-testid={`vault-delete-${doc.id}`}
                                        className="grid h-7 w-7 place-items-center rounded-lg text-[#101B30]/50 hover:text-rose-600 hover:bg-rose-50"
                                        aria-label="Delete"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pending Document Review & Verification Modal */}
            {pendingDoc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
                    <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-[#07966B]" />
                                <h3 className="font-bold text-[#101B30] text-base">Verify Extracted Certificate Details</h3>
                            </div>
                            <button
                                onClick={() => setPendingDoc(null)}
                                className="grid h-8 w-8 place-items-center rounded-full text-[#101B30]/50 hover:bg-slate-100"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {pendingDoc.readabilityWarning && (
                            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold block">Scan Quality Notice:</span>
                                    {pendingDoc.readabilityWarning}
                                </div>
                            </div>
                        )}

                        <div className="space-y-3.5 text-xs">
                            <div>
                                <label className="font-bold text-[#101B30]/80 block mb-1">Document Display Name</label>
                                <input
                                    type="text"
                                    value={pendingDoc.name}
                                    onChange={(e) => setPendingDoc({ ...pendingDoc, name: e.target.value })}
                                    className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="font-bold text-[#101B30]/80 block mb-1">Document Category</label>
                                    <select
                                        value={pendingDoc.category}
                                        onChange={(e) => setPendingDoc({ ...pendingDoc, category: e.target.value })}
                                        className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B]"
                                    >
                                        {CATEGORIES.filter(c => c.id !== "All").map(c => (
                                            <option key={c.id} value={c.id}>{c.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="font-bold text-[#101B30]/80 block mb-1">Certificate / ID Number</label>
                                    <input
                                        type="text"
                                        value={pendingDoc.extractedFields?.certificateNumber || ""}
                                        placeholder="e.g. RD003848123 or 5489..."
                                        onChange={(e) => setPendingDoc({
                                            ...pendingDoc,
                                            extractedFields: { ...pendingDoc.extractedFields, certificateNumber: e.target.value }
                                        })}
                                        className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B] font-mono"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="font-bold text-[#101B30]/80 block mb-1">Issuing Authority</label>
                                    <input
                                        type="text"
                                        value={pendingDoc.extractedFields?.issuingAuthority || ""}
                                        placeholder="e.g. Tahsildar / UIDAI"
                                        onChange={(e) => setPendingDoc({
                                            ...pendingDoc,
                                            extractedFields: { ...pendingDoc.extractedFields, issuingAuthority: e.target.value }
                                        })}
                                        className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B]"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold text-[#101B30]/80 block mb-1">Date of Issue</label>
                                    <input
                                        type="date"
                                        value={pendingDoc.extractedFields?.issueDate || ""}
                                        onChange={(e) => setPendingDoc({
                                            ...pendingDoc,
                                            extractedFields: { ...pendingDoc.extractedFields, issueDate: e.target.value }
                                        })}
                                        className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B]"
                                    />
                                </div>
                            </div>

                            {pendingDoc.category === "Income" && (
                                <div>
                                    <label className="font-bold text-[#101B30]/80 block mb-1">Certified Annual Income</label>
                                    <input
                                        type="text"
                                        value={pendingDoc.extractedFields?.incomeAmount || ""}
                                        placeholder="e.g. â‚¹60,000"
                                        onChange={(e) => setPendingDoc({
                                            ...pendingDoc,
                                            extractedFields: { ...pendingDoc.extractedFields, incomeAmount: e.target.value }
                                        })}
                                        className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B]"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="font-bold text-[#101B30]/80 block mb-1">Expiry Date (if applicable)</label>
                                <input
                                    type="date"
                                    value={pendingDoc.expiryDate || ""}
                                    onChange={(e) => setPendingDoc({ ...pendingDoc, expiryDate: e.target.value })}
                                    className="w-full rounded-xl border border-[#E8E3D9] p-2.5 text-[#101B30] focus:outline-none focus:border-[#07966B]"
                                />
                            </div>

                            <label className="flex items-center gap-2 pt-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={pendingDoc.verified}
                                    onChange={(e) => setPendingDoc({ ...pendingDoc, verified: e.target.checked })}
                                    className="h-4 w-4 rounded border-[#E8E3D9] text-[#07966B] focus:ring-[#07966B]"
                                />
                                <span className="font-bold text-slate-800">
                                    I confirm these details match my physical document.
                                </span>
                            </label>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-2 border-t border-slate-100 pt-4">
                            <button
                                onClick={() => setPendingDoc(null)}
                                className="rounded-xl px-4 py-2 text-xs font-semibold text-[#101B30]/70 hover:bg-slate-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmPendingDoc}
                                data-testid="vault-confirm-save-button"
                                className="rounded-xl bg-[#101B30] px-5 py-2 text-xs font-bold text-white hover:bg-[#046C4E] transition-colors shadow-xs"
                            >
                                Encrypt & Save to Vault
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Document Viewer Modal */}
            {isViewingDoc && decryptedViewUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
                    <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl flex flex-col max-h-[90vh]">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                            <div>
                                <h3 className="font-bold text-[#101B30] text-base">{isViewingDoc.name}</h3>
                                <p className="text-xs text-[#101B30]/60">Decrypted client-side from local IndexedDB</p>
                            </div>
                            <button
                                onClick={() => {
                                    setIsViewingDoc(null);
                                    if (decryptedViewUrl) URL.revokeObjectURL(decryptedViewUrl);
                                    setDecryptedViewUrl(null);
                                }}
                                className="grid h-8 w-8 place-items-center rounded-full text-[#101B30]/50 hover:bg-slate-100"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-auto rounded-2xl bg-slate-100 p-2 flex items-center justify-center min-h-[300px]">
                            {isViewingDoc.mimeType?.startsWith("image/") ? (
                                <img
                                    src={decryptedViewUrl}
                                    alt={isViewingDoc.name}
                                    className="max-h-[60vh] max-w-full rounded-lg object-contain shadow-xs"
                                />
                            ) : (
                                <iframe
                                    src={decryptedViewUrl}
                                    title={isViewingDoc.name}
                                    className="w-full h-[55vh] rounded-lg border-0"
                                />
                            )}
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-[#101B30]/60 border-t border-slate-100 pt-3">
                            <span>ID: {isViewingDoc.extractedFields?.certificateNumber || "N/A"}</span>
                            <a
                                href={decryptedViewUrl}
                                download={isViewingDoc.originalName}
                                className="inline-flex items-center gap-1 font-bold text-[#046C4E] hover:underline"
                            >
                                <Download className="h-3.5 w-3.5" /> Download Decrypted Copy
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Page>
    );
}

