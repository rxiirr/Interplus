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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[3rem] rotate-1"></div>
                <div className="absolute inset-0 overflow-hidden rounded-[3rem] -rotate-1 border-4 border-white shadow-2xl">
                  <img alt="Collaboration" className="w-full h-full object-cover" src={IMAGES.HERO_COLLAB} />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Asiantuntijoiden <br/>
                <span className="text-primary underline decoration-8 decoration-primary/10 underline-offset-4">oma yhteisö</span>
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-medium">
                Me tarjoamme korkealaatuisia yhteiskuntaorientaation ja kotoutumisen asiantuntijapalveluita. 
                Osuuskuntamuotoinen toimintamme takaa, että jokainen asiantuntija on sitoutunut parhaaseen mahdolliseen laatuun. 
                Lähestymme työtämme sydämellä ja vankalla ammattitaidolla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ajankohtaista/Blog Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-primary/10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <span className="text-accent font-black uppercase tracking-widest text-sm mb-4 block">Ajankohtaista</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Monikielinen yhteiskuntaorientaatio ja laki</h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                Mitä laki sanoo kotoutumisen tuesta ja mitä monikielinen neuvonta merkitsee maahanmuuttajille? Lue asiantuntijamme kooste aiheesta.
              </p>
              <button 
                onClick={() => onPageChange(Page.BLOG)}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-primary transition-all flex items-center gap-3"
              >
                Lue artikkeli
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="md:w-1/2 w-full h-64 md:h-80 bg-slate-200 rounded-[2rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Blog" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="flex flex-col gap-6 mb-20 max-w-3xl">
            <span className="text-primary font-black tracking-widest uppercase text-sm">Mitä teemme</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">Kattavat ratkaisut kotoutumisen tueksi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className={`group relative p-10 rounded-[3rem] bg-white border border-orange-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-4
                  ${index === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className={`size-20 rounded-3xl bg-secondary flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-primary group-hover:text-white
                  ${index % 2 === 0 ? 'rotate-2 group-hover:rotate-6' : '-rotate-2 group-hover:-rotate-6'}`}>
                  <span className={`material-symbols-outlined text-4xl font-light`}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-5 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-10">
                  {service.description}
                </p>
                <button 
                  onClick={() => onPageChange(Page.SERVICES)}
                  className="inline-flex items-center gap-3 text-primary font-black group/link"
                >
                  Tutustu
                  <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] -rotate-1 group">
                <img alt="Expertise" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={IMAGES.EXPERTISE_MEETING} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <p className="text-3xl font-black leading-tight italic">"Aito asiantuntijuus syntyy välittämisestä ja yhteisestä vastuusta."</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-12 leading-tight tracking-tighter text-slate-900">
                Miksi valita <span className="text-primary">Interplus?</span>
              </h2>
              <div className="space-y-10">
                {VALUES.map((value, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className={`shrink-0 size-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${value.bgClass}`}>
                      <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">{value.title}</h4>
                      <p className="text-slate-600 font-medium text-lg leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <button 
                  onClick={() => onPageChange(Page.ABOUT)}
                  className="bg-slate-900 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-primary-dark transition-all shadow-xl shadow-slate-900/10"
                >
                  Lue lisää osuuskunnastamme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-8 lg:p-12">
        <div className="max-w-[1400px] mx-auto rounded-4xl bg-gradient-to-br from-primary to-accent py-24 px-8 text-center relative overflow-hidden shadow-3xl shadow-primary/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
              Rakennetaan yhdessä kestävää tulevaisuutta
            </h2>
            <p className="text-white/90 text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto">
              Ota meihin yhteyttä, niin suunnitellaan tarpeisiinne vastaava, lämminhenkinen palvelukokonaisuus.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary px-12 py-5 rounded-3xl font-black text-xl hover:shadow-2xl transition-all hover:scale-105">
                Ota yhteyttä
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-white/20 transition-all">
                Varaa tapaaminen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
