import { List } from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AccordionLine } from "../../components/AccordionLine";
import { ListItemAny, ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { LanguageContext, TextL, getText } from "../../utils/Language";

/** Section: Home > Experiences */
export const Experiences = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section title={{ fr: "Mes expériences", en: "My experiences" }}>
      <AccordionLine
        title={getText(
          {
            fr: "Binet Réseau • Développeur web • Mai 2023 - ...",
            en: "Binet Réseau • Web developer • May 2023 - ...",
          },
          language
        )}
      >
        <List>
          <ListItemL>
            {{
              fr: "Association d'informatique de l'Ecole polytechnique",
              en: "Computer science association of Ecole polytechnique",
            }}
          </ListItemL>
          <ListItemAny>
            <TextL as="span">
              {{
                fr: "Développement d'un outil de gestion de stock alimentaire en Typescript, React et Adonis, voir mes ",
                en: "Development of a food stock management tool in Typescript, React and Adonis, see my ",
              }}
            </TextL>
            <NavLink to="/projects">
              <TextL as="span" color="accent">
                {{
                  fr: "projets",
                  en: "projects",
                }}
              </TextL>
            </NavLink>
          </ListItemAny>
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
          <ListItemL>
            {{ fr: "Formation d'officier", en: "Officer training" }}
          </ListItemL>

          <ListItemL marginLeft="3em">
            {{
              fr: "Apprentissage du commandement",
              en: "Command training",
            }}
          </ListItemL>
          <ListItemL marginLeft="3em">
            {{
              fr: "Gestion de projet, notamment en temps de crise",
              en: "Project management, especially in times of crisis",
            }}
          </ListItemL>
          <ListItemL marginLeft="3em">
            {{ fr: "Rigueur, exemplarité", en: "Rigor, exemplarity" }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Professeur en lycée militaire : Pédagogie, travail d'équipe",
              en: "Teacher in military high school: Pedagogy, teamwork",
            }}
          </ListItemL>
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
          <ListItemL>
            {{
              fr: "Gestion du travail en équipe",
              en: "Teamwork management",
            }}
          </ListItemL>

          <ListItemL>
            {{
              fr: "Recherche scientifique en biologie, mathématiques, et physique",
              en: "Scientific research in biology, mathematics, and physics",
            }}
          </ListItemL>
          <ListItemAny>
            <TextL as="span">
              {{
                fr: "Voir mes ",
                en: "See my ",
              }}
            </TextL>
            <NavLink to="/projects">
              <TextL as="span" color="accent">
                {{
                  fr: "projets",
                  en: "projects",
                }}
              </TextL>
            </NavLink>
          </ListItemAny>
        </List>
      </AccordionLine>

      <AccordionLine
        title={getText(
          {
            fr: "Photographe pour La Mouette Bâillonnée • 2017 - 2018",
            en: 'Photographer for "La Mouette Bâillonnée" • 2017 - 2018',
          },
          language
        )}
      >
        <List>
          <ListItemL>
            {{ fr: "Journal étudiant", en: "Student newspaper" }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Direction technique d'interviews",
              en: "Technical direction of interviews",
            }}
          </ListItemL>
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
          <ListItemL>
            {{
              fr: "Administration bénévole de serveur",
              en: "Voluntary server administration",
            }}
          </ListItemL>

          <ListItemL>
            {{
              fr: "Spécialisé dans la lutte contre la triche",
              en: "Specialized in the fight against cheating",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Serveur comptant un total de plus de 10 000 utilisateurs, à la tête d’une équipe de 10 modérateurs",
              en: "Server with a total of more than 10,000 users, at the head of a team of 10 moderators",
            }}
          </ListItemL>
        </List>
      </AccordionLine>
    </Section>
  );
};
