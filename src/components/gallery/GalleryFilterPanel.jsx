import FilterList from './FilterList';
import SortList from './SortList';

export default function GalleryFilterPanel({
  count,
  countKey,
  filter,
  sort,
  onFilterChange,
  onSortChange,
  onFilterSelect,
  onSortSelect,
}) {
  const countLabel = count === 1 ? 'obra' : 'obras';

  return (
    <div className="flex flex-col gap-6">
      <p
        key={countKey}
        className="count-pop inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--color-accent-muted)] px-3 py-1 text-sm"
      >
        <span className="font-semibold tabular-nums text-[var(--color-accent)]">{count}</span>
        <span className="text-[var(--color-text-muted)]">{countLabel}</span>
      </p>

      <div>
        <h3
          id="gallery-sort-label"
          className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Ordenar por
        </h3>
        <SortList
          value={sort}
          onChange={onSortChange}
          onSelect={onSortSelect}
          aria-labelledby="gallery-sort-label"
        />
      </div>

      <div>
        <h3
          id="gallery-filter-label"
          className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Categorías
        </h3>
        <FilterList
          active={filter}
          onChange={onFilterChange}
          onSelect={onFilterSelect}
          aria-labelledby="gallery-filter-label"
        />
      </div>
    </div>
  );
}
