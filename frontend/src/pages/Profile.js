import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { OPTIONS } from "@/lib/options";
import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LangContext";
import { Page, PageHeader, btn } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const FIELDS = ["age", "state", "district", "area", "occupation", "education", "gender", "incomeRange", "familySize", "householdCategory", "rationCard", "hasBankAccount", "incomeTaxPayer", "ownsPuccaHouse", "student", "farmer", "disability", "healthcareNeed"];

export default function Profile() {
    const { user, setUser } = useAuth();
    const { t } = useLang();
    const nav = useNavigate();
    const [data, setData] = useState(null);
    useEffect(() => { api.profile.get().then(setData).catch(() => { }); }, []);
    if (!data) return <PageLoader />;
    const p = data.profile;
    const show = (k) => {
        const v = p[k];
        if (v === true) return t("common.yes");
        if (v === false) return t("common.no");
        if (v == null || v === "") return "â€”";
        return OPTIONS[k] ? t(`opt.${k}.${v}`) : v;
    };
    const del = async () => {
        try { await api.profile.deleteAccount(); setUser(null); toast.success("Account and data deleted"); nav("/"); } catch (e) { toast.error(errorMessage(e)); }
    };

    return (
        <Page className="max-w-4xl">
            <PageHeader eyebrow="My profile" title={user.name} sub={`${user.email}${user.demo ? " Â· shared demo account" : ""}`}>
                <Link to="/assessment" className={btn.primary} data-testid="edit-profile-button"><Pencil className="h-4 w-4" />Edit answers</Link>
            </PageHeader>
            <section className="rounded-2xl border border-[#E8E3D9] bg-white p-6" data-testid="profile-summary">
                <div className="mb-4 flex justify-between"><h2 className="font-semibold">Eligibility profile</h2><span className="text-sm text-slate-500">{data.completion}% complete</span></div>
                <dl className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                    {FIELDS.map((k) => <div key={k} className="flex justify-between gap-3 border-b border-dashed border-slate-100 py-1.5"><dt className="text-slate-500">{t(`q.${k}`).replace(/\?$/, "")}</dt><dd className="text-right font-medium">{show(k)}</dd></div>)}
                </dl>
                <p className="mt-4 text-xs text-slate-500">Why we ask: each answer maps to a specific scheme rule (for example, income range is compared with scholarship income limits). Unanswered questions show as â€œmissing informationâ€, never as a rejection.</p>
            </section>
            <section className="mt-6 rounded-2xl border border-red-200 bg-red-50/40 p-6" data-testid="danger-zone">
                <h2 className="font-semibold text-red-800">Delete account</h2>
                <p className="mt-1 text-sm text-red-900/80">Permanently removes your profile, results, saved schemes, checklists, tracker entries, notifications and chat history.</p>
                <AlertDialog>
                    <AlertDialogTrigger asChild><button className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700" data-testid="delete-account-button"><Trash2 className="h-4 w-4" />Delete my account</button></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader><AlertDialogTitle>Delete everything?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription></AlertDialogHeader>
                        <AlertDialogFooter><AlertDialogCancel data-testid="delete-cancel">Cancel</AlertDialogCancel><AlertDialogAction onClick={del} className="bg-red-600 hover:bg-red-700" data-testid="delete-confirm">Delete</AlertDialogAction></AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </section>
        </Page>
    );
}
