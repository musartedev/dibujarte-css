import AppShell from './components/layout/AppShell';
import GalleryPage from './pages/GalleryPage';
import { VotesProvider } from './context/VotesContext';

export default function App() {
  return (
    <VotesProvider>
      <AppShell>
        <GalleryPage />
      </AppShell>
    </VotesProvider>
  );
}
