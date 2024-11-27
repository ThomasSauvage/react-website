import { List } from "@chakra-ui/react";
import { useContext } from "react";
import { AccordionLine } from "../../components/AccordionLine";
import { ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { LanguageContext, getText } from "../../utils/Language";

/** Section: Home > Experiences */
export const Experiences = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section title={{ fr: "Expérience", en: "Experience" }}>
      <AccordionLine
        title={getText(
          {
            fr: "Free - Groupe Iliad • Ingénieur logiciel • Juin - Septembre 2024 ",
            en: "Free - Iliad Group • Software engineer • Jun - September 2024",
          },
          language
        )}
      >
        <List>
          <ListItemL>
            {{
              fr: "Groupe de télécommunication & fournisseur d'accès à internet européen majeur",
              en: "One of the leading European telecommunication & internet service provider companies",
            }}
          </ListItemL>

          <ListItemL>
            {{
              fr: "Développement Frontend & Backend",
              en: "Frontend & Backend development",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Développement d'une application utilisée pour entraîner une IA de segmentation d'images",
              en: "Developing a tool used to train a picture segmentation AI",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Utilisation de Vue 3, Typescript et Golang",
              en: "Using Vue 3, Typescript and Golang",
            }}
          </ListItemL>
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
    </Section>
  );
};
