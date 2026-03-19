export function FormInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
  rows = 4
}: {
  label: string;
  name: string;
  value: string;
  onChange: (nextValue: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-slate-700">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-accent/60 focus:ring-0"
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-accent/60 focus:ring-0"
        />
      )}
    </label>
  );
}

