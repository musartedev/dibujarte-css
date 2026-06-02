import { useVotes } from '../../context/VotesContext';

function HeartIcon({ filled }) {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

export default function VoteButton({ artId }) {
  const { getCount, hasVoted, vote, pendingId } = useVotes();
  const voted = hasVoted(artId);
  const count = getCount(artId);
  const isPending = pendingId === artId;

  return (
    <button
      type="button"
      onClick={() => vote(artId)}
      disabled={voted || isPending}
      aria-pressed={voted}
      aria-label={voted ? `Ya votaste por esta obra (${count} votos)` : `Votar por esta obra (${count} votos)`}
      className={`vote-btn ${voted ? 'vote-btn--voted' : ''}`}
    >
      <HeartIcon filled={voted} />
      <span className="tabular-nums">{count}</span>
    </button>
  );
}
