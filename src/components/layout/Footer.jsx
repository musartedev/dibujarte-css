export default function Footer() {
  return (
    <footer className="gallery-layout-offset border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text-muted)]">
      <p>
        Hecho desde LATAM con{' '}
        <span className="inline-block transition hover:scale-125" role="img" aria-label="corazón morado">
          💜
        </span>{' '}
        por{' '}
        <a
          href="https://musarte.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent font-medium text-[var(--color-text)]"
        >
          Mus
        </a>
      </p>
      <p className="mt-2">
        <a
          href="https://github.com/musartedev/dibujarte-css"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent font-medium text-[var(--color-accent)]"
        >
          #DibujarteCSS
        </a>
      </p>
    </footer>
  );
}
