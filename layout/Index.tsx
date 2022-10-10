import { Fragment, ReactNode } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      {/* <Sidebar /> */}
      <main>{children}</main>
    </Fragment>
  );
}
