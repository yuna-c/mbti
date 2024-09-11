import './assets/styles/index.css';
import App from './App.jsx';

// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  // <StrictMode></StrictMode>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    <App />
  </QueryClientProvider>
);
