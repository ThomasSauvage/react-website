import { Flex, Image, List, VStack } from "@chakra-ui/react";
import { LItemL } from "../components/List";
import { Section } from "../components/Section";

/** Page: Projects */
export const Projects = () => {
  return (
    <VStack>
      <Section title={{ fr: "Chocapix • 2023", en: "Chocapix • 2023" }}>
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/chocapix.png" maxHeight="20em" />
          <List>
            <LItemL>
              {{
                fr: "Site internet de gestion de stock alimentaire interne à l'Ecole polytechnique",
                en: "Food stock management website for Ecole polytechnique",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Frontend réalisé en Typescript, React et Chakra UI",
                en: "Frontend made in Typescript, React and Chakra UI",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Backend réalisé en Typescript et Adonis",
                en: "Backend made in Typescript and Adonis",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Travail à plusieurs avec git et Gitlab",
                en: "Teamwork with git and Gitlab",
              }}
            </LItemL>
          </List>
        </Flex>
      </Section>

      <Section
        title={{
          fr: "Retournement temporel des ondes acoustiques avec un faible nombre de transducteurs • 2021 - 2022",
          en: "Time reversal of acoustic waves with a small number of transducers • 2021 - 2022",
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/dispositif_exp.jpg" maxHeight="15em" />
          <Image src="/projects/simulation.png" maxHeight="15em" />
          <List>
            <LItemL>
              {{
                fr: "Projet scientifique en binôme",
                en: "Scientific project in pairs",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Etude théorique, expérimentale et par simulation (en Python)",
                en: "Theoretical, experimental and simulation study (in Python)",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Objectif: Focaliser une onde acoustique en un point précis de l'espace",
                en: "Objective: Focus an acoustic wave at a specific point in space",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Applications possibles: contrôle non destructif, médecine et les télécommunications",
                en: "Potential applications: non-destructive testing, healthcare and telecommunications",
              }}
            </LItemL>
          </List>
        </Flex>
      </Section>

      <Section
        title={{
          fr: `L'application "Telecom" • 2022`,
          en: 'The "Telecom" app • 2022',
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/telecom.png" maxHeight="25em" />
          <List>
            <LItemL>
              {{
                fr: "Projet personnel de programmation en Python",
                en: "Personal programming project in Python",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Télécommunications chiffrée de bout en bout à l'aide de cryptographie asymétrique (RSA & AES)",
                en: "End-to-end encrypted telecommunications using asymmetric cryptography (RSA & AES)",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Interface graphique réalisée avec Tkinter",
                en: "Graphical interface made with Tkinter",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Qualité sonore plus élevée que les alternatives (Discord, Skype, Zoom, etc.)",
                en: "Higher sound quality than alternatives (Discord, Skype, Zoom, etc.)",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Utilise un serveur relais hébergé sur Google Cloud Platform pour acheminer les paquets",
                en: "Uses a relay server hosted on Google Cloud Platform to route packets",
              }}
            </LItemL>
          </List>
        </Flex>
      </Section>

      <Section
        title={{
          fr: "Étude de l’existence de deux comportements en percolation par lien • 2020 - 2021",
          en: "Study of the existence of two behaviors in link percolation • 2020 - 2021",
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/percolation.png" maxHeight="20em" />
          <List>
            <LItemL>
              {{
                fr: "Projet de recherche en mathématiques",
                en: "Research project in mathematics",
              }}
            </LItemL>

            <LItemL>
              {{
                fr: "Applications possibles: modélisation de la propagation des maladies ou des feux de forêt",
                en: "Potential applications: modeling the spread of diseases and forest fires",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Utilisation d'une simulation (en Python et OCaml) pour conjecturer un résultat",
                en: "Use of a simulation (in Python and OCaml) to conjecture a result",
              }}
            </LItemL>
            <LItemL>
              {{
                fr: "Démonstration mathématique de la conjecture",
                en: "Mathematical proof of the conjecture",
              }}
            </LItemL>
          </List>
        </Flex>
      </Section>
    </VStack>
  );
};
