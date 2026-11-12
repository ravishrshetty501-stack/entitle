import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bell, Bookmark, CalendarClock, ClipboardCheck, Compass, ShieldQuestion, Sparkles } from "lucide-react";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Page, EmptyState, btn } from "@/components/Layout";
import StatusBadge from "@/components/StatusBadge";
import { PageLoader } from "@/components/ProtectedRoute";
import { Progress } from "@/components/ui/progress";
import { humanize } from "@/lib/options";

function Stat({ icon: Icon, label, value, to, testId }) {
    return (
        <Link to={to} data-testid={testId} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <Icon className="h-5 w-5 text-[#0d9488]" />
            <p className="mt-3 font-display text-3xl font-bold text-slate-900">{value}</p>
            <p className="text-sm text-slate-600">{label}</p>
        </Link>
    );
}

export default function Dashboard() {
    const { user } = useAuth();
    const [data, setData] = useState(null);

    useEffect(() => {
        Promise.all([api.profile.get(), api.eligibility.results(), api.saved.list(), api.applications.list(), api.notifications.list()])
            .then(([profile, results, saved, apps, notes]) => setData({ profile, results, saved, apps, notes }))
            .catch(() => setData({ profile: { completion: 0 }, results: [], saved: [], apps: [], notes: [] }));
    }, []);
    if (!data) return <PageLoader />;

    const { profile, results, saved, apps, notes } = data;
    const relevant = results.filter((r) => r.status !== "NOT_ELIGIBLE");
    const verify = results.filter((r) => r.status === "NEEDS_VERIFICATION");
    const deadlines = apps.filter((a) => a.deadline).sort((a, b) => a.deadline.localeCompare(b.deadline));
    const top = relevant[0];
    const nextAction = !results.length
        ? { text: "Complete the eligibility assessment to discover schemes that fit you.", to: "/assessment", cta: "Start assessment" }
        : apps.find((a) => a.missingDocuments.length)
            ? (() => { const a = apps.find((x) => x.missingDocuments.length); return { text: `Prepare ${a.missingDocuments.length} remaining document(s) for ${a.schemeName}.`, to: `/checklist/${a.schemeId}`, cta: "Open checklist" }; })()
            : top ? { text: top.nextAction, to: `/schemes/${top.schemeId}`, cta: "View scheme" } : { text: "Update your profile to find more matches.", to: "/assessment", cta: "Edit answers" };

    return (
        <Page>
            <div className="mb-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <div className="rise">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d9488]">Dashboard</p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl" data-testid="dashboard-greeting">Namaste, {user.name?.split(" ")[0]}</h1>
                    <p className="mt-2 text-slate-600">Here is where you stand across {results.length || 21} schemes.</p>
                    <div className="mt-6 max-w-md" data-testid="profile-completion">
                        <div className="mb-1.5 flex justify-between text-sm"><span className="text-slate-600">Profile completion</span><span className="font-semibold">{profile.completion}%</span></div>
                        <Progress value={profile.completion} className="h-2" />
                        {profile.completion < 100 && <Link to="/assessment" className="mt-2 inline-block text-sm font-semibold text-[#0d9488] hover:underline">Complete profile for better matches</Link>}
                    </div>
                </div>
                <div className="rise rounded-2xl bg-[#0a192f] p-6 text-white" data-testid="recommended-next-action" style={{ animationDelay: "100ms" }}>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300"><Sparkles className="h-4 w-4" />Recommended next action</p>
                    <p className="mt-3 text-lg leading-snug">{nextAction.text}</p>
                    <Link to={nextAction.to} className="mt-5 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0a192f]" data-testid="next-action-cta">{nextAction.cta}<ArrowRight className="h-4 w-4" /></Link>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <Stat icon={Compass} label="Potentially relevant schemes" value={relevant.length} to="/results" testId="stat-relevant" />
                <Stat icon={ShieldQuestion} label="Need verification" value={verify.length} to="/results" testId="stat-verification" />
                <Stat icon={Bookmark} label="Saved schemes" value={saved.length} to="/schemes" testId="stat-saved" />
                <Stat icon={ClipboardCheck} label="Applications tracked" value={apps.length} to="/applications" testId="stat-applications" />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                <section>
                    <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold">Top matches</h2><Link to="/results" className="text-sm font-semibold text-[#0d9488] hover:underline">All results</Link></div>
                    {relevant.length === 0 ? (
                        <EmptyState icon={Compass} testId="dashboard-no-matches" title="No matches yet" text="Run the assessment to see schemes." action={<Link to="/assessment" className={btn.primary}>Start</Link>} />
                    ) : (
                        <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
                            {relevant.slice(0, 5).map((r) => (
                                <li key={r.schemeId}>
                                    <Link to={`/schemes/${r.schemeId}`} className="flex items-center gap-4 p-4 hover:bg-slate-50" data-testid={`dashboard-match-${r.schemeId}`}>
                                        <div className="min-w-0 flex-1"><p className="truncate font-medium text-slate-900">{r.schemeName}</p><p className="text-xs text-slate-500">{r.estimatedBenefit}</p></div>
                                        <StatusBadge status={r.status} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {saved.length > 0 && (
                        <div className="mt-8">
                            <h2 className="mb-4 text-xl font-semibold">Saved schemes</h2>
                            <div className="flex flex-wrap gap-2">
                                {saved.map((s) => <Link key={s.id} to={`/schemes/${s.schemeId}`} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm hover:border-teal-500" data-testid={`saved-chip-${s.schemeId}`}>{s.scheme.name}</Link>)}
                            </div>
                        </div>
                    )}
                </section>
                <aside className="space-y-6">
                    <div className="rounded-xl border border-slate-200 bg-white p-5" data-testid="tracker-summary">
                        <h2 className="mb-3 font-semibold">Application tracker</h2>
                        {apps.length === 0 ? <p className="text-sm text-slate-500">No applications tracked yet. Add one from any scheme page.</p> : (
                            <ul className="space-y-2 text-sm">
                                {apps.slice(0, 4).map((a) => <li key={a.id} className="flex justify-between gap-2"><span className="truncate">{a.schemeName}</span><span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs">{humanize(a.status)}</span></li>)}
                            </ul>
                        )}
                        <Link to="/applications" className="mt-3 inline-block text-sm font-semibold text-[#0d9488] hover:underline">Open tracker</Link>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5" data-testid="upcoming-deadlines">
                        <h2 className="mb-3 flex items-center gap-2 font-semibold"><CalendarClock className="h-4 w-4 text-amber-500" />Upcoming deadlines</h2>
                        {deadlines.length === 0 ? <p className="text-sm text-slate-500">Add deadlines to tracked applications to get reminders.</p> :
                            <ul className="space-y-2 text-sm">{deadlines.map((a) => <li key={a.id} className="flex justify-between"><span className="truncate">{a.schemeName}</span><span className="font-medium text-amber-700">{a.deadline}</span></li>)}</ul>}
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5">
                        <h2 className="mb-3 flex items-center gap-2 font-semibold"><Bell className="h-4 w-4 text-[#0d9488]" />Reminders</h2>
                        {notes.length === 0 ? <p className="text-sm text-slate-500">You're all caught up.</p> :
                            <ul className="space-y-2 text-sm text-slate-700">{notes.slice(0, 3).map((n) => <li key={n.id}>• {n.message}</li>)}</ul>}
                    </div>
                </aside>
            </div>
        </Page>
    );
}
