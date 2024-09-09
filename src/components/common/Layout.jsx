import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="p-6 Layout">
        <section className="min-h-[calc(100vh-11rem)]">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
