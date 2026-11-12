import { CheckCircle2, CircleHelp, ShieldQuestion, XCircle } from "lucide-react";
import { useLang } from "@/context/LangContext";

export const STATUS_STYLE = {
    LIKELY_ELIGIBLE: { cls: "bg-emerald-50 text-emerald-800 border-emerald-200", Icon: CheckCircle2, dot: "bg-emerald-500" },
    NEEDS_VERIFICATION: { cls: "bg-amber-50 text-amber-800 border-amber-200", Icon: ShieldQuestion, dot: "bg-amber-500" },
    POTENTIALLY_ELIGIBLE: { cls: "bg-sky-50 text-sky-800 border-sky-200", Icon: CircleHelp, dot: "bg-sky-500" },
    NOT_ELIGIBLE: { cls: "bg-slate-100 text-slate-600 border-slate-200", Icon: XCircle, dot: "bg-slate-400" },
};

export default function StatusBadge({ status, testId }) {
    const { t } = useLang();
    const s = STATUS_STYLE[status] || STATUS_STYLE.POTENTIALLY_ELIGIBLE;
    return (
        <span data-testid={testId} className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${s.cls}`}>
            <s.Icon className="h-3.5 w-3.5" aria-hidden />
            {t(`status.${status}`)}
        </span>
    );
}
