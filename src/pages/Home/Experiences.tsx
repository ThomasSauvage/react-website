import { List } from "@chakra-ui/react";
import { ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { ExperienceLine } from "../../components/ExperienceLine";

/** Section: Home > Experiences */
export const Experiences = () => {
  return (
    <Section title={{ fr: "Expérience", en: "Experience" }}>
      <ExperienceLine
        company={{
          fr: "Cisco",
          en: "Cisco",
        }}
        jobTitle={{
          fr: "Ingénieur stagiaire de recherche en réseaux",
          en: "Networking research engineer intern",
        }}
        dates={{
          fr: "Avril - Août 2025",
          en: "April - August 2025",
        }}
        logo="cisco.svg"
      >
        <List>
          <ListItemL>
            {{
              fr: "Leader mondial des technologies de l'information et de la communication",
              en: "World leader in information and communication technologies",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Évaluation des limitations de scalabilité d'un VPN Cloud-Native",
              en: "Assessing the scalability limitations of a Cloud-Native VPN",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "À Lausanne, Suisse",
              en: "In Lausanne, Switzerland",
            }}
          </ListItemL>
        </List>
      </ExperienceLine>

      <ExperienceLine
        company={{
          fr: "Free - Groupe Iliad",
          en: "Free - Iliad Group",
        }}
        jobTitle={{
          fr: "Ingénieur logiciel stagiaire",
          en: "Software engineer intern",
        }}
        dates={{
          fr: "Juin - Septembre 2024",
          en: "Jun - September 2024",
        }}
        logo="free.svg"
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
      </ExperienceLine>

      <ExperienceLine
        company={{
          fr: "Armée de Terre",
          en: "French Army",
        }}
        jobTitle={{
          fr: "Officier, Professeur & Colleur de Mathématiques, Physique et Informatique en Maths sup/Maths spé",
          en: "Officer, Teacher & Tutor of Mathematics, Physics and Computer Science in preparatory classes",
        }}
        dates={{
          fr: "Septembre 2022 - Avril 2023",
          en: "September 2022 - April 2023",
        }}
        logo="AdT.svg"
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
      </ExperienceLine>
    </Section>
  );
};
