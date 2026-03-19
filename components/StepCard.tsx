export function StepCard({
  number,
  title,
  description
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl bg-white/80 p-5 shadow-soft ring-1 ring-slate-100 transition hover:bg-white">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-soft">
          <span className="text-sm font-semibold">{number}</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-slate-900">
            {title}
          </h3>
          <p className="text-xs leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

