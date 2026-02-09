
import React from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-orange-100/50">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => onPageChange(Page.HOME)}
        >
          <div className="bg-gradient-to-tr from-primary to-accent p-2.5 rounded-2xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform duration-300">
            <svg className="size-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            Interplus
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => onPageChange(item.page)}
              className={`text-[15px] font-bold transition-all relative py-1
                ${currentPage === item.page 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-primary'}`}
            >
              {item.label}
              {currentPage === item.page && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => onPageChange(Page.CONTACT)}
            className="hidden sm:inline-flex items-center justify-center rounded-2xl h-12 px-8 bg-slate-900 text-white text-[15px] font-bold transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ota yhteyttä
          </button>
          <button className="md:hidden p-2 text-slate-900">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
