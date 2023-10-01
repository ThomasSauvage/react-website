import { Button, Center, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { Section } from "../../components/Section";
import { LanguageContext, TextL, getText } from "../../utils/Language";

export const Print = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section>
      <Center>
        <TextL as="span" marginRight="0.8em">
          {{
            fr: "Vous pouvez aussi télécharger mon CV au format PDF",
            en: "You can also download my resume as a PDF",
          }}
        </TextL>
        <Link
          href={`/Thomas Sauvage - ${getText(
            { fr: "CV", en: "Resume" },
            language
          )}.pdf`}
          target="_blank"
        >
          <Button bg="accent" color="white">
            <TextL as="span">
              {{
                fr: "ici",
                en: "here",
              }}
            </TextL>
          </Button>
        </Link>
      </Center>
    </Section>
  );
};
