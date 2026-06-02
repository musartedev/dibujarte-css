import { SORT_OPTIONS } from '../../data/arts';

export default function SortList({ value, onChange, onSelect, ...props }) {
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    onSelect?.(optionValue);
  };

  return (
    <div className="flex flex-col gap-1.5" role="group" {...props}>
      {SORT_OPTIONS.map(({ value: optionValue, label }) => (
        <button
          key={optionValue}
          type="button"
          onClick={() => handleSelect(optionValue)}
          aria-pressed={value === optionValue}
          className={`filter-option w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
            value === optionValue
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
