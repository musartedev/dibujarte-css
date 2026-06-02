import { useState, useEffect, useCallback } from 'react';

const VOTED_KEY = 'dibujarte-voted-arts';
const LOCAL_COUNTS_KEY = 'dibujarte-vote-counts';

function readVoted() {
  try {
    const raw = localStorage.getItem(VOTED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeVoted(ids) {
  localStorage.setItem(VOTED_KEY, JSON.stringify(ids));
}

function readLocalCounts() {
  try {
    const raw = localStorage.getItem(LOCAL_COUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeLocalCounts(counts) {
  localStorage.setItem(LOCAL_COUNTS_KEY, JSON.stringify(counts));
}

async function fetchCounts() {
  const response = await fetch('/api/votes');
  if (!response.ok) throw new Error('Votes API unavailable');
  return response.json();
}

async function postVote(artId) {
  const response = await fetch(`/api/votes/${encodeURIComponent(artId)}`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Vote failed');
  return response.json();
}

export function useVotesState() {
  const [counts, setCounts] = useState(() => readLocalCounts());
  const [votedIds, setVotedIds] = useState(() => new Set(readVoted()));
  const [pendingId, setPendingId] = useState(null);

  useEffect(() => {
    fetchCounts()
      .then((remote) => setCounts(remote))
      .catch(() => setCounts(readLocalCounts()));
  }, []);

  const hasVoted = useCallback((artId) => votedIds.has(artId), [votedIds]);

  const getCount = useCallback((artId) => counts[artId] ?? 0, [counts]);

  const vote = useCallback(
    async (artId) => {
      if (votedIds.has(artId) || pendingId === artId) return;

      setPendingId(artId);

      try {
        const { votes } = await postVote(artId);
        setCounts((prev) => ({ ...prev, [artId]: votes }));
      } catch {
        setCounts((prev) => {
          const next = { ...prev, [artId]: (prev[artId] ?? 0) + 1 };
          writeLocalCounts(next);
          return next;
        });
      }

      const nextVoted = [...votedIds, artId];
      setVotedIds(new Set(nextVoted));
      writeVoted(nextVoted);
      setPendingId(null);
    },
    [votedIds, pendingId]
  );

  return { getCount, hasVoted, vote, pendingId };
}
