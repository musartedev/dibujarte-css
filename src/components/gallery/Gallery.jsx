import ArtCard from './ArtCard';

export default function Gallery({ arts, filterKey }) {
  if (arts.length === 0) {
    return (
      <div className="empty-state rounded-2xl border border-dashed border-[var(--color-border)] py-16 text-center text-[var(--color-text-muted)]">
        <p className="text-lg font-medium">No hay obras con este filtro</p>
        <p className="mt-2 text-sm">Prueba otra categoría</p>
      </div>
    );
  }

  return (
    <div
      key={filterKey}
      className="gallery-stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {arts.map((art) => (
        <ArtCard key={art.id} {...art} />
      ))}
    </div>
  );
}
