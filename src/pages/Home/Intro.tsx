import { Badge, Card, CardHeader, Flex, Image, List } from "@chakra-ui/react";
import { ListItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { TextL } from "../../utils/Language";

const ANNIVERSARY = new Date("2002-09-15");

/** Section: Home > Intro */
export const Intro = () => {
  const age = Math.floor(
    (new Date().getTime() - ANNIVERSARY.getTime()) / 31536000000
  );
  return (
    <Flex justifyContent="center" flexDirection={{ base: "column", xl: "row" }}>
      <Section>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/photo.jpg"
            alt="Thomas Sauvage"
            boxSize="14em"
            borderRadius="full"
          />
          <div>
            <TextL margin="2em 2em 1em 2em">
              {{
                fr: "Bonjour,",
                en: "Hello,",
              }}
            </TextL>
            <TextL margin="0 2em 2em 2em">
              {{
                fr: `Je m’appelle Thomas Sauvage, j'ai ${age} ans. Je suis étudiant à l’École polytechnique, passionné d’informatique depuis mes 11 ans et de sciences depuis toujours. Je suis l'actuel président du Binet Réseau, l'association d'informatique des élèves de l'École. J'ai créé ce site internet avec React, Typescript et Chakra UI.`,
                en: `I am Thomas Sauvage, a ${age} years old student at École polytechnique. I'm passionate about computer science since I was 11 and about science since forever. J’aime comprendre et résoudre les problèmes que je rencontre, et améliorer la qualité des outils que j’utilise au quotidien. I built this website using React, Typescript and Chakra UI.`,
              }}
            </TextL>
          </div>
        </Flex>
      </Section>

      <Card background="accent" margin="1em" minWidth="40%">
        <CardHeader>
          <Badge
            variant="subtle"
            backgroundColor="veryAccent"
            color="white"
            margin="1em"
            padding="0.5em"
          >
            <TextL>
              {{
                fr: "Stage de recherche • Avril - Juillet 2025",
                en: "Research internship • April - July 2025",
              }}
            </TextL>
          </Badge>
        </CardHeader>
        <List
          marginRight="2em"
          marginLeft="2em"
          marginBottom="2em"
          color="white"
        >
          <ListItemL iconColor="white">
            {{
              fr: "Actuellement à la recherche d'un stage de 4 mois",
              en: "Currently looking for a 4-month internship",
            }}
          </ListItemL>
          <ListItemL iconColor="white">
            {{
              fr: "Stage de recherche de troisième année de l'École polytechnique",
              en: "Third-year research internship of École polytechnique",
            }}
          </ListItemL>
          <ListItemL iconColor="white">
            {{
              fr: "Ouvert à toute proposition dans les domaines de la recherche en informatique :",
              en: "Open to any proposal in the fields of computer science research:",
            }}
          </ListItemL>
          <ListItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Réseau",
              en: "Networking",
            }}
          </ListItemL>
          <ListItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Hébergement web",
              en: "Cloud computing",
            }}
          </ListItemL>
          <ListItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Cybersécurité",
              en: "Cybersecurity",
            }}
          </ListItemL>
          <ListItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Intelligence artificielle",
              en: "Artificial intelligence",
            }}
          </ListItemL>
          <ListItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Autre...",
              en: "Other...",
            }}
          </ListItemL>
          <ListItemL iconColor="white">
            {{
              fr: "N'hésitez pas à me contacter (voir la page Contact)",
              en: "Feel free to contact me (see the Contact page)",
            }}
          </ListItemL>
        </List>
      </Card>
    </Flex>
  );
};
