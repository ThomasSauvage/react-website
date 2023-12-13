import { List, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AccordionLine } from "../../components/AccordionLine";
import { ListItemAny, ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { LanguageContext, TextL, getText } from "../../utils/Language";

/** Section: Home > Volunteering */
export const Volunteering = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section title={{ fr: "Bénévolat", en: "Volunteering" }}>
      <AccordionLine
        title={getText(
          {
            fr: "Binet Réseau • Président • Mai 2023 - ...",
            en: "Binet Réseau • President • May 2023 - ...",
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
          <ListItemL>
            {{
              fr: "Dirigeant une équipe de 17 personnes",
              en: "Leading a team of 17 people",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Gérant 100+ sites pour 1000+ utilisateurs",
              en: "Managing 100+ websites for 1000+ users",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Administrateur système",
              en: "System administrator",
            }}
          </ListItemL>
          <ListItemAny>
            <TextL as="span">
              {{
                fr: "Développement web, voir mes ",
                en: "Web development, see my ",
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
            fr: "Binet Photo • Responsable web & Photographe • Novembre 2023 - ...",
            en: "Binet Photo • Web master & Photographer • November 2023 - ...",
          },
          language
        )}
      >
        <List>
          <ListItemAny>
            <TextL as="span">
              {{
                fr: "Maintenance du site internet ",
                en: "Maintenance of the website ",
              }}
            </TextL>
            <NavLink to="https://photo.binets.fr" target="_blank">
              <Text color="accent" as="span">
                photo.binets.fr
              </Text>
            </NavLink>
          </ListItemAny>
          <ListItemL>
            {{
              fr: "Développement d'un nouveau site avec Typescript React et Adonis",
              en: "Developing a new website with Typescript React and Adonis",
            }}
          </ListItemL>
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
