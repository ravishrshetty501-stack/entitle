import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BellOff, CalendarClock, CheckCheck, FileWarning, UserRoundPen, X, ListTodo } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Page, PageHeader, EmptyState, btn } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const ping = () => window.dispatchEvent(new Event("entitle:notifications"));
const ICON = { DOCUMENTS: FileWarning, DEADLINE: CalendarClock, PROFILE: UserRoundPen, TRACKER: ListTodo };
const PREFS = [["notifyDocuments", "Missing document reminders"], ["notifyDeadlines", "Upcoming deadline reminders"], ["notifyProfile", "Profile completion tips"], ["notifyTracker", "Tracker update nudges"]];

export default function Notifications() {
    const [list, setList] = useState(null);
    const [prefs, setPrefs] = useState(null);
    useEffect(() => {
        api.notifications.list().then(setList).catch(() => setList([]));
        api.notifications.prefs().then(setPrefs).catch(() => { });
    }, []);
    if (!list) return <PageLoader />;

    const read = async (n) => { if (!n.readStatus) { await api.notifications.read(n.id).catch(() => { }); setList(list.map((x) => (x.id === n.id ? { ...x, readStatus: true } : x))); ping(); } };
    const dismiss = async (n) => { try { await api.notifications.dismiss(n.id); setList(list.filter((x) => x.id !== n.id)); ping(); } catch (e) { toast.error(errorMessage(e)); } };
    const readAll = async () => { await api.notifications.readAll(); setList(list.map((x) => ({ ...x, readStatus: true }))); ping(); };
    const toggle = async (k) => { const p = await api.notifications.updatePrefs({ [k]: !prefs[k] }); setPrefs(p); toast.success("Preference saved"); };

    return (
        <Page className="max-w-5xl">
            <PageHeader eyebrow="In-app only" title="Notifications" sub="Reminders are shown here only. ENTITLE never sends SMS or email without an integration and your consent.">
                {list.some((n) => !n.readStatus) && <button onClick={readAll} className={btn.ghost} data-testid="mark-all-read"><CheckCheck className="h-4 w-4" />Mark all read</button>}
            </PageHeader>
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                <div>
                    {list.length === 0 ? <EmptyState icon={BellOff} testId="notifications-empty" title="You're all caught up" text="Reminders about documents, deadlines and your profile will appear here." /> : (
                        <ul className="space-y-3" data-testid="notifications-list">
                            {list.map((n) => {
                                const Icon = ICON[n.notificationType] || ListTodo;
                                return (
                                    <li key={n.id} className={`flex items-start gap-3 rounded-xl border p-4 ${n.readStatus ? "border-slate-200 bg-white" : "border-teal-200 bg-teal-50/40"}`} data-testid={`notification-${n.id}`}>
                                        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${n.notificationType === "DEADLINE" ? "text-red-500" : "text-amber-500"}`} />
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-800">{n.message}</p>
                                            <div className="mt-2 flex gap-4 text-xs">
                                                {n.link && <Link to={n.link} onClick={() => read(n)} className="font-semibold text-[#0d9488] hover:underline" data-testid={`notification-open-${n.id}`}>Open</Link>}
                                                {!n.readStatus && <button onClick={() => read(n)} className="text-slate-500 hover:text-slate-800" data-testid={`notification-read-${n.id}`}>Mark read</button>}
                                            </div>
                                        </div>
                                        <button onClick={() => dismiss(n)} aria-label="Dismiss" className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" data-testid={`notification-dismiss-${n.id}`}><X className="h-4 w-4" /></button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5" data-testid="notification-preferences">
                    <h2 className="mb-4 font-semibold">Notification preferences</h2>
                    {prefs && PREFS.map(([k, l]) => (
                        <label key={k} className="flex items-center justify-between gap-4 border-b border-slate-100 py-3 text-sm last:border-0">
                            {l}<Switch checked={prefs[k]} onCheckedChange={() => toggle(k)} data-testid={`pref-${k}`} />
                        </label>
                    ))}
                </aside>
            </div>
        </Page>
    );
}
