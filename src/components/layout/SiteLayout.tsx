import { Outlet } from 'react-router-dom';
import Header from '@/components/limex/Header';
import Footer from '@/components/limex/Footer';

const SiteLayout = () => (
  <div className="min-h-screen flex flex-col bg-[#FAFBFC] text-[#0F1B3D]">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default SiteLayout;
