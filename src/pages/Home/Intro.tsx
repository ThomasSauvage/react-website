import { Flex, Image } from "@chakra-ui/react";
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
    </Flex>
  );
};
