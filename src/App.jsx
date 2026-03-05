import './App.css'
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AboutSchoolPage from "./pages/page-about/AboutSchoolPage";
import SchoolManagersPage from "./pages/page-managers/SchoolManagersPage";
import TeachersPage from './pages/page-teachers/TeachersPage';
import NewsPage from './pages/page-news/NewsPage';
import GalleryPage from './pages/page-gallery/GalleryPage';
import Register from './components/contact/Registes';
import System from './pages/page-system/SystemPage';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-school" element={<AboutSchoolPage />} />
        <Route path="/school-managers" element={<SchoolManagersPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Register />} />
        <Route path="/system" element={<System />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </>
  );
}


export default App;
