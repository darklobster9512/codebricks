import { Outlet } from 'react-router-dom';
import Header from '@/components/limex/Header';
import Footer from '@/components/limex/Footer';

const SiteLayout = () => (
  <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#0B1220]">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default SiteLayout;
