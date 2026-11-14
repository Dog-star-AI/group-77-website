import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { HomePage } from './pages/HomePage';
import { OurApproachPage } from './pages/OurApproachPage';
import { OurBusinessesPage } from './pages/OurBusinessesPage';
import { OurVisionPage } from './pages/OurVisionPage';

const routerBasename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';

/** Root router and global layout shell for Group 77. */
export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <div className="site-wrapper">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/businesses" element={<OurBusinessesPage />} />
            <Route path="/approach" element={<OurApproachPage />} />
            <Route path="/vision" element={<OurVisionPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
