import type { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white/80 p-8 text-center shadow-soft ring-1 ring-slate-100">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-soft">
        <span aria-hidden className="text-xl">
          ♥
        </span>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-slate-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

