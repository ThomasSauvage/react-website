import { Flex, Image } from "@chakra-ui/react";
import { Section } from "../../components/Section";
import { TextL } from "../../utils/Language";
import { introduction } from "../../utils/intro";

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
            <TextL margin="0 2em 2em 2em">{introduction}</TextL>
          </div>
        </Flex>
      </Section>
    </Flex>
  );
};
