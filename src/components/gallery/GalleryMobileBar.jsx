import { useState } from 'react';
import { FILTER_TAGS, SORT_OPTIONS } from '../../data/arts';
import BottomSheet from './BottomSheet';
import FilterList from './FilterList';
import SortList from './SortList';

function SortIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  );
}

function getSortLabel(value) {
  return SORT_OPTIONS.find((option) => option.value === value)?.shortLabel ?? value;
}

function getFilterLabel(value) {
  return FILTER_TAGS.find((option) => option.value === value)?.label ?? value;
}

export default function GalleryMobileBar({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}) {
  const [sheet, setSheet] = useState(null);
  const sortActive = sort !== 'recientes';
  const filterActive = filter !== 'todos';

  const closeSheet = () => setSheet(null);

  return (
    <>
      <div className="gallery-mobile-bar sticky z-40 -mx-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md sm:-mx-6 lg:hidden [top:var(--site-header-height)]">
        <div className="grid grid-cols-2 divide-x divide-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setSheet('sort')}
            className={`mobile-bar-btn flex flex-col items-center gap-0.5 px-3 py-3 text-[var(--color-accent)] ${
              sortActive ? 'mobile-bar-btn--active' : ''
            }`}
          >
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <SortIcon />
              Ordenar
            </span>
            <span className="max-w-full truncate text-xs text-[var(--color-text-muted)]">
              {getSortLabel(sort)}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSheet('filter')}
            className={`mobile-bar-btn flex flex-col items-center gap-0.5 px-3 py-3 text-[var(--color-accent)] ${
              filterActive ? 'mobile-bar-btn--active' : ''
            }`}
          >
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <FilterIcon />
              Filtrar
            </span>
            <span className="max-w-full truncate text-xs text-[var(--color-text-muted)]">
              {getFilterLabel(filter)}
            </span>
          </button>
        </div>
      </div>

      <BottomSheet open={sheet === 'sort'} onClose={closeSheet} title="Ordenar">
        <SortList
          value={sort}
          onChange={onSortChange}
          onSelect={closeSheet}
          aria-label="Ordenar obras de la galería"
        />
      </BottomSheet>

      <BottomSheet open={sheet === 'filter'} onClose={closeSheet} title="Filtrar">
        <FilterList
          active={filter}
          onChange={onFilterChange}
          onSelect={closeSheet}
          aria-label="Filtrar obras por categoría"
        />
      </BottomSheet>
    </>
  );
}
