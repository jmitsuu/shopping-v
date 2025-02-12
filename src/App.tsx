import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Toaster } from '@/components/ui/sonner';
import { Header } from './components/header/header';
import { ShoppRoutes } from './routes/router';
import { Footer } from './components/footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './routes/scrollToUp';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Header />
          <ShoppRoutes />
          <Footer />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
