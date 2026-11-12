export function PageHeader({ eyebrow, title, sub, children }) {
    return (
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="rise">
                {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d9488]">{eyebrow}</p>}
                <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
                {sub && <p className="mt-2 max-w-2xl text-slate-600">{sub}</p>}
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
        <div data-testid={testId} className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-10 text-center">
            {Icon && <Icon className="mx-auto mb-3 h-8 w-8 text-slate-400" />}
            <p className="font-semibold text-slate-800">{title}</p>
            {text && <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">{text}</p>}
            {action && <div className="mt-5">{action}</div>}
        </div>
    );
}

export const btn = {
    primary: "inline-flex items-center justify-center gap-2 rounded-full bg-[#0a192f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#112240] disabled:opacity-50",
    teal: "inline-flex items-center justify-center gap-2 rounded-full bg-[#0d9488] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 disabled:opacity-50",
    ghost: "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 disabled:opacity-50",
};
