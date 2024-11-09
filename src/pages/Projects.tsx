import { Button, Center, Flex, Image, List, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ListItemL } from "../components/List";
import { Section } from "../components/Section";
import { TextL } from "../utils/Language";

/** Page: Projects */
export const Projects = () => {
  return (
    <VStack>
      <Section title={{ fr: "Git, GitHub, GitLab", en: "Git, GitHub, GitLab" }}>
        <TextL>
          {{
            fr: "J'ai pu utiliser Git, GitHub et GitLab dans le cadre de mes projets. La majorité d'entre eux sont privés, mais vous pouvez voir mon activité sur mes comptes :",
            en: "I used Git, GitHub and GitLab for many of my projects. Most of them are private, but you can see my activity on my accounts:",
          }}
        </TextL>
        <Center marginTop="2em" gap="1em">
          <Link to="https://github.com/ThomasSauvage" target="_blank">
            <Button bg="accent" color="white">
              GitHub
            </Button>
          </Link>
          <Link to="https://gitlab.binets.fr/svg" target="_blank">
            <Button bg="accent" color="white">
              GitLab
            </Button>
          </Link>
        </Center>
      </Section>
      <Section
        title={{
          fr: "Échange de clé authentifié par mot de passe post-quantique • 2023 - 2024",
          en: "Post-quantum password authenticated key exchange • 2023 - 2024",
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/cake.svg" maxHeight="10em" />
          <Image src="/projects/anssi.png" maxHeight="10em" />

          <VStack gap="1em">
            <List>
              <ListItemL>
                {{
                  fr: `Projet de recherche en cryptographie pour le "Projet Scientifique Collectif" de l'École polytechnique`,
                  en: `Research project in cryptography for the "Collective Scientific Project" of École polytechnique`,
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Première implémentation d'un échange de clé authentifié par mot de passe post-quantique",
                  en: "Writing the first implementation of a post-quantum password authenticated key exchange",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Implémentation du protocole CAKE, en partenariat avec l'ANSSI (Agence nationale de la sécurité des systèmes d'information)",
                  en: "Implementing the CAKE protocol, in partnership with ANSSI (French national agency for cybersecurity)",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Nominé pour le meilleur projet scientifique collectif de l'École polytechnique de l'année",
                  en: "Nominated for the best École polytechnique collective scientific project of the year",
                }}
              </ListItemL>
            </List>
            <Link to="https://github.com/pq-pake" target="_blank">
              <Button bg="accent" color="white">
                <TextL>
                  {{
                    fr: "Implémentations en C & Python sur GitHub",
                    en: "C & Python implementations on GitHub",
                  }}
                </TextL>
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Section>
      <Section title={{ fr: "Chocapix • 2023", en: "Chocapix • 2023" }}>
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/chocapix.png" maxHeight="20em" />
          <List>
            <ListItemL>
              {{
                fr: "Site internet de gestion de stock alimentaire interne à l'École polytechnique",
                en: "Food stock management website for École polytechnique",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Frontend réalisé en Typescript, React et Chakra UI",
                en: "Frontend made in Typescript, React and Chakra UI",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Backend réalisé en Typescript et Adonis",
                en: "Backend made in Typescript and Adonis",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Travail à plusieurs avec git et Gitlab",
                en: "Teamwork with git and Gitlab",
              }}
            </ListItemL>
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
            <ListItemL>
              {{
                fr: "Projet scientifique en binôme",
                en: "Scientific project in pairs",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Etude théorique, expérimentale et par simulation (en Python)",
                en: "Theoretical, experimental and simulation study (in Python)",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Objectif: Focaliser une onde acoustique en un point précis de l'espace",
                en: "Objective: Focus an acoustic wave at a specific point in space",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Applications possibles: contrôle non destructif, médecine et les télécommunications",
                en: "Potential applications: non-destructive testing, healthcare and telecommunications",
              }}
            </ListItemL>
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
            <ListItemL>
              {{
                fr: "Projet personnel de programmation en Python",
                en: "Personal programming project in Python",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Télécommunications chiffrée de bout en bout à l'aide de cryptographie asymétrique (RSA & AES)",
                en: "End-to-end encrypted telecommunications using asymmetric cryptography (RSA & AES)",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Interface graphique réalisée avec Tkinter",
                en: "Graphical interface made with Tkinter",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Qualité sonore plus élevée que les alternatives (Discord, Skype, Zoom, etc.)",
                en: "Higher sound quality than alternatives (Discord, Skype, Zoom, etc.)",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Utilise un serveur relais hébergé sur Google Cloud Platform pour acheminer les paquets",
                en: "Uses a relay server hosted on Google Cloud Platform to route packets",
              }}
            </ListItemL>
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
            <ListItemL>
              {{
                fr: "Projet de recherche en mathématiques",
                en: "Research project in mathematics",
              }}
            </ListItemL>

            <ListItemL>
              {{
                fr: "Applications possibles: modélisation de la propagation des maladies ou des feux de forêt",
                en: "Potential applications: modeling the spread of diseases and forest fires",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Utilisation d'une simulation (en Python et OCaml) pour conjecturer un résultat",
                en: "Use of a simulation (in Python and OCaml) to conjecture a result",
              }}
            </ListItemL>
            <ListItemL>
              {{
                fr: "Démonstration mathématique de la conjecture",
                en: "Mathematical proof of the conjecture",
              }}
            </ListItemL>
          </List>
        </Flex>
      </Section>
    </VStack>
  );
};
