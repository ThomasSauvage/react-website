import { Grid, Link, List } from "@chakra-ui/react";
import { useContext } from "react";
import { AccordionLineTextTitle } from "../../components/AccordionLineTextTitle";
import { ListItemAny, ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { LanguageContext, TextL, getText } from "../../utils/Language";
import { MdComputer } from "react-icons/md";
import { FaFileContract, FaPaintBrush } from "react-icons/fa";
import { FaPeoplePulling, FaServer } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";

/** Section: Home > Skills */
export const Skills = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section title={{ fr: "Mes compétences", en: "My skills" }}>
      <Grid
        templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
        alignItems="start"
      >
        <AccordionLineTextTitle
          title={getText(
            { fr: "Programmation", en: "Computer programming" },
            language
          )}
          icon={MdComputer}
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
            <ListItemL marginLeft="3em">
              {{
                fr: "en C/C++ depuis 2024",
                en: "in C/C++ since 2024",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "en Go depuis 2024",
                en: "in Go since 2024",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "en Rust depuis 2024",
                en: "in Rust since 2024",
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
                fr: "en HTML&CSS",
                en: "in HTML&CSS",
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
                  fr: " (association d'informatique de l'École polytechnique)",
                  en: " (computer science association of École polytechnique)",
                }}
              </TextL>
            </ListItemAny>
            <ListItemL marginLeft="3em">
              {{
                fr: "en Vue, Node.js, Adonis...",
                en: "in Vue, Node.js, Adonis...",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Intelligence artificielle",
                en: "Artificial intelligence",
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
                {getText(
                  { fr: "compte GitHub", en: "GitHub account" },
                  language
                )}
              </Link>
            </ListItemAny>
          </List>
        </AccordionLineTextTitle>

        <AccordionLineTextTitle
          title={getText(
            {
              fr: "Administrateur système & Cybersécurité",
              en: "System administrator & Cybersecurity",
            },
            language
          )}
          icon={FaServer}
        >
          <List>
            <ListItemL>
              {{
                fr: "Cryptographie usuelle et post-quantique, hachage, utilisation d’un gestionnaire de mot de passe et d’une clé physique de sécurité (FIDO2)",
                en: "Usual and post-quantum cryptography, hashing, use of a password manager and a physical security key (FIDO2)",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Sécurisation de serveurs linux (SSH, pare-feu, DMZ, ...)",
                en: "Securing linux servers (SSH, firewall, DMZ, ...)",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Virtualisation (Proxmox, Docker, ...)",
                en: "Virtualization (Proxmox, Docker, ...)",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Réseau",
                en: "Networking",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Hébergement web",
                en: "Cloud computing",
              }}
            </ListItemL>
            MdComputer
          </List>
        </AccordionLineTextTitle>

        <AccordionLineTextTitle
          title={getText({ fr: "Artistique", en: "Artistic" }, language)}
          icon={FaPaintBrush}
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
        </AccordionLineTextTitle>

        <AccordionLineTextTitle
          title={getText({ fr: "Soft skills", en: "Soft skills" }, language)}
          icon={FaPeoplePulling}
        >
          <List>
            <ListItemL>
              {{
                fr: "Compétences relationnelles",
                en: "Interpersonal skills",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Leadership",
                en: "Leadership",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Travail en équipe",
                en: "Teamwork",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Présenter devant un public",
                en: "Public speaking",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Résolution de conflits",
                en: "Conflict resolution",
              }}
            </ListItemL>

            <ListItemL>
              {{
                fr: "Compétences organisationnelles",
                en: "Organizational skills",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Prise de décision",
                en: "Decision making",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Gestion de projet",
                en: "Project management",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Résolution de problèmes",
                en: "Problem solving",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Gestion du temps",
                en: "Time management",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Créativité",
                en: "Creativity",
              }}
            </ListItemL>
            <ListItemL marginLeft="3em">
              {{
                fr: "Initiative",
                en: "Initiative",
              }}
            </ListItemL>
          </List>
        </AccordionLineTextTitle>

        <AccordionLineTextTitle
          title={getText({ fr: "Langues", en: "Languages" }, language)}
          icon={IoMdChatbubbles}
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
                fr: "Maîtrise (C1/C2): Anglais • Test d'anglais de Cambridge (Linguaskill) - Score: 180+/180",
                en: "Proficient (C1/C2): English • Cambridge English Test (Linguaskill) - Score: 180+/180",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Avancé (B1/B2): Espagnol",
                en: "Intermediate (B1/B2): Spanish",
              }}
            </ListItemL>
          </List>
        </AccordionLineTextTitle>

        <AccordionLineTextTitle
          title={getText(
            { fr: "Certifications", en: "Certifications" },
            language
          )}
          icon={FaFileContract}
        >
          <List>
            <ListItemL>
              {{
                fr: "Test d'anglais de Cambridge (Linguaskill) - Score: 180+/180",
                en: "Cambridge English Test (Linguaskill) - Score: 180+/180",
              }}
            </ListItemL>
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
        </AccordionLineTextTitle>
      </Grid>
    </Section>
  );
};
