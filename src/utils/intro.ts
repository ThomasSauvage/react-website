import type { TextLanguage } from "./Language";

const ANNIVERSARY = new Date("2002-09-15");

const age = Math.floor(
  (new Date().getTime() - ANNIVERSARY.getTime()) / 31536000000
);

export const introduction: TextLanguage = {
  fr: `Je m'appelle Thomas Sauvage, je suis un ingénieur de ${age} ans en quatrième et dernière année à l'École polytechnique.
J'effectue actuellement mon année de spécialisation à Télécom Paris.
Je me spécialise en informatique, plus spécifiquement en infrastructure cloud, réseaux et cybersécurité.
J'ai créé ce site internet avec React et Typescript.`,
  en: `I am Thomas Sauvage, a ${age}-year-old engineer in fourth and final year at École polytechnique.
I am currently completing my specialization year at Télécom Paris.
I specialize in computer science, specifically in cloud infrastructure, networking and cybersecurity.
I built this website using React and Typescript.`,
};
