import { Info } from "lucide-react";

export default function Disclaimer({ className = "", children }) {
    return (
        <p data-testid="screening-disclaimer" className={`flex items-start gap-2 rounded-lg border border-slate-200 bg-white/70 p-3 text-xs leading-relaxed text-slate-600 ${className}`}>
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" aria-hidden />
            <span>
                {children ||
                    "ENTITLE screening is informational only. It is not an official government decision and does not guarantee any benefit. Always confirm eligibility on the official government source."}
            </span>
        </p>
    );
}
