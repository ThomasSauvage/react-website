import { List, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ListItemAny, ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { TextL } from "../../utils/Language";
import { ExperienceLine } from "../../components/ExperienceLine";

/** Section: Home > Volunteering */
export const Volunteering = () => {
  return (
    <Section title={{ fr: "Bénévolat", en: "Volunteering" }}>
      <ExperienceLine
        company={{
          fr: "Binet Réseau",
          en: "Binet Réseau",
        }}
        jobTitle={{
          fr: "Président",
          en: "President",
        }}
        dates={{
          fr: "Mai 2023 - Mars 2025",
          en: "May 2023 - March 2025",
        }}
        logo="BR.svg"
      >
        <List>
          <ListItemL>
            {{
              fr: "Association d'informatique de l'École polytechnique",
              en: "Computer science association of École polytechnique",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Dirigeant une équipe de 30 personnes",
              en: "Leading a team of 30 people",
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
          <ListItemAny>
            <TextL as="span">
              {{
                fr: "Site de l'association : ",
                en: "Website of the association: ",
              }}
            </TextL>
            <NavLink to="https://br.binets.fr" target="_blank">
              <Text as="span" color="accent">
                br.binets.fr
              </Text>
            </NavLink>
          </ListItemAny>
          <ListItemL>
            {{
              fr: "Récompensé : Outstanding leadership & Outstanding investment",
              en: "Awarded: Outstanding leadership & Outstanding investment",
            }}
          </ListItemL>
        </List>
      </ExperienceLine>

      <ExperienceLine
        company={{
          fr: "Binet Photo",
          en: "Binet Photo",
        }}
        jobTitle={{
          fr: "Responsable web & Photographe",
          en: "Web master & Photographer",
        }}
        dates={{
          fr: "Novembre 2023 - Novembre 2024",
          en: "November 2023 - November 2024",
        }}
        logo="BP.png"
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
              fr: "Photographe pour l'association",
              en: "Photographer for the association",
            }}
          </ListItemL>
        </List>
      </ExperienceLine>

      <ExperienceLine
        company={{
          fr: "La Mouette Bâillonnée",
          en: "La Mouette Bâillonnée",
        }}
        jobTitle={{
          fr: "Photographe",
          en: "Photographer",
        }}
        dates={{
          fr: "2017 - 2018",
          en: "2017 - 2018",
        }}
        logo="mouetteb.webp"
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
      </ExperienceLine>
    </Section>
  );
};
