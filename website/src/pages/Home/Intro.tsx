import { Badge, Card, CardHeader, Flex, Image } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { TextL } from "../../utils/Language";

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
                en: "I am Thomas Sauvage, a student at Ecole polytechnique of 21 years old. I'm passionate about computer science since I was 11 and about science since forever. I like to understand and solve the problems I encounter, and improve the quality of the tools I use everyday. I built this website with React, Typescript and Chakra UI.",
              }}
            </TextL>
          </div>
        </Flex>
      </Section>

      <Card background="accent" margin="1em">
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
        <TextL
          marginRight="2em"
          marginLeft="2em"
          marginBottom="2em"
          color="white"
        >
          {{
            fr: "Je suis actuellement à la recherche d'un stage de 3 mois dans le cadre de ma deuxième année à l'Ecole polytechnique. Je suis ouvert à toute proposition dans les domaines de l'informatique: dévelopement web, intelligence artificielle, simulation... N'hésitez pas à me contacter.",
            en: "I am currently looking for a 3-month internship as part of my second year at Ecole polytechnique. I am open to any proposal in the field of computer science: web development, artificial intelligence, simulation... Do not hesitate to contact me.",
          }}
        </TextL>
      </Card>
    </Flex>
  );
};
