import { FILTER_TAGS } from '../../data/arts';

export default function FilterChips({ active, onChange }) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="group"
      aria-label="Filtrar obras por categoría"
    >
      {FILTER_TAGS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          aria-pressed={active === value}
          className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
            active === value
              ? 'bg-[var(--color-accent)] text-white shadow-sm'
              : 'border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
