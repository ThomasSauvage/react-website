import { Button, Flex, Grid, Image, Link } from "@chakra-ui/react";
import { Section } from "../components/Section";
import { TextL } from "../utils/Language";

export const Contact = () => {
  const email = [
    "mai",
    "lto:",
    "thomas",
    ".",
    "sauva",
    "@",
    "gmail",
    ".",
    "com",
  ];
  const phone = ["t", "el:", "+336", "61", "63", "52", "92"];

  return (
    <Grid gap="3em">
      <Section title={{ fr: "Mes coordonnées", en: "My contact" }}>
        <Flex alignItems="center" flexWrap="wrap">
          <TextL>
            {{
              fr: "N'hésitez pas à me contacter par mail:",
              en: "Feel free to contact me by email:",
            }}
          </TextL>
          <Button
            variant="link"
            onClick={() => {
              window.location.href = email.join("");
            }}
          >
            <Image
              src="/contact/mail.png"
              height="1.3em"
              marginLeft="1em"
              marginBottom="-0.3em"
            />
          </Button>
        </Flex>

        <Flex alignItems="center" flexWrap="wrap">
          <TextL as="span">
            {{
              fr: " Ou par téléphone (WhatsApp, Signal...): ",
              en: " Or by phone (WhatsApp, Signal...): ",
            }}
          </TextL>
          <Button
            variant="link"
            onClick={() => {
              window.location.href = phone.join("");
            }}
          >
            <Image
              src="/contact/phone.png"
              height="0.9em"
              marginLeft="1em"
              marginBottom="-0.3em"
            />
          </Button>
        </Flex>
      </Section>

      <Section title={{ fr: "Mes réseaux sociaux", en: "My social media" }}>
        <TextL as="span">
          {{
            fr: "Vous pouvez aussi m'ajouter sur LinkedIn en cliquant sur ce lien: ",
            en: "You can also add me on LinkedIn by clicking on this link: ",
          }}
        </TextL>
        <Link
          href="https://www.linkedin.com/in/sauvagethomas/"
          color="accent"
          isExternal
        >
          in/sauvagethomas
        </Link>
      </Section>
    </Grid>
  );
};
