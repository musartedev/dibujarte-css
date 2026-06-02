import { createContext, useContext } from 'react';
import { useVotesState } from '../hooks/useVotes';

const VotesContext = createContext(null);

export function VotesProvider({ children }) {
  const value = useVotesState();
  return <VotesContext.Provider value={value}>{children}</VotesContext.Provider>;
}

export function useVotes() {
  const context = useContext(VotesContext);
  if (!context) {
    throw new Error('useVotes must be used within VotesProvider');
  }
  return context;
}
