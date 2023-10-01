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
            fr: "Vous pouvez aussi télécharger mon CV en format PDF en cliquant ",
            en: "You can also download my resume in PDF format by clicking ",
          }}
        </TextL>
        <Link
          href={`/Thomas Sauvage - ${getText(
            { fr: "CV", en: "Resume" },
            language
          )}.pdf`}
          target="_blank"
        >
          <Button bg="accent">
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
