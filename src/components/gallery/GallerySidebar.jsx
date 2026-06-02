import GalleryFilterPanel from './GalleryFilterPanel';

export default function GallerySidebar(props) {
  return (
    <aside
      className="gallery-sidebar fixed bottom-0 left-0 z-30 hidden overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-6 lg:block"
      aria-label="Filtros de la galería"
    >
      <GalleryFilterPanel {...props} />
    </aside>
  );
}
