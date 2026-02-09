import React from 'react';
import { Page } from '../types';

interface BlogPageProps {
  onPageChange: (page: Page) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <article className="">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
          Monikielinen yhteiskuntaorientaatio: Silta uuteen kotimaahan
        </h1>
        
        <p className="text-xl text-slate-800 mb-10 leading-relaxed font-medium">
          Suomen laki velvoittaa kunnat tarjoamaan kotoutumista edistävää tietoa. 
          Monikielinen yhteiskuntaorientaatio on tässä keskeisessä roolissa.
        </p>

        {/* 1. OSIO: Mitä laki sanoo? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mitä laki sanoo?</h2>
          <p className="text-lg text-slate-800 leading-relaxed">
            Kotoutumislain mukaan maahanmuuttajalla on oikeus saada tietoa suomalaisesta yhteiskunnasta, 
            työmarkkinoista ja omista oikeuksistaan. Yhteiskuntaorientaatio on lakisääteinen kurssi, 
            joka antaa eväät arkeen Suomessa.
          </p>
        </section>

        {/* 2. OSIO: Miksi omalla kielellä? (Tummennettu teksti) */}
        <section className="mb-12 bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Miksi omalla kielellä?</h2>
          <p className="text-lg text-slate-900 leading-relaxed font-semibold">
            Kun monimutkaiset asiat, kuten verotus, terveydenhuolto ja työlainsäädäntö, selitetään 
            <span className="text-primary"> maahanmuuttajan omalla äidinkielellä</span>, väärinkäsitysten riski poistuu. 
          </p>
          <p className="text-lg text-slate-800 mt-4 leading-relaxed">
            Kyse ei ole vain kielen kääntämisestä, vaan käsitteiden avaamisesta tavalla, joka huomioi 
            oppijan taustan. Tämä luo turvallisuuden tunnetta ja nopeuttaa tiedon sisäistämistä.
          </p>
        </section>

        {/* 3. OSIO: Mitä se merkitsee maahanmuuttajalle? (Tummennettu lista) */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Mitä se merkitsee maahanmuuttajalle?</h2>
          <div className="space-y-6">
            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">Osallisuus ja vaikuttaminen</h4>
                <p className="text-lg text-slate-800 leading-relaxed">Ymmärrys siitä, miten yhteiskunta toimii ja miten omiin asioihin voi vaikuttaa heti ensihetkistä alkaen.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">Oikeusturva ja turvallisuus</h4>
                <p className="text-lg text-slate-800 leading-relaxed">Tietoisuus omista oikeuksista ja velvollisuuksista työntekijänä, vuokralaisena ja kansalaisena.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h4 className="text-xl font-black text-slate-900 mb-1">Nopeampi polku työelämään</h4>
                <p className="text-lg text-slate-800 leading-relaxed">Kun perustiedot yhteiskunnasta ovat hallussa, energiaa vapautuu kielen oppimiseen ja työllistymiseen.</p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <button 
        onClick={() => onPageChange(Page.HOME)}
        className="mt-16 bg-slate-900 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-primary transition-all shadow-2xl flex items-center gap-3"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Takaisin etusivulle
      </button>
    </div>
  );
};

export default BlogPage;
