import { List } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { ExperienceLine } from "../../components/ExperienceLine";
import { ListItemL } from "../../components/List";

/** Section: Home > Academic */
export const Academic = () => {
  return (
    <Section title={{ fr: "Ma formation", en: "My academic background" }}>
      <ExperienceLine
        company={{
          fr: "Cycle ingénieur polytechnicien (X2022)",
          en: "France top-ranking engineering university",
        }}
        jobTitle={{
          fr: "École polytechnique",
          en: "École polytechnique",
        }}
        dates={{
          fr: "2022 - 2025",
          en: "2022 - 2025",
        }}
        logo="X.svg"
      >
        <List>
          <ListItemL>
            {{
              fr: "Actuellement en 3ème année",
              en: "Currently in third year",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Spécialisation : Réseaux & Cybersécurité",
              en: "Specialization: Networks & Cybersecurity",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Sport : Badminton",
              en: "Sport: Badminton",
            }}
          </ListItemL>
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
          fr: "École d'ingéneur spécialisée en informatique",
          en: "Engineering university specialized in computer science",
        }}
        jobTitle={{
          fr: "Télécom Paris",
          en: "Télécom Paris",
        }}
        dates={{
          fr: "2025 - 2026",
          en: "2025 - 2026",
        }}
        logo="telecom.svg"
      >
        <List>
          <ListItemL>
            {{
              fr: "École d'application dans le cadre du cycle ingénieur polytechnicien",
              en: "Application school as part of the polytechnic engineering cycle",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Specialisation : Grandes infrastructures du numérique",
              en: "Specialization: Large digital infrastructures",
            }}
          </ListItemL>
        </List>
      </ExperienceLine>
      <ExperienceLine
        company={{
          fr: "Classes préparatoires aux grandes écoles - MPSI & MP*",
          en: "Preparatory classes - MPSI & MP*",
        }}
        jobTitle={{
          fr: "Lycée Marcelin Berthelot",
          en: "Lycée Marcelin Berthelot",
        }}
        dates={{
          fr: "2020 - 2022",
          en: "2020 - 2022",
        }}
        logo="lmb.svg"
      >
        <List>
          <ListItemL>
            {{
              fr: "Deux années de préparation aux concours d'entrée des grandes écoles d'ingénieurs",
              en: "Two years of preparation for the entrance exams to the engineering universities",
            }}
          </ListItemL>
          <ListItemL>
            {{
              fr: "Spécialisation : Mathématiques, Physique, Informatique",
              en: "Specialization: Mathematics, Physics, Computer Science",
            }}
          </ListItemL>
        </List>
      </ExperienceLine>
    </Section>
  );
};
