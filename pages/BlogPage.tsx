import React from 'react';
import { Page } from '../types';

interface BlogPageProps {
  onPageChange: (page: Page) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <article className="prose prose-lg lg:prose-xl">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Monikielinen yhteiskuntaorientaatio: Silta uuteen kotimaahan
        </h1>
        
        <p className="lead text-gray-600 mb-8">
          Suomen laki velvoittaa kunnat tarjoamaan kotoutumista edistävää tietoa. 
          Monikielinen yhteiskuntaorientaatio on tässä keskeisessä roolissa.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Mitä laki sanoo?</h2>
          <p>
            Kotoutumislain mukaan maahanmuuttajalla on oikeus saada tietoa suomalaisesta yhteiskunnasta, 
            työmarkkinoista ja omista oikeuksistaan. Yhteiskuntaorientaatio on lakisääteinen kurssi, 
            joka antaa eväät arkeen Suomessa.
          </p>
        </section>

        <section className="mb-10 bg-blue-50 p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Miksi omalla kielellä?</h2>
          <p>
            Kun monimutkaiset asiat, kuten verotus, terveydenhuolto ja työlainsäädäntö, selitetään 
            <strong> maahanmuuttajan omalla äidinkielellä</strong>, väärinkäsitysten riski poistuu. 
            Se ei ole vain kääntämistä, vaan kulttuurista tulkkausta.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Mitä se merkitsee maahanmuuttajalle?</h2>
          <ul>
            <li><strong>Osallisuus:</strong> Ymmärrys siitä, miten yhteiskunta toimii ja miten siihen voi vaikuttaa.</li>
            <li><strong>Oikeusturva:</strong> Tietoisuus omista oikeuksista ja velvollisuuksista työntekijänä ja asukkaana.</li>
            <li><strong>Nopeampi kotoutuminen:</strong> Kun perustiedot ovat hallussa, kielen oppiminen ja työllistyminen helpottuvat.</li>
          </ul>
        </section>
      </article>

      <button 
        onClick={() => onPageChange(Page.HOME)}
        className="mt-12 bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
      >
        ← Takaisin etusivulle
      </button>
    </div>
  );
};

export default BlogPage;
