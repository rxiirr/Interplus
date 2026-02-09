import React from 'react';
import { SERVICES, VALUES, IMAGES } from '../constants';
import { Page } from '../types';

interface HomePageProps {
  onPageChange: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-mesh-warm">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <div className="flex flex-col items-center gap-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary-dark rounded-full w-fit border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-wider">Asiantuntijoiden Osuuskunta</span>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              <h1 className="text-6xl sm:text-7xl md:text-[7.5rem] font-extrabold leading-[0.9] tracking-tighter text-slate-900 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10">
                <span>Tieto</span>
                <span className="text-primary font-normal">|</span>
                <span>Taito</span>
                <span className="text-accent font-normal">|</span>
                <span>Tulevaisuus</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                Kun tekijät omistavat työnsä, laatu on lupaus. Rakennamme inhimillistä ja lämminhenkistä kotoutumista asiantuntijavoimin.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-5">
              <button 
                onClick={() => onPageChange(Page.SERVICES)}
                className="bg-primary text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1"
              >
                Tutustu palveluihin
              </button>
              <button 
                onClick={() => onPageChange(Page.ABOUT)}
                className="bg-white text-slate-900 border-2 border-orange-100 px-10 py-5 rounded-3xl font-black text-lg hover:bg-secondary/50 transition-all"
              >
                Lue meistä
              </button>
            </div>

            <div className="relative w-full max-w-4xl mx-auto mt-16 px-4">
              <div className="relative aspect-[21/9] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[3rem] rotate
