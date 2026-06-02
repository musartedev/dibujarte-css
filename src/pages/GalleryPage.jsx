import { useState, useMemo } from 'react';
import { arts } from '../data/arts';
import GallerySidebar from '../components/gallery/GallerySidebar';
import GalleryMobileBar from '../components/gallery/GalleryMobileBar';
import Gallery from '../components/gallery/Gallery';
import { useVotes } from '../context/VotesContext';
import { sortArts } from '../utils/sortArts';

export default function GalleryPage() {
  const [filter, setFilter] = useState('todos');
  const [sort, setSort] = useState('recientes');
  const [listKey, setListKey] = useState(0);
  const { getCount } = useVotes();

  const displayedArts = useMemo(() => {
    const filtered =
      filter === 'todos' ? arts : arts.filter((art) => art.tags.includes(filter));
    return sortArts(filtered, sort, getCount);
  }, [filter, sort, getCount]);

  const handleFilterChange = (nextFilter) => {
    setFilter(nextFilter);
    setListKey((k) => k + 1);
  };

  const handleSortChange = (nextSort) => {
    setSort(nextSort);
    setListKey((k) => k + 1);
  };

  const countLabel = displayedArts.length === 1 ? 'obra' : 'obras';

  const filterPanelProps = {
    count: displayedArts.length,
    countKey: listKey,
    filter,
    sort,
    onFilterChange: handleFilterChange,
    onSortChange: handleSortChange,
  };

  return (
    <>
      <GallerySidebar {...filterPanelProps} />

      <div className="gallery-layout-offset">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <section className="relative mb-12 overflow-hidden py-6 text-center sm:py-8">
            <div className="hero-glow" aria-hidden />
            <div className="hero-stagger relative z-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Comunidad CSS
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4.5vw+0.625rem,3rem)] font-extrabold leading-none tracking-tight whitespace-nowrap text-[var(--color-text)] sm:text-5xl sm:leading-tight">
                #DibujarteCSS
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Galería de arte hecho solo con HTML y CSS. Explora, filtra y únete al reto.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/musartedev/dibujarte-css"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                >
                  Únete al reto
                </a>
              </div>
            </div>
          </section>

          <section id="galeria" className="scroll-mt-header" aria-labelledby="galeria-heading">
            <h2 id="galeria-heading" className="sr-only">
              Galería de obras
            </h2>

            <GalleryMobileBar
              filter={filter}
              sort={sort}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />

            <p className="mb-6 text-sm text-[var(--color-text-muted)] lg:hidden">
              <span key={listKey} className="count-pop font-semibold text-[var(--color-accent)]">
                {displayedArts.length}
              </span>{' '}
              {countLabel}
            </p>

            <Gallery arts={displayedArts} listKey={`${filter}-${sort}`} />
          </section>
        </div>
      </div>
    </>
  );
}
