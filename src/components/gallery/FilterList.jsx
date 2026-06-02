import { FILTER_TAGS } from '../../data/arts';

export default function FilterList({ active, onChange, onSelect, ...props }) {
  const handleSelect = (value) => {
    onChange(value);
    onSelect?.(value);
  };

  return (
    <div className="flex flex-col gap-1.5" role="group" {...props}>
      {FILTER_TAGS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => handleSelect(value)}
          aria-pressed={active === value}
          className={`filter-option w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
            active === value
              ? 'bg-[var(--color-accent-muted)] text-[var(--color-accent)]'
              : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
