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
            alt="A picture of me"
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
                fr: `Je m’appelle Thomas Sauvage, je suis un étudiant de ${age} ans en troisième année à l'École polytechnique.
Je me spécialise en informatique, plus spécifiquement en réseaux et cybersécurité. J'ai créé ce site internet avec React, Typescript et Chakra UI.`,
                en: `I am Thomas Sauvage, a ${age}-year-old third-year (M2) student at École polytechnique.
I specialize in computer science, specifically in networking and cybersecurity. I built this website using React, Typescript and Chakra UI.`,
              }}
            </TextL>
          </div>
        </Flex>
      </Section>
    </Flex>
  );
};
