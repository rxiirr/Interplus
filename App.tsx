
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onPageChange={setCurrentPage} />;
      case Page.SERVICES:
        return <ServicesPage onPageChange={setCurrentPage} />;
      // For demo purposes, other pages lead to Home or Services
      case Page.ABOUT:
        return <HomePage onPageChange={setCurrentPage} />; 
      case Page.BLOG:
        return <HomePage onPageChange={setCurrentPage} />;
      case Page.CONTACT:
        return <HomePage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-display selection:bg-primary/20">
      {/* Background Blobs for specific pages */}
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
