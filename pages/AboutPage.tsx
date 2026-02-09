import React from 'react';
import { Page } from '../types';

interface AboutPageProps {
  onPageChange: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Tietoa meistä ja osuuskunnasta</h1>
      
      <section className="prose prose-lg">
        <h2 className="text-2xl font-semibold mt-6">Mitä osuusyrittäjyys tarkoittaa?</h2>
        <p>
          Osuuskuntamme perustuu jäsenten väliseen yhteistyöhön ja tasa-arvoon. Se on yritysmuoto, 
          jossa tavoitteena ei ole vain voitto, vaan jäsenten yhteinen etu.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Päätösvalta</h3>
            <p>Jokaisella jäsenellä on yksi ääni. Tämä tarkoittaa, että jokaisella on yhtäläinen päätösvalta osuuskunnan tulevaisuudesta.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Bonukset</h3>
            <p>Osuuskunnan tuottama ylijäämä voidaan jakaa jäsenille bonuksina heidän palveluiden käytön tai työpanoksen suhteessa.</p>
          </div>
        </div>
      </section>

      <button 
        onClick={() => onPageChange(Page.HOME)}
        className="mt-12 text-primary hover:underline"
      >
        ← Takaisin etusivulle
      </button>
    </div>
  );
};

export default AboutPage;
