import { useState, useEffect } from 'react';
import { arts } from '../data/arts';
import FilterChips from '../components/gallery/FilterChips';
import Gallery from '../components/gallery/Gallery';

export default function GalleryPage() {
  const [filter, setFilter] = useState('todos');
  const [filteredArts, setFilteredArts] = useState(arts);

  useEffect(() => {
    setFilteredArts(
      filter === 'todos' ? arts : arts.filter((art) => art.tags.includes(filter))
    );
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
          Comunidad CSS
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl">
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
            className="inline-flex items-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
          >
            Únete al reto
          </a>
        </div>
      </section>

      <section className="mb-8">
        <FilterChips active={filter} onChange={setFilter} />
        <p className="mt-4 text-center text-sm text-[var(--color-text-muted)]">
          {filteredArts.length} {filteredArts.length === 1 ? 'obra' : 'obras'}
        </p>
      </section>

      <Gallery arts={filteredArts} />
    </div>
  );
}
