import BlogPage from './pages/BlogPage';
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
// --- LISÄTTY: Tuodaan uusi sivu ---
import AboutPage from './pages/AboutPage'; 

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Skrollaa sivun yläreunaan kun sivu vaihtuu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onPageChange={setCurrentPage} />;
      case Page.SERVICES:
        return <ServicesPage onPageChange={setCurrentPage} />;
      
      // --- PÄIVITETTY: Nyt ABOUT-reitti näyttää AboutPage-komponentin ---
        case Page.BLOG:
  return <BlogPage onPageChange={setCurrentPage} />;
      case Page.ABOUT:
        return <AboutPage onPageChange={setCurrentPage} />; 
      
   case Page.BLOG:
  return <BlogPage onPageChange={setCurrentPage} />;
      case Page.CONTACT:
        return <HomePage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-display selection:bg-primary/20">
      {/* Taustapallot (näkyvät vain Services-sivulla) */}
      {currentPage === Page.SERVICES && (
        <>
          <div className="blob-bg bg-accent-warm w-[600px] h-[600px] -top-64 -left-48"></div>
          <div className="blob-bg bg-accent-pink w-[500px] h-[500px] top-1/2 -right-48"></div>
          <div className="blob-bg bg-primary w-[400px] h-[400px] bottom-0 left-1/4"></div>
        </>
      )}

      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
};

export default App;
