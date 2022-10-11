import { UserContextProvider } from '@/context/UserContext';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <UserContextProvider>
      <Header />
      <Sidebar />
      <main className="mt-[5.6rem] ml-60">{children}</main>
      <Toaster position="top-right" />
    </UserContextProvider>
  );
}
