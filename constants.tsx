
import { NavItem, ServiceItem, ValueItem, Page } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Etusivu', page: Page.HOME },
  { label: 'Palvelut', page: Page.SERVICES },
  { label: 'Meistä', page: Page.ABOUT },
  { label: 'Blogi', page: Page.BLOG },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Yhteiskuntaorientaatio',
    description: 'Laadukkaat kurssit ja materiaalit uuteen yhteiskuntaan perehtymiseen. Räätälöimme sisällöt vastaamaan kohderyhmän tarpeita.',
    icon: 'groups',
    color: 'primary',
    tag: 'Tieto'
  },
  {
    title: 'Konsultointi',
    description: 'Asiantuntija-apu organisaatioille kotoutumisprosessien ja monikulttuurisuustaitojen kehittämiseen.',
    icon: 'diversity_3',
    color: 'accent',
    tag: 'Taito'
  },
  {
    title: 'Koulutus',
    description: 'Ammattilaisten osaamisen vahvistaminen ja asiantuntijavalmennukset kotoutumisen kentällä toimiville.',
    icon: 'school',
    color: 'primary',
    tag: 'Tulevaisuus'
  }
];

export const VALUES: ValueItem[] = [
  {
    title: 'Sitoutunut omistajuus',
    description: 'Osuuskunnan jäsenet ovat asiantuntijoita, jotka omistavat yrityksensä. Tämä takaa poikkeuksellisen motivaation.',
    icon: 'handshake',
    bgClass: 'bg-secondary text-primary',
    iconClass: 'text-primary'
  },
  {
    title: 'Eettisyys ja kohtaaminen',
    description: 'Arvomme ohjaavat toimintaamme kaikessa: oikeudenmukaisuus ja inhimillinen kohtaaminen ovat keskiössä.',
    icon: 'spa',
    bgClass: 'bg-accent/10 text-accent',
    iconClass: 'text-accent'
  },
  {
    title: 'Jatkuva uudistuminen',
    description: 'Kehitämme osaamistamme modernilla otteella tarjotaksemme aina ajankohtaisinta ja toimivinta tietoa.',
    icon: 'rocket_launch',
    bgClass: 'bg-slate-900 text-white',
    iconClass: 'text-white'
  }
];

export const IMAGES = {
  HERO_COLLAB: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  EXPERTISE_MEETING: "https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  TEAM_PORTRAIT: "https://images.unsplash.com/photo-1706293011657-6fe0fe072496?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
