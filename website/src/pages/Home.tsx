import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  List,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { LItem } from "../components/List";
import { Section } from "../components/Section";

const AccordionLine = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <AccordionItem>
    <Heading>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <Heading size="sm" color="veryAccent" marginRight="1em">
            {title}
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);

export const Home = () => {
  return (
    <Grid alignContent="center" gap="3em" marginBottom="8em">
      <Section>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="/photo.jpg"
            alt="Thomas Sauvage"
            boxSize="14em"
            borderRadius="full"
          />
          <Text margin="2em">
            Bonjour, je m’appelle Thomas Sauvage, j'ai 21 ans. Je suis étudiant
            à l’Ecole polytechnique, passionné d’informatique depuis mes 11 ans
            et de sciences depuis toujours. J’aime comprendre et résoudre les
            problèmes que je rencontre, et améliorer la qualité des outils que
            j’utilise au quotidien. J'ai entièrement construit ce site internet
            avec React, Typescript et Chakra UI.
          </Text>
        </Flex>
      </Section>

      <Section title="Ma formation">
        <TableContainer>
          <Table variant="striped">
            <Thead width="auto">
              <Tr>
                <Th>Date</Th>
                <Th>Formation</Th>
                <Th>Commentaire</Th>
              </Tr>
            </Thead>
            <Tbody width="auto">
              <Tr>
                <Td whiteSpace="normal">2022 - ...</Td>
                <Td color="veryAccent" fontWeight="bold" whiteSpace="normal">
                  Ecole polytechnique
                </Td>
                <Td whiteSpace="normal">Cycle ingénieur Polytechnicien</Td>
              </Tr>
              <Tr>
                <Td whiteSpace="normal">2020 - 2022</Td>
                <Td whiteSpace="normal">MPSI & MP* (Maths sup/Maths spé)</Td>
                <Td whiteSpace="normal">au Lycée Marcelin Berthelot</Td>
              </Tr>
              <Tr>
                <Td whiteSpace="normal">2020</Td>
                <Td whiteSpace="normal">Baccalauréat Scientifique</Td>
                <Td whiteSpace="normal">mention Très Bien</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Section>

      <Section title="Mes compétences">
        <Accordion>
          <AccordionLine title="Programmation">
            <List>
              <LItem>Programmation depuis 2013 (mes 11 ans, en MS-DOS)</LItem>
              <LItem>Programmation en Python depuis 2018 (mes 15 ans)</LItem>
              <LItem>Programmation en Ocaml depuis 2020</LItem>
              <LItem>
                Développement de sites internet en HTML&CSS avec gestion du
                backend en Django (Python)
              </LItem>
              <LItem>
                Développement de sites internet en Typescript React pour le{" "}
                <Link
                  href="https://br.binets.fr"
                  color="veryAccent"
                  target="_blank"
                >
                  Binet Réseau
                </Link>{" "}
                (association d'informatique de l'Ecole Polytechnique)
              </LItem>
              <LItem>
                Cybersécurité : Cryptographie asymétrique & symétrique, hachage,
                utilisation d’un gestionnaire de mot de passe et d’une clef
                physique (yubikey)
              </LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Technique">
            <List>
              <LItem>
                Électronique & informatique : Création et réparation
                d’ordinateurs, de clavier ergonomiques…
              </LItem>
              <LItem>Impression 3D</LItem>
              <LItem>Permis de pilote de drones</LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Artistique">
            <List>
              <LItem>
                Photographie : Portrait, paysage, astrophotographie…
              </LItem>
              <LItem>Retouche photo : Photoshop</LItem>
              <LItem>Montage vidéo : Première pro</LItem>
              <LItem>Guitare</LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Langues">
            <List>
              <LItem>Langue maternelle français</LItem>
              <LItem>Très bon niveau en anglais</LItem>
              <LItem>Niveau correct en espagnol</LItem>
            </List>
          </AccordionLine>
        </Accordion>
      </Section>

      <Section title="Mes expériences">
        <Accordion>
          <AccordionLine title="Armée de Terre • Officier, Professeur & Colleur de Mathématiques, Physique et Informatique en Maths sup/Maths spé • Septembre 2022 - Avril 2023 ">
            <List>
              <LItem>Formation d'officier</LItem>

              <LItem marginLeft="3em">Apprentissage du commandement</LItem>
              <LItem marginLeft="3em">
                Gestion de projet, notamment en temps de crise
              </LItem>
              <LItem marginLeft="3em">Rigueur, exemplarité</LItem>
              <LItem>
                Professeur en lycée militaire: Pédagogie, travail d'équipe
              </LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Travaux de recherche en groupe • 2019 - 2022">
            <List>
              <LItem>Gestion du travail en équipe</LItem>
              <LItem>
                Recherche scientifique en biologie, mathématiques, et physique
              </LItem>
              <LItem>
                Voir{" "}
                <Link href="/projects" color="veryAccent">
                  Mes projets
                </Link>
              </LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Photographe pour la mouette bâillonnée • 2017 - 2018">
            <List>
              <LItem>Journal étudiant</LItem>
              <LItem>Direction technique d'interviews</LItem>
            </List>
          </AccordionLine>

          <AccordionLine title="Administration d’un serveur de jeux • 2014 - 2015">
            <List>
              <LItem>Administration bénévole de serveur</LItem>
              <LItem>Spécialisé dans la lutte contre la triche</LItem>
              <LItem>
                Serveur comptant un total de plus de 10 000 utilisateurs, à la
                tête d’une équipe de 10 modérateurs
              </LItem>
            </List>
          </AccordionLine>
        </Accordion>
      </Section>
    </Grid>
  );
};
