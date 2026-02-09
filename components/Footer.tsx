
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-warm-gray text-slate-900 py-24 border-t border-orange-100">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <svg className="size-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-black tracking-tight">Interplus</h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-500 font-medium max-w-md">
            Asiantuntijoiden oma osuuskunta, joka rakentaa inhimillisempää huomista yhteiskunnallisen integraation kautta.
          </p>
          <div className="flex gap-4">
            <a className="size-12 rounded-2xl bg-white border border-orange-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="size-12 rounded-2xl bg-white border border-orange-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-8">Navigaatio</h4>
          <ul className="space-y-4 font-bold">
            <li><button onClick={() => onPageChange(Page.HOME)} className="text-slate-600 hover:text-primary transition-colors">Etusivu</button></li>
            <li><button onClick={() => onPageChange(Page.SERVICES)} className="text-slate-600 hover:text-primary transition-colors">Palvelut</button></li>
            <li><button onClick={() => onPageChange(Page.ABOUT)} className="text-slate-600 hover:text-primary transition-colors">Meistä</button></li>
            <li><button onClick={() => onPageChange(Page.BLOG)} className="text-slate-600 hover:text-primary transition-colors">Blogi</button></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-8">Palvelut</h4>
          <ul className="space-y-4 font-bold">
            <li><button className="text-slate-600 hover:text-primary transition-colors">Orientaatio</button></li>
            <li><button className="text-slate-600 hover:text-primary transition-colors">Konsultointi</button></li>
            <li><button className="text-slate-600 hover:text-primary transition-colors">Koulutus</button></li>
            <li><button className="text-slate-600 hover:text-primary transition-colors">Materiaali</button></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-8">Yhteystiedot</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-slate-600 font-bold">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Helsinki, Suomi
            </li>
            <li className="flex items-center gap-4 text-slate-600 font-bold">
              <span className="material-symbols-outlined text-primary">mail</span>
              info@interplus.fi
            </li>
            <li className="flex items-center gap-4 text-slate-600 font-bold">
              <span className="material-symbols-outlined text-primary">call</span>
              +358 00 000 0000
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 mt-24 pt-10 border-t border-orange-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-bold text-slate-400">© 2024 Interplus Osuuskunta. Kaikki oikeudet pidätetään.</p>
        <div className="flex gap-10">
          <a className="text-sm font-bold text-slate-400 hover:text-primary" href="#">Tietosuoja</a>
          <a className="text-sm font-bold text-slate-400 hover:text-primary" href="#">Evästeet</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
