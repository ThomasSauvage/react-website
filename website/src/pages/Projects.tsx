import { Flex, Image, List, VStack } from "@chakra-ui/react";
import { LItem } from "../components/List";
import { Section } from "../components/Section";

export const Projects = () => {
  return (
    <VStack>
      <Section title="Chocapix • 2023">
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/chocapix.png" maxHeight="20em" />
          <List>
            <LItem>
              Site internet de gestion de stock alimentaire interne à l'Ecole
              polytechnique
            </LItem>
            <LItem>Frontend réalisé en Typescript, React et Chakra UI</LItem>
            <LItem>Backend en Typescript, Adonis</LItem>
            <LItem>Travail à plusieurs avec git</LItem>
          </List>
        </Flex>
      </Section>

      <Section title="Retournement temporel des ondes acoustiques avec un faible nombre de transducteurs • 2021 - 2022">
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/dispositif_exp.jpg" maxHeight="15em" />
          <Image src="/projects/simulation.png" maxHeight="15em" />
          <List>
            <LItem>Projet scientifique en binôme</LItem>
            <LItem>
              Etude théorique, expérimentale et par simulation (en Python)
            </LItem>
            <LItem>
              Réaliser concrètement une inversion de chronologie d’un processus
              de propagation
            </LItem>
            <LItem>
              Applications dans le contrôle non destructif, la médecine et les
              télécommunications
            </LItem>
          </List>
        </Flex>
      </Section>

      <Section title={`L'application "Telecom" • 2022`}>
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/telecom.png" maxHeight="25em" />
          <List>
            <LItem>Projet personnel de programmation en Python</LItem>
            <LItem>
              Télécommunications chiffrée de bout en bout à l'aide de
              cryptographie asymétrique (RSA & AES)
            </LItem>
            <LItem>Qualité sonore plus élevée que les alternatives</LItem>
            <LItem>
              Utilise un serveur relais hébergé sur Google Cloud Platform pour
              acheminer les paquets
            </LItem>
          </List>
        </Flex>
      </Section>

      <Section title="Étude de l’existence de deux comportements en percolation par lien • 2020 - 2021">
        <Flex
          gap="1em"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Image src="/projects/percolation.png" maxHeight="20em" />
          <List>
            <LItem>Projet de recherche en mathématiques</LItem>
            <LItem>Etude de propagations de proche en proche</LItem>
            <LItem>
              Applications possibles: modélisation de la propagation des
              maladies ou des feux de forêt
            </LItem>
            <LItem>
              Utilisation d'une simulation (en Python et OCaml) pour conjecturer
              un résultat
            </LItem>
            <LItem>Démonstration mathématique de la conjecture</LItem>
          </List>
        </Flex>
      </Section>
    </VStack>
  );
};
