import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header';

const queryClient = new QueryClient();

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
