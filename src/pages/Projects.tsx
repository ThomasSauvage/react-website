import { Button, Center, Flex, Image, List, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ListItemL } from "../components/List";
import { Section } from "../components/Section";
import { TextL } from "../utils/Language";
import { FaGithub } from "react-icons/fa";

/** Page: Projects */
const Projects = () => {
  return (
    <VStack>
      <Section title={{ fr: "GitHub", en: "GitHub" }}>
        <TextL>
          {{
            fr: "Retrouvez la plus-part de mes projets sur GitHub. N'hésitez pas à y jeter un œil !",
            en: "You will find most of my projects on GitHub. Feel free to check them out!",
          }}
        </TextL>
        <Center marginTop="2em" gap="1em">
          <Link to="https://github.com/ThomasSauvage" target="_blank">
            <Button bg="accent" color="white" rightIcon={<FaGithub />}>
              GitHub
            </Button>
          </Link>
        </Center>
      </Section>
      <Section
        title={{
          fr: "Évaluation de la performance de TCP Prague et de l'architecture L4S • 2025 - 2026",
          en: "Performance evaluation of TCP Prague and the L4S architecture • 2025 - 2026",
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image
            src="/logos/telecom.svg"
            maxHeight="10em"
            alt="Logo Télécom Paris"
          />
          <Image
            src="/logos/bouygues.svg"
            maxHeight="10em"
            maxWidth="15em"
            alt="Logo Bouygues Telecom"
          />

          <VStack gap="1em">
            <List>
              <ListItemL>
                {{
                  fr: "Création d'un framework permettant d'évaluer le comportement d'algorithmes de contrôle de congestion (TCP Prague, Cubic, BBR, Reno) lorsqu'ils interagissent avec un routeur AQM dualpi2.",
                  en: "Building a framework for evaluating the behavior of congestion control algorithms (TCP Prague, Cubic, BBR, Reno) when interacting with a dualpi2 AQM router.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Projet PRIM: Projet de Recherche et d'Innovation Master de Télécom Paris",
                  en: "PRIM Project: Research and Innovation Project for the Master's Degree in Télécom Paris",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "En partenariat avec Bouygues Telecom.",
                  en: "In partnership with Bouygues Telecom.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Implémentation en Rust.",
                  en: "Implementation in Rust.",
                }}
              </ListItemL>
            </List>
            <Link to="https://github.com/PRIM-L4S/PRIM-L4S" target="_blank">
              <Button bg="accent" color="white" rightIcon={<FaGithub />}>
                <TextL>
                  {{
                    fr: "Implémentation sur GitHub",
                    en: "Implementation on GitHub",
                  }}
                </TextL>
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Section>
      <Section
        title={{
          fr: "Évaluation des limitations de scalabilité d'une infrastructure VPN cloud • 2025",
          en: "Assessing scalability limitations of a cloud-based VPN infrastructure • 2025",
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image
            src="/logos/cisco.svg"
            height="7em"
            maxHeight="10em"
            alt="Logo Cisco"
          />

          <VStack gap="1em">
            <List>
              <ListItemL>
                {{
                  fr: "Conception d'une infrastructure VPN cloud évolutive, basée sur le cloud et multi-locataire, capable de soutenir des dizaines de milliers de clients présente des défis significatifs, particulièrement lorsque les clients nécessitent une connectivité site-à-site avec des milliers d'emplacements.",
                  en: "Designing a scalable, cloud-based, and multi-tenant VPN infrastructure capable of supporting tens of thousands of clients presents significant challenges, particularly when customers require site-to-site connectivity with thousands of locations.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Analyse des métriques de production des instances cloud pour identifier les corrélations entre les schémas d'utilisation et l'état opérationnel des instances.",
                  en: "Analyzing production metrics from cloud instances to identify correlations between usage patterns and the operational state of the instances.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Conception de modèles de machine learning pour prédire la qualité d'expérience des utilisateurs finaux basée uniquement sur les métriques des instances cloud.",
                  en: "Designing machine learning models that predict end-user quality of experience based solely on metrics from the cloud instances.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Pour permettre des prédictions précises, un ensemble de données d'entraînement a été construit à l'aide d'un banc d'essai dédié qui collecte à la fois des métriques au niveau de l'utilisateur et au niveau des instances.",
                  en: "To enable accurate predictions, a comprehensive training dataset was constructed using a dedicated test bench that collects both user-level and instance-level metrics.",
                }}
              </ListItemL>
            </List>
          </VStack>
        </Flex>
      </Section>
      <Section
        title={{
          fr: "Implémentation d'algorithmes cryptographiques modernes en Rust • 2024 - 2025",
          en: "Implementing modern cryptographic algorithms in Rust • 2024 - 2025",
        }}
      >
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/key.png" maxHeight="10em" alt="key" />
          <Image src="/projects/lock.png" maxHeight="10em" alt="lock" />

          <VStack gap="1em">
            <List>
              <ListItemL>
                {{
                  fr: "Implémentation des algorithmes cryptographiques utilisés par le protocole Signal.",
                  en: "Implementing from scratch the cryptographic algorithms used by the Signal Protocol.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Fait dans le cadre du cours de Cryptographie Avancée à l'École polytechnique, par le Prof. Benjamin Smith.",
                  en: "Made as part of the Advanced Cryptography course at École polytechnique, by Prof. Benjamin Smith.",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Implémentation de : ed25519, x25519, chacha20 poly1305 AEAD, shake128...",
                  en: "Implementing: ed25519, x25519, chacha20 poly1305 AEAD, shake128...",
                }}
              </ListItemL>
              <ListItemL>
                {{
                  fr: "Implémentation en Rust.",
                  en: "Implementation in Rust.",
                }}
              </ListItemL>
            </List>
            <Link
              to="https://github.com/ThomasSauvage?tab=repositories&q=cryptography"
              target="_blank"
            >
              <Button bg="accent" color="white" rightIcon={<FaGithub />}>
                <TextL>
                  {{
                    fr: "Implémentations sur GitHub",
                    en: "Implementations on GitHub",
                  }}
                </TextL>
              </Button>
            </Link>
          </VStack>
        </Flex>
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
          <Image src="/projects/cake.svg" maxHeight="10em" alt="cake" />
          <Image src="/projects/anssi.png" maxHeight="10em" alt="anssi logo" />

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
              <ListItemL>
                {{
                  fr: "Implémentation en C et Python.",
                  en: "Implementation in C and Python.",
                }}
              </ListItemL>
            </List>
            <Link to="https://github.com/pq-pake" target="_blank">
              <Button bg="accent" color="white" rightIcon={<FaGithub />}>
                <TextL>
                  {{
                    fr: "Implémentations sur GitHub",
                    en: "Implementations on GitHub",
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
          <Image
            src="/projects/chocapix.png"
            maxHeight="20em"
            alt="Chocapix logo"
          />
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
          <Image
            src="/projects/dispositif_exp.jpg"
            maxHeight="15em"
            alt="Picture of the experimental setup"
          />
          <Image
            src="/projects/simulation.png"
            maxHeight="15em"
            alt="Simulation of the reversal"
          />
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
          <Image
            src="/projects/telecom.png"
            maxHeight="25em"
            alt="Screenshot of the app"
          />
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
          <Image
            src="/projects/percolation.png"
            maxHeight="20em"
            alt="Graph showing percolation"
          />
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

export default Projects;
