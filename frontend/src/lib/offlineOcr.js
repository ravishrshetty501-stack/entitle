// Local Client-Side Offline Document OCR & Intelligence Engine
// Powered by Tesseract.js WebAssembly worker with heuristic Indian welfare document recognition.

import { createWorker } from "tesseract.js";

/**
 * Recognizes text locally using Tesseract.js worker
 * @param {File|Blob|string} imageFile 
 * @param {Function} onProgress 
 */
export async function performOfflineOCR(imageFile, onProgress = null) {
    let worker = null;
    try {
        worker = await createWorker("eng", 1, {
            logger: (m) => {
                if (onProgress && m.status === "recognizing text") {
                    onProgress(Math.round((m.progress || 0) * 100));
                }
            }
        });

        const ret = await worker.recognize(imageFile);
        const text = ret.data.text || "";
        const confidence = ret.data.confidence || 0;

        await worker.terminate();

        const intelligence = analyzeDocumentText(text, confidence);
        return {
            rawText: text,
            confidence: Math.round(confidence),
            ...intelligence
        };
    } catch (err) {
        console.error("OCR execution error:", err);
        if (worker) {
            try { await worker.terminate(); } catch (e) { }
        }
        // Fallback for PDF or unparseable images
        return {
            rawText: "",
            confidence: 0,
            documentType: "Document (Unspecified)",
            category: "Identity",
            extractedFields: {
                certificateNumber: "",
                issuingAuthority: "State Authority",
                issueDate: new Date().toISOString().split("T")[0],
                incomeAmount: ""
            },
            isReadable: false,
            readabilityWarning: "Unable to automatically extract text (common for multi-page PDFs or low-contrast scans). Please enter details manually."
        };
    }
}

/**
 * Intelligent heuristics for Indian welfare certificates
 */
export function analyzeDocumentText(text, confidence) {
    const upper = text.toUpperCase();
    let documentType = "General Identity Proof";
    let category = "Identity";
    let certificateNumber = "";
    let issuingAuthority = "";
    let issueDate = "";
    let incomeAmount = "";

    // 1. Detect Document Type & Category
    if (upper.includes("INCOME") || upper.includes("ANNUAL INCOME") || upper.includes("TAHSILDAR") || upper.includes("REVENUE DEPARTMENT")) {
        documentType = "Income Certificate";
        category = "Income";
        issuingAuthority = "Tahsildar / Revenue Department";
    } else if (upper.includes("AADHAAR") || upper.includes("UNIQUE IDENTIFICATION") || upper.includes("UIDAI") || upper.includes("MERA AADHAAR")) {
        documentType = "Aadhaar Card";
        category = "Identity";
        issuingAuthority = "UIDAI (Govt of India)";
    } else if (upper.includes("RATION") || upper.includes("FOOD AND CIVIL") || upper.includes("BPL") || upper.includes("ANNA BHAGYA") || upper.includes("FAIR PRICE")) {
        documentType = "Ration Card (BPL / AAY)";
        category = "Residential";
        issuingAuthority = "Food & Civil Supplies Department";
    } else if (upper.includes("CASTE") || upper.includes("SCHEDULED CASTE") || upper.includes("SCHEDULED TRIBE") || upper.includes("BACKWARD CLASS") || upper.includes("OBC")) {
        documentType = "Caste & Category Certificate";
        category = "Special";
        issuingAuthority = "Tahsildar / Social Welfare Dept";
    } else if (upper.includes("BOARD OF") || upper.includes("MARKS STATEMENT") || upper.includes("UNIVERSITY") || upper.includes("DEGREE") || upper.includes("PASSED")) {
        documentType = "Educational Marksheet / Certificate";
        category = "Educational";
        issuingAuthority = "State Education Board / University";
    } else if (upper.includes("BANK") || upper.includes("PASSBOOK") || upper.includes("ACCOUNT NO") || upper.includes("IFSC")) {
        documentType = "Bank Passbook / Statement";
        category = "Financial";
        issuingAuthority = "Commercial / Rural Bank";
    } else if (upper.includes("DOMICILE") || upper.includes("NATIVITY") || upper.includes("RESIDENCE")) {
        documentType = "Domicile / Residence Certificate";
        category = "Residential";
        issuingAuthority = "Revenue Department";
    } else if (upper.includes("DISABILITY") || upper.includes("UDID") || upper.includes("SWAVLAMBAN")) {
        documentType = "Disability / UDID Certificate";
        category = "Special";
        issuingAuthority = "Ministry of Social Justice & Empowerment";
    }

    // 2. Extract Certificate / Identification Number
    // Check Karnataka Revenue RD Number (e.g., RD00384938491)
    const rdMatch = text.match(/RD\s?[0-9]{8,14}/i);
    if (rdMatch) {
        certificateNumber = rdMatch[0].replace(/\s+/g, "").toUpperCase();
    }

    // Check Aadhaar 12 digits
    if (!certificateNumber) {
        const aadhMatch = text.match(/\b[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}\b/);
        if (aadhMatch) {
            certificateNumber = aadhMatch[0];
        }
    }

    // Check PAN Card number
    if (!certificateNumber) {
        const panMatch = text.match(/\b[A-Z]{5}[0-9]{4}[A-Z]{1}\b/);
        if (panMatch) {
            certificateNumber = panMatch[0];
        }
    }

    // Check generic certificate number
    if (!certificateNumber) {
        const genMatch = text.match(/(?:No|Number|Cert No|Sl No|Ref)[:.\s]+([A-Z0-9\/-]{6,20})/i);
        if (genMatch) {
            certificateNumber = genMatch[1].trim();
        }
    }

    // 3. Extract Date
    const dateMatch = text.match(/\b([0-3]?[0-9][\/\-.][0-1]?[0-9][\/\-.](?:19|20)[0-9]{2})\b/);
    if (dateMatch) {
        issueDate = dateMatch[0].replace(/[\/.]/g, "-");
    }

    // 4. Extract Income Amount if Income Certificate
    if (category === "Income" || upper.includes("INCOME")) {
        const incMatch = text.match(/(?:Rs\.?|₹|INR|Income\s*:?)\s*([0-9]{1,3}(?:,[0-9]{2,3})*)/i);
        if (incMatch) {
            incomeAmount = incMatch[1].replace(/,/g, "");
        }
    }

    // 5. Readability & Quality Check
    const isReadable = confidence >= 50 && text.trim().length > 25;
    let readabilityWarning = null;
    if (!isReadable) {
        readabilityWarning = "Scan quality is faint or low resolution. Please check and confirm the extracted values below.";
    }

    return {
        documentType,
        category,
        extractedFields: {
            certificateNumber: certificateNumber || "",
            issuingAuthority: issuingAuthority || "Government Authority",
            issueDate: issueDate || new Date().toISOString().split("T")[0],
            incomeAmount: incomeAmount ? `₹${parseInt(incomeAmount, 10).toLocaleString('en-IN')}` : ""
        },
        isReadable,
        readabilityWarning
    };
}

