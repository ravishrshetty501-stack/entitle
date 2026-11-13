import { Link } from "react-router-dom";
import { Ban, Check, Lock } from "lucide-react";
import { Page, PageHeader } from "@/components/Layout";
import Disclaimer from "@/components/Disclaimer";

export default function Privacy() {
    return (
        <Page className="max-w-4xl">
            <PageHeader eyebrow="Privacy notice" title="Privacy & transparency" sub="Plain-language explanation of what ADIKHAR collects, why, and your controls." />
            <div className="grid gap-6 md:grid-cols-2">
                <section className="rounded-2xl border border-[#E8E3D9] bg-white p-6" data-testid="privacy-collect">
                    <h2 className="mb-3 flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-emerald-600" />What we collect</h2>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li>â€¢ Name, email and photo from Google sign-in</li>
                        <li>â€¢ Eligibility answers: age, state, district, occupation, income range, education, household details and optional circumstances</li>
                        <li>â€¢ Your saved schemes, checklist ticks, tracker entries and Guide chat messages</li>
                    </ul>
                </section>
                <section className="rounded-2xl border border-[#E8E3D9] bg-white p-6" data-testid="privacy-never">
                    <h2 className="mb-3 flex items-center gap-2 font-semibold"><Ban className="h-5 w-5 text-red-600" />What we never collect</h2>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li>â€¢ Aadhaar numbers, PAN, voter ID or other government identifiers</li>
                        <li>â€¢ Bank account or card numbers</li>
                        <li>â€¢ Uploaded documents â€” the checklist only tracks readiness</li>
                    </ul>
                </section>
            </div>
            <section className="mt-6 space-y-4 rounded-2xl border border-[#E8E3D9] bg-white p-6 text-sm leading-relaxed text-slate-700">
                <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900"><Lock className="h-5 w-5 text-[#07966B]" />How your data is used</h2>
                <p>Answers are used only to run the rule-based eligibility engine and personalise checklists and reminders. They are never sold or shown on public dashboards; the impact page shows aggregate counts only.</p>
                <p>The ADIKHAR Assistant sends your question plus public scheme information and your screening summary to an AI model to generate an explanation. AI never decides eligibility.</p>
                <p>Sessions use secure, http-only cookies. Secrets are stored in environment variables, and production traffic uses HTTPS.</p>
                <p>You can edit your answers anytime and permanently delete your account and all related data from <Link to="/profile" className="font-semibold text-[#07966B] hover:underline">My Profile</Link>.</p>
            </section>
            <Disclaimer className="mt-6" />
        </Page>
    );
}
