import type { TextLanguage } from "./Language";

const ANNIVERSARY = new Date("2002-09-15");

const age = Math.floor(
  (new Date().getTime() - ANNIVERSARY.getTime()) / 31536000000
);

export const introduction: TextLanguage = {
  fr: `Je m'appelle Thomas Sauvage, je suis un étudiant de ${age} ans en troisième année à l'École polytechnique.
Je me spécialise en informatique, plus spécifiquement en réseaux et cybersécurité. J'ai créé ce site internet avec React, Typescript et Chakra UI.`,
  en: `I am Thomas Sauvage, a ${age}-year-old third-year (M2) student at École polytechnique.
I specialize in computer science, specifically in networking and cybersecurity. I built this website using React, Typescript and Chakra UI.`,
};
