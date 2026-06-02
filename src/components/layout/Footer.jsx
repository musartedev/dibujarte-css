export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text-muted)]">
      <p>
        Hecho desde LATAM con{' '}
        <span role="img" aria-label="corazón morado">
          💜
        </span>
      </p>
      <p className="mt-2">
        <a
          href="https://github.com/musartedev/dibujarte-css"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-accent)] hover:underline"
        >
          #DibujarteCSS
        </a>
      </p>
    </footer>
  );
}
