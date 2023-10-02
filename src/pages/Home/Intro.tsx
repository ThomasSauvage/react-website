import { Badge, Card, CardHeader, Flex, Image, List } from "@chakra-ui/react";
import { LItemL } from "../../components/List";
import { Section } from "../../components/Section";
import { TextL } from "../../utils/Language";

/** Section: Home > Intro */
export const Intro = () => {
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
                fr: "Je m’appelle Thomas Sauvage, j'ai 21 ans. Je suis étudiant à l’Ecole polytechnique, passionné d’informatique depuis mes 11 ans et de sciences depuis toujours. J’aime comprendre et résoudre les problèmes que je rencontre, et améliorer la qualité des outils que j’utilise au quotidien. J'ai entièrement construit ce site internet avec React, Typescript et Chakra UI.",
                en: "I am Thomas Sauvage, a 21 years old student at Ecole polytechnique. I'm passionate about computer science since I was 11 and about science since forever. I like to understand and solve the problems I encounter, and improve the quality of the tools I use everyday. I built this website using React, Typescript and Chakra UI.",
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
                fr: "Recherche de stage • Juin - Fin août 2024",
                en: "Internship • June - End of August 2024",
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
          <LItemL iconColor="white">
            {{
              fr: "Actuellement à la recherche d'un stage de 3 mois",
              en: "Currently looking for a 3-month internship",
            }}
          </LItemL>
          <LItemL iconColor="white">
            {{
              fr: "Stage de deuxième année de l'Ecole polytechnique",
              en: "Second-year internship of Ecole polytechnique",
            }}
          </LItemL>
          <LItemL iconColor="white">
            {{
              fr: "Ouvert à toute proposition dans les domaines de l'informatique :",
              en: "Open to any proposal in the fields of computer science:",
            }}
          </LItemL>
          <LItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Développement web",
              en: "Web development",
            }}
          </LItemL>
          <LItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Développement de software",
              en: "Software development",
            }}
          </LItemL>
          <LItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Intelligence artificielle",
              en: "Artificial intelligence",
            }}
          </LItemL>
          <LItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Simulation",
              en: "Simulation",
            }}
          </LItemL>
          <LItemL iconColor="white" marginLeft="3em">
            {{
              fr: "Autre...",
              en: "Other...",
            }}
          </LItemL>
          <LItemL iconColor="white">
            {{
              fr: "N'hésitez pas à me contacter",
              en: "Feel free to contact me",
            }}
          </LItemL>
        </List>
      </Card>
    </Flex>
  );
};
