export function PageHeader({ eyebrow, title, sub, children }) {
    return (
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="rise">
                {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#07966B]">{eyebrow}</p>}
                <h1 className="text-3xl font-bold text-[#101B30] sm:text-4xl">{title}</h1>
                {sub && <p className="mt-2 max-w-2xl text-[#101B30]/75">{sub}</p>}
            </div>
            {children && <div className="flex flex-wrap gap-2">{children}</div>}
        </div>
    );
}

export function Page({ children, className = "" }) {
    return <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ${className}`}>{children}</div>;
}

export function EmptyState({ icon: Icon, title, text, action, testId }) {
    return (
        <div data-testid={testId} className="rounded-xl border border-dashed border-[#E8E3D9] bg-white/80 p-10 text-center shadow-xs">
            {Icon && <Icon className="mx-auto mb-3 h-8 w-8 text-[#101B30]/40" />}
            <p className="font-semibold text-[#101B30]">{title}</p>
            {text && <p className="mx-auto mt-1 max-w-md text-sm text-[#101B30]/65">{text}</p>}
            {action && <div className="mt-5">{action}</div>}
        </div>
    );
}

export const btn = {
    primary: "inline-flex items-center justify-center gap-2 rounded-full bg-[#101B30] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#07966B] shadow-xs disabled:opacity-50",
    teal: "inline-flex items-center justify-center gap-2 rounded-full bg-[#07966B] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#046C4E] shadow-xs disabled:opacity-50",
    emerald: "inline-flex items-center justify-center gap-2 rounded-full bg-[#07966B] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#046C4E] shadow-xs disabled:opacity-50",
    ghost: "inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E3D9] bg-white px-5 py-2.5 text-sm font-semibold text-[#101B30] transition-colors hover:border-[#07966B]/50 hover:bg-[#FBF8F1] disabled:opacity-50",
};
