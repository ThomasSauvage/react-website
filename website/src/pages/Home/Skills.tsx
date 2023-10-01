import { Link, List } from "@chakra-ui/react";
import { useContext } from "react";
import { AccordionLine } from "../../components/AccordionLine";
import { LItem, LItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { LanguageContext, TextL, getText } from "../../utils/Language";

export const Skills = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section title={{ fr: "Mes compétences", en: "My skills" }}>
      <AccordionLine
        title={getText(
          { fr: "Programmation", en: "Computer programming" },
          language
        )}
      >
        <List>
          <LItemL>
            {{
              fr: "Programmation depuis 2013 (mes 11 ans, en MS-DOS)",
              en: "Programming since 2013 (when I was 11 years old, in MS-DOS)",
            }}
          </LItemL>
          <LItemL marginLeft="3em">
            {{
              fr: "en Python depuis 2018 (mes 15 ans)",
              en: "in Python since 2018 (when I was 15 years old)",
            }}
          </LItemL>
          <LItemL marginLeft="3em">
            {{
              fr: "en Ocaml depuis 2020",
              en: "in Ocaml since 2020",
            }}
          </LItemL>
          <LItemL marginLeft="3em">
            {{
              fr: "en Java depuis 2023",
              en: "in Java since 2023",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Développement de sites internet en HTML&CSS avec gestion du backend en Django (Python)",
              en: "Websites development in HTML&CSS with a Django (Python) backend",
            }}
          </LItemL>
          <LItem>
            <TextL as="span">
              {{
                fr: "Développement de sites internet en Typescript React pour le ",
                en: "Websites development in Typescript React for the ",
              }}
            </TextL>
            <Link
              href="https://br.binets.fr"
              color="veryAccent"
              target="_blank"
            >
              Binet Réseau
            </Link>
            <TextL as="span">
              {{
                fr: " (association d'informatique de l'Ecole Polytechnique)",
                en: " (computer science association of Ecole Polytechnique)",
              }}
            </TextL>
          </LItem>
          <LItemL>
            {{
              fr: "Cybersécurité : Cryptographie asymétrique & symétrique, hachage, utilisation d’un gestionnaire de mot de passe et d’une clef physique (YubiKey)",
              en: "Cybersecurity: Asymmetric & symmetric cryptography, hashing, use of a password manager and a physical key (YubiKey)",
            }}
          </LItemL>
        </List>
      </AccordionLine>

      <AccordionLine title={getText({ fr: "Technique", en: "Tech" }, language)}>
        <List>
          <LItemL>
            {{
              fr: "Électronique & informatique : Création et réparation d’ordinateurs, de clavier ergonomiques…",
              en: "Electronics & computer science: Creation and repair of computers, ergonomic keyboards…",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Impression 3D",
              en: "3D printing",
            }}
          </LItemL>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText({ fr: "Artistique", en: "Artistic" }, language)}
      >
        <List>
          <LItemL>
            {{
              fr: "Photographie : Portrait, paysage, astrophotographie…",
              en: "Photography: Portrait, landscape, astrophotography…",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Retouche photo : Photoshop",
              en: "Photo editing: Photoshop",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Montage vidéo : Première pro",
              en: "Video editing: Premiere pro",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Cours de design",
              en: "Design courses",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Guitare",
              en: "Guitar",
            }}
          </LItemL>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText({ fr: "Langues", en: "Languages" }, language)}
      >
        <List>
          <LItemL>
            {{
              fr: "Langue maternelle: Français",
              en: "Native language: French",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Maîtrise (C1/C2): Anglais",
              en: "Proficient (C1/C2): English",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Avancé (B1/B2): Espagnol",
              en: "Intermediate (B1/B2): Spanish",
            }}
          </LItemL>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText(
          { fr: "Certifications", en: "Certifications" },
          language
        )}
      >
        <List>
          <LItemL>
            {{
              fr: "Permis de pilote de drones",
              en: "Drone pilot license",
            }}
          </LItemL>
          <LItemL>
            {{
              fr: "Prévention et secours civiques (PSC1)",
              en: "First aid certificate (PSC1)",
            }}
          </LItemL>
        </List>
      </AccordionLine>
    </Section>
  );
};
