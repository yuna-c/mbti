import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import bgImage from '../../assets/images/bg.png';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="relative z-10 p-3 px-0 py-0 bg-white opacity-100 md:bg-white md:px-6 md:py-4 Layout">
        <div className="fixed pointer-events-none xl:opacity-80 lg:opacity-20 opacity-20 w-700px -z-10 md:-top-20 -top-5 -right-12 Bg">
          <img src={bgImage} alt="bgImage" className="w-auto h-auto" />
        </div>

        <section className="min-h-[calc(100vh-11rem)]">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
