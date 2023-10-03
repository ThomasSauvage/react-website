import { Link, List } from "@chakra-ui/react";
import { useContext } from "react";
import { AccordionLine } from "../../components/AccordionLine";
import { ListItemAny, ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { LanguageContext, TextL, getText } from "../../utils/Language";

/** Section: Home > Skills */
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
          <ListItemL>
            {{
              fr: "Programmation depuis 2013 (mes 11 ans, en MS-DOS)",
              en: "Programming since 2013 (when I was 11 years old, in MS-DOS)",
            }}
          </ListItemL>
          <ListItemL marginLeft="3em">
            {{
              fr: "en Python depuis 2018 (mes 15 ans)",
              en: "in Python since 2018 (when I was 15 years old)",
            }}
          </ListItemL>
          <ListItemL marginLeft="3em">
            {{
              fr: "en Ocaml depuis 2020",
              en: "in Ocaml since 2020",
            }}
          </ListItemL>
          <ListItemL marginLeft="3em">
            {{
              fr: "en Java depuis 2023",
              en: "in Java since 2023",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Développement de sites internet",
              en: "Websites development",
            }}
          </ListItemL>
          <ListItemL marginLeft="3em">
            {{
              fr: "en HTML&CSS avec gestion du backend en Django (Python)",
              en: "in HTML&CSS with a Django (Python) backend",
            }}
          </ListItemL>
          <ListItemAny marginLeft="3em">
            <TextL as="span">
              {{
                fr: "en Typescript React pour le ",
                en: "in Typescript React for the ",
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
          </ListItemAny>
          <ListItemL>
            {{
              fr: "Cybersécurité : Cryptographie asymétrique & symétrique, hachage, utilisation d’un gestionnaire de mot de passe et d’une clef physique (YubiKey)",
              en: "Cybersecurity: Asymmetric & symmetric cryptography, hashing, use of a password manager and a physical key (YubiKey)",
            }}
          </ListItemL>
          <ListItemAny>
            <TextL as="span">
              {{
                fr: "Développement en équipe (git, GitHub, GitLab). Voir mon",
                en: "Team development (git, GitHub, GitLab). See my",
              }}
            </TextL>
            {` `}
            <Link
              href="https://github.com/ThomasSauvage"
              color="veryAccent"
              target="_blank"
            >
              {getText({ fr: "compte GitHub", en: "GitHub account" }, language)}
            </Link>
          </ListItemAny>
        </List>
      </AccordionLine>

      <AccordionLine title={getText({ fr: "Technique", en: "Tech" }, language)}>
        <List>
          <ListItemL>
            {{
              fr: "Électronique & informatique : Création et réparation d’ordinateurs, de clavier ergonomiques…",
              en: "Electronics & computer science: Creation and repair of computers, ergonomic keyboards…",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Impression 3D",
              en: "3D printing",
            }}
          </ListItemL>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText({ fr: "Artistique", en: "Artistic" }, language)}
      >
        <List>
          <ListItemL>
            {{
              fr: "Photographie : Portrait, paysage, astrophotographie…",
              en: "Photography: Portrait, landscape, astrophotography…",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Retouche photo : Photoshop",
              en: "Photo editing: Photoshop",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Montage vidéo : Première pro",
              en: "Video editing: Premiere pro",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Cours de design",
              en: "Design courses",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Guitare",
              en: "Guitar",
            }}
          </ListItemL>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText({ fr: "Langues", en: "Languages" }, language)}
      >
        <List>
          <ListItemL>
            {{
              fr: "Langue maternelle: Français",
              en: "Native language: French",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Maîtrise (C1/C2): Anglais",
              en: "Proficient (C1/C2): English",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Avancé (B1/B2): Espagnol",
              en: "Intermediate (B1/B2): Spanish",
            }}
          </ListItemL>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText(
          { fr: "Certifications", en: "Certifications" },
          language
        )}
      >
        <List>
          <ListItemL>
            {{
              fr: "Permis de pilote de drones",
              en: "Drone pilot license",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Prévention et secours civiques (PSC1)",
              en: "First aid certificate (PSC1)",
            }}
          </ListItemL>
        </List>
      </AccordionLine>
    </Section>
  );
};
