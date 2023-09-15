import {
  Button,
  Center,
  Flex,
  FormLabel,
  Grid,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { Section } from "../components/Section";
import { LanguageContext, TextL, getText } from "../utils/Language";
import StringInputRhf from "../utils/StringInputRhf";
import TextareaRhf from "../utils/TextareaRhf";
import { ContactForm, useContactForm } from "../utils/contactForm";

export const Contact = () => {
  const {
    getValues,
    control,
    trigger,
    reset,
    formState: { errors },
  } = useContactForm();
  const showToast = useToast();
  const { language } = useContext(LanguageContext);

  const { mutate } = useMutation(
    (data: ContactForm) =>
      fetch("https://ntfy.sh/4A1Kc6c0R16GEM33vOy6y4RTx73Nvt3E", {
        method: "POST",
        body: `Mail: ${data.email}\n\n${data.message}`,
        headers: {
          Title: data.name,
        },
      }),
    {
      onSuccess: () => {
        showToast({
          title: getText(
            {
              fr: "Message envoyé",
              en: "Message sent",
            },
            language
          ),
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        reset();
      },
      onError: () => {
        showToast({
          title: getText(
            {
              fr: "Une erreur est survenue lors de l'envoi du message",
              en: "An error occurred while sending the message",
            },
            language
          ),
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    }
  );

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

  const isValid = Object.keys(errors).length === 0;

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
            fr: "Vous pouvez aussi m'ajouter sur LinkedIn: ",
            en: "You can also add me on LinkedIn: ",
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

      <Section
        title={{
          fr: "M'envoyer moi un message directement",
          en: "Send me a message directly",
        }}
      >
        <Grid templateColumns={{ base: "1fr", md: "0fr 1fr" }}>
          <FormLabel marginRight="3em">
            <TextL>
              {{
                fr: "Nom",
                en: "Name",
              }}
            </TextL>
          </FormLabel>
          <StringInputRhf
            control={control}
            name="name"
            trigger={trigger}
            marginBottom="2em"
          />

          <FormLabel marginRight="3em">
            <TextL>
              {{
                fr: "Mail",
                en: "Email",
              }}
            </TextL>
          </FormLabel>
          <StringInputRhf
            control={control}
            name="email"
            trigger={trigger}
            marginBottom="2em"
          />

          <FormLabel marginRight="3em">
            <TextL>
              {{
                fr: "Message",
                en: "Message",
              }}
            </TextL>
          </FormLabel>
          <TextareaRhf
            control={control}
            name="message"
            trigger={trigger}
            marginBottom="2em"
          />
        </Grid>

        <Center>
          <Button
            margin="1em"
            color="white"
            backgroundColor="accent"
            isDisabled={!isValid}
            onClick={async () => {
              if (!(await trigger())) return;

              mutate(getValues());
            }}
          >
            <TextL>
              {{
                fr: "Envoyer",
                en: "Send",
              }}
            </TextL>
          </Button>
        </Center>
      </Section>
    </Grid>
  );
};
