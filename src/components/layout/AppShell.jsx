import { useState } from 'react';
import { toggleTheme, getTheme } from '../../hooks/useTheme';
import Footer from './Footer';

function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme);

  const handleToggle = () => {
    setTheme(toggleTheme());
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="theme-toggle shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 text-[var(--color-text-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:p-2.5"
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {theme === 'dark' ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <header className="site-header">
        <div className="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6">
          <a
            href="/"
            className="group flex min-w-0 items-center gap-2 font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-[var(--color-text)] sm:text-lg"
          >
            <span className="truncate transition group-hover:text-[var(--color-accent)]">Dibujarte</span>
            <span className="logo-badge flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)] text-xs text-white sm:h-9 sm:w-9 sm:text-sm">
              CSS
            </span>
          </a>

          <nav className="flex shrink-0 items-center gap-1.5 sm:gap-2" aria-label="Principal">
            <a href="#galeria" className="nav-link hidden sm:inline-flex">
              Galería
            </a>
            <a
              href="https://github.com/musartedev/dibujarte-css"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-action"
            >
              Contribuir
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="site-main min-w-0 flex-1">{children}</main>

      <Footer />
    </div>
  );
}
