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
          <ListItemL>
            {{
              fr: "Développement web",
              en: "Web development",
            }}
          </ListItemL>
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
          fr: "Open Food Facts",
          en: "Open Food Facts",
        }}
        jobTitle={{
          fr: "Administrateur système",
          en: "System administrator",
        }}
        dates={{
          fr: "Juin 2025 - Présent",
          en: "June 2025 - Present",
        }}
        logo="OFF.svg"
      >
        <List>
          <ListItemAny>
            <NavLink
              to="https://en.wikipedia.org/wiki/Open_Food_Facts"
              target="_blank"
            >
              <Text as="span" color="accent">
                Wikipedia {">"} Open Food Facts
              </Text>
            </NavLink>
          </ListItemAny>
          <ListItemL>
            {{
              fr: "« Le Wikipédia des produits alimentaires »",
              en: '"The Wikipedia of food products"',
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "3+ millions de visiteurs uniques mensuels",
              en: "3+ million unique visitors monthly",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "13 serveurs bare-metal dans 5 datacenters différents. Certians en hébergement dédié et d'autres en cloud public.",
              en: "13 bare-metal servers in 5 different datacenters. Some in dedicated hosting and others in public cloud.",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Contribution à l'administration système de l'infrastructure",
              en: "Contribution to the system administration of the infrastructure",
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
