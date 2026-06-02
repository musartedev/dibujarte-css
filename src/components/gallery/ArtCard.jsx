function ExternalIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === 'twitter') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ArtCard({ title, author, imgUrl, linkToOriginal, tags }) {
  return (
    <article className="art-card group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-sm">
      <a
        href={linkToOriginal}
        target="_blank"
        rel="noopener noreferrer"
        className="art-card-media relative block aspect-square overflow-hidden bg-[var(--color-accent-muted)]"
        aria-label={`Ver ${title} por ${author.name}`}
      >
        <img
          src={imgUrl}
          alt=""
          className="h-full w-full object-cover transition duration-500"
          loading="lazy"
          decoding="async"
        />
        <span className="art-card-badge absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Ver obra
          <ExternalIcon />
        </span>
      </a>

      <footer className="flex flex-1 flex-col gap-2.5 p-3.5">
        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-[0.9375rem] font-bold leading-snug tracking-tight">
            <a
              href={linkToOriginal}
              target="_blank"
              rel="noopener noreferrer"
              className="card-title-link text-[var(--color-text)]"
            >
              {title}
            </a>
          </h3>
          <p className="mt-1 truncate text-sm text-[var(--color-text-muted)]">{author.name}</p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="flex min-w-0 flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[var(--color-accent-muted)] px-1.5 py-0.5 text-[0.6875rem] font-medium leading-tight text-[var(--color-accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {(author.twitter || author.github) && (
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="text-[0.6875rem] font-medium text-[var(--color-text-muted)]">
                Síguele en:
              </span>
              <div className="flex gap-0.5">
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-social-btn"
                    aria-label={`Twitter de ${author.name}`}
                  >
                    <SocialIcon type="twitter" />
                  </a>
                )}
                {author.github && (
                  <a
                    href={author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-social-btn"
                    aria-label={`GitHub de ${author.name}`}
                  >
                    <SocialIcon type="github" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </footer>
    </article>
  );
}
