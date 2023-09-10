import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  List,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LItem, LItemL } from "../components/List";
import { Section } from "../components/Section";
import { LanguageContext, TextL, getText } from "../utils/Language";

const AccordionLine = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <AccordionItem>
    <Heading>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <Heading size="sm" color="veryAccent" marginRight="1em">
            {title}
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);

export const Home = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Grid alignContent="center" gap="3em" marginBottom="8em">
      <Section>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/photo.jpg"
            alt="Thomas Sauvage"
            boxSize="14em"
            borderRadius="full"
          />
          <TextL margin="2em">
            {{
              fr: "Bonjour, je m’appelle Thomas Sauvage, j'ai 21 ans. Je suis étudiant à l’Ecole polytechnique, passionné d’informatique depuis mes 11 ans et de sciences depuis toujours. J’aime comprendre et résoudre les problèmes que je rencontre, et améliorer la qualité des outils que j’utilise au quotidien. J'ai entièrement construit ce site internet avec React, Typescript et Chakra UI.",
              en: "Hello, my name is Thomas Sauvage, I'm 21 years old. I'm a student at Ecole polytechnique, passionate about computer science since I was 11 and about science since forever. I like to understand and solve the problems I encounter, and improve the quality of the tools I use everyday. I built this website with React, Typescript and Chakra UI.",
            }}
          </TextL>
        </Flex>
      </Section>

      <Section
        title={getText(
          { fr: "Ma formation", en: "My academic background" },
          language
        )}
      >
        <TableContainer>
          <Table variant="striped">
            <Thead width="auto">
              <Tr>
                <Th>
                  <TextL>{{ fr: "Date", en: "Date" }}</TextL>
                </Th>
                <Th>
                  <TextL>{{ fr: "Formation", en: "School" }}</TextL>
                </Th>
                <Th>
                  <TextL>{{ fr: "Commentaire", en: "Remark" }}</TextL>
                </Th>
              </Tr>
            </Thead>
            <Tbody width="auto">
              <Tr>
                <Td whiteSpace="normal">2022 - ...</Td>
                <Td color="veryAccent" fontWeight="bold" whiteSpace="normal">
                  Ecole polytechnique
                </Td>
                <Td whiteSpace="normal">
                  <TextL>
                    {{
                      fr: "Cycle ingénieur polytechnicien",
                      en: "Engineering degree",
                    }}
                  </TextL>
                </Td>
              </Tr>
              <Tr>
                <Td whiteSpace="normal">2020 - 2022</Td>
                <Td whiteSpace="normal">
                  <TextL>
                    {{
                      fr: "MPSI & MP* (Maths sup/Maths spé)",
                      en: "Preparatory classes (MPSI & MP*)",
                    }}
                  </TextL>
                </Td>
                <Td whiteSpace="normal">
                  <TextL>
                    {{
                      fr: "au Lycée Marcelin Berthelot",
                      en: "at Lycée Marcelin Berthelot",
                    }}
                  </TextL>
                </Td>
              </Tr>
              <Tr>
                <Td whiteSpace="normal">2020</Td>
                <Td whiteSpace="normal">
                  <TextL>
                    {{
                      fr: "Baccalauréat Scientifique",
                      en: 'Scientific "Baccalauréat" (French high school diploma)',
                    }}
                  </TextL>
                </Td>
                <Td whiteSpace="normal">
                  <TextL>
                    {{
                      fr: "mention Très Bien",
                      en: 'Highest qualification ("Very good")',
                    }}
                  </TextL>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section
        title={getText({ fr: "Mes compétences", en: "My skills" }, language)}
      >
        <Accordion>
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
              <LItemL>
                {{
                  fr: "Programmation en Python depuis 2018 (mes 15 ans)",
                  en: "Programming in Python since 2018 (when I was 15 years old)",
                }}
              </LItemL>
              <LItemL>
                {{
                  fr: "Programmation en Ocaml depuis 2020",
                  en: "Programming in Ocaml since 2020",
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
                  fr: "Cybersécurité : Cryptographie asymétrique & symétrique, hachage, utilisation d’un gestionnaire de mot de passe et d’une clef physique (yubikey)",
                  en: "Cybersecurity: Asymmetric & symmetric cryptography, hashing, use of a password manager and a physical key (yubikey)",
                }}
              </LItemL>
            </List>
          </AccordionLine>

          <AccordionLine
            title={getText({ fr: "Technique", en: "Tech" }, language)}
          >
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
              <LItemL>
                {{
                  fr: "Permis de pilote de drones",
                  en: "Drone pilot license",
                }}
              </LItemL>
            </List>
          </AccordionLine>

          <AccordionLine title="Artistique">
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
                  fr: "Langue maternelle français",
                  en: "Native language French",
                }}
              </LItemL>
              <LItemL>
                {{
                  fr: "Très bon niveau en anglais",
                  en: "Very good level in English",
                }}
              </LItemL>
              <LItemL>
                {{
                  fr: "Niveau correct en espagnol",
                  en: "Correct level in Spanish",
                }}
              </LItemL>
            </List>
          </AccordionLine>
        </Accordion>
      </Section>

      <Section
        title={getText(
          { fr: "Mes expériences", en: "My experiences" },
          language
        )}
      >
        <Accordion>
          <AccordionLine
            title={getText(
              {
                fr: "Binet Réseau • Développeur web • Mai 2023 - ...",
                en: "Binet Réseau • Web developer • Mai 2023 - ...",
              },
              language
            )}
          >
            <List>
              <LItemL>
                {{
                  fr: "Association d'informatique de l'Ecole polytechnique",
                  en: "Computer science association of Ecole polytechnique",
                }}
              </LItemL>
              <LItem>
                <TextL as="span">
                  {{
                    fr: "Développement d'un outil de gestion de stock alimentaire en Typescript, React et Adonis, voir mes ",
                    en: "Development of a food stock management tool in Typescript, React and Adonis, see my ",
                  }}
                </TextL>
                <NavLink to="/projects" color="veryAccent">
                  projets
                </NavLink>
              </LItem>
            </List>
          </AccordionLine>

          <AccordionLine
            title={getText(
              {
                fr: "Armée de Terre • Officier, Professeur & Colleur de Mathématiques, Physique et Informatique en Maths sup/Maths spé • Septembre 2022 - Avril 2023 ",
                en: "French Army • Officer, Teacher & Tutor of Mathematics, Physics and Computer Science in preparatory classes • September 2022 - April 2023",
              },
              language
            )}
          >
            <List>
              <LItemL>
                {{ fr: "Formation d'officier", en: "Officer training" }}
              </LItemL>

              <LItemL marginLeft="3em">
                {{
                  fr: "Apprentissage du commandement",
                  en: "Command training",
                }}
              </LItemL>
              <LItemL marginLeft="3em">
                {{
                  fr: "Gestion de projet, notamment en temps de crise",
                  en: "Project management, especially in times of crisis",
                }}
              </LItemL>
              <LItemL marginLeft="3em">
                {{ fr: "Rigueur, exemplarité", en: "Rigor, exemplarity" }}
              </LItemL>
              <LItemL>
                {{
                  fr: "Professeur en lycée militaire: Pédagogie, travail d'équipe",
                  en: "Teacher in military high school: Pedagogy, teamwork",
                }}
              </LItemL>
            </List>
          </AccordionLine>

          <AccordionLine
            title={getText(
              {
                fr: "Recherche scientifique en groupe • 2019 - 2022",
                en: "Scientific research in group • 2019 - 2022",
              },
              language
            )}
          >
            <List>
              <LItemL>
                {{
                  fr: "Gestion du travail en équipe",
                  en: "Teamwork management",
                }}
              </LItemL>

              <LItemL>
                {{
                  fr: "Recherche scientifique en biologie, mathématiques, et physique",
                  en: "Scientific research in biology, mathematics, and physics",
                }}
              </LItemL>
              <LItem>
                <TextL as="span">
                  {{
                    fr: "Voir mes ",
                    en: "See my ",
                  }}
                </TextL>
                <NavLink to="/projects" color="veryAccent">
                  projets
                </NavLink>
              </LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Photographe pour la mouette bâillonnée • 2017 - 2018">
            <List>
              <LItemL>
                {{ fr: "Journal étudiant", en: "Student newspaper" }}
              </LItemL>
              <LItemL>
                {{
                  fr: "Direction technique d'interviews",
                  en: "Technical direction of interviews",
                }}
              </LItemL>
            </List>
          </AccordionLine>

          <AccordionLine
            title={getText(
              {
                fr: "Administration d’un serveur de jeux • 2014 - 2015",
                en: "Administration of a game server • 2014 - 2015",
              },
              language
            )}
          >
            <List>
              <LItemL>
                {{
                  fr: "Administration bénévole de serveur",
                  en: "Voluntary server administration",
                }}
              </LItemL>

              <LItemL>
                {{
                  fr: "Spécialisé dans la lutte contre la triche",
                  en: "Specialized in the fight against cheating",
                }}
              </LItemL>
              <LItemL>
                {{
                  fr: "Serveur comptant un total de plus de 10 000 utilisateurs, à la tête d’une équipe de 10 modérateurs",
                  en: "Server with a total of more than 10,000 users, at the head of a team of 10 moderators",
                }}
              </LItemL>
            </List>
          </AccordionLine>
        </Accordion>
      </Section>
    </Grid>
  );
};
