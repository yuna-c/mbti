import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import bgImage from '../../assets/images/bg.png';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="relative z-10 p-3 md:px-6 md:py-4 Layout">
        <div className="fixed pointer-events-none w-700px -z-10 -top-20 -right-12 opacity-85 Bg">
          <img src={bgImage} alt="bgImage" className="w-auto h-auto" />
        </div>

        <section className="min-h-[calc(100vh-11rem)] z-10 top-0 opacity-90 ">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
