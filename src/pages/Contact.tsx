import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  Center,
  Flex,
  FormLabel,
  Grid,
  HStack,
  Image,
  Link,
  useClipboard,
  useToast,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { Section } from "../components/Section";
import { LanguageContext, TextL, getText } from "../utils/Language";
import StringInputRhf from "../utils/StringInputRhf";
import TextareaRhf from "../utils/TextareaRhf";
import { type ContactForm, useContactForm } from "../utils/contactForm";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";
import { pgpFingerprint, pgpKey } from "../utils/pgpKey";

// The email is stored in an array to avoid bots to find them
// Moreover, they are showed on the page as a picture
// The email is concatenated when the user clicks on the picture, for the link to work
const email = ["thomas", "@", "sauvage", ".", "pm"];

/** Page: Contact */
const Contact = () => {
  const {
    getValues,
    control,
    trigger,
    reset,
    formState: { errors },
  } = useContactForm();
  const showToast = useToast();
  const { language } = useContext(LanguageContext);

  const copyData = {
    email: {
      clipboard: useClipboard(email.join("")),
      message: {
        fr: "Adresse mail copiée dans le presse-papier",
        en: "Email copied to clipboard",
      },
    },
    pgpKey: {
      clipboard: useClipboard(pgpKey),
      message: {
        fr: "Clé PGP copiée dans le presse-papier",
        en: "PGP Key copied to clipboard",
      },
    },
    pgpFingerprint: {
      clipboard: useClipboard(pgpFingerprint),
      message: {
        fr: "Empreinte PGP copiée dans le presse-papier",
        en: "PGP Fingerprint copied to clipboard",
      },
    },
  };

  const copy = (key: keyof typeof copyData) => {
    const { clipboard, message } = copyData[key];
    clipboard.onCopy();

    showToast({
      title: getText(message, language),
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  // The message is sent to a service called ntfy.sh, to receive the message on my phone
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
            language,
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
            language,
          ),
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    },
  );

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
            variant="unstyled"
            onTouchStart={() => {
              if (copyData.email.clipboard.hasCopied) return;
              copy("email");
            }}
            onClick={() => {
              if (copyData.email.clipboard.hasCopied) return;
              copy("email");
            }}
            marginLeft="1em"
            color="accent"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            display="flex"
            _hover={{
              backgroundColor: "none",
            }}
          >
            <span>thomas</span>
            <Image
              src="/contact/at.png"
              height="1.3em"
              marginBottom="-0.3em"
              marginLeft="0.1em"
              marginRight="0.1em"
              alt="[at]"
            />
            <span>sauvage.pm</span>

            <Button
              as="div"
              color="accent"
              marginLeft="0.8em"
              rightIcon={
                copyData.email.clipboard.hasCopied ? (
                  <LuClipboardCheck />
                ) : (
                  <LuClipboard />
                )
              }
              disabled={copyData.email.clipboard.hasCopied}
              _hover={{
                backgroundColor: "rgb(225, 235, 241)",
              }}
            >
              <TextL>
                {{
                  fr: "Copier",
                  en: "Copy",
                }}
              </TextL>
            </Button>
          </Button>
        </Flex>

        <Card padding={0} marginTop="2em" width="fit-content">
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton p={0}>
                <Card
                  width="100%"
                  flexDirection="row"
                  padding="1em"
                  backgroundColor="accent"
                >
                  <Box as="span" flex="1" textAlign="left">
                    <Text size="sm" color="white" marginLeft="1em">
                      {getText(
                        {
                          fr: "Pour chiffrer vos messages, vous pouvez utiliser ma clé PGP",
                          en: "To encrypt your messages, you can use my PGP key",
                        },
                        language,
                      )}
                    </Text>
                  </Box>
                  <AccordionIcon color="white" />
                </Card>
              </AccordionButton>

              <AccordionPanel p={0} margin="2em">
                <VStack justifyContent="space-between">
                  <HStack>
                    <TextL>
                      {{
                        fr: "Empreinte",
                        en: "Fingerprint",
                      }}
                    </TextL>
                    <Button
                      color="accent"
                      marginLeft="0.8em"
                      rightIcon={
                        copyData.pgpFingerprint.clipboard.hasCopied ? (
                          <LuClipboardCheck />
                        ) : (
                          <LuClipboard />
                        )
                      }
                      disabled={copyData.pgpFingerprint.clipboard.hasCopied}
                      onClick={() => {
                        if (copyData.pgpFingerprint.clipboard.hasCopied) return;
                        copy("pgpFingerprint");
                      }}
                      _hover={{
                        backgroundColor: "rgb(225, 235, 241)",
                      }}
                    >
                      <TextL>
                        {{
                          fr: "Copier",
                          en: "Copy",
                        }}
                      </TextL>
                    </Button>
                  </HStack>
                  <code style={{ textAlign: "center" }}>{pgpFingerprint}</code>

                  <HStack marginTop="2em">
                    <TextL>
                      {{
                        fr: "Clé PGP",
                        en: "PGP Key",
                      }}
                    </TextL>
                    <Button
                      color="accent"
                      marginLeft="0.8em"
                      rightIcon={
                        copyData.pgpKey.clipboard.hasCopied ? (
                          <LuClipboardCheck />
                        ) : (
                          <LuClipboard />
                        )
                      }
                      disabled={copyData.pgpKey.clipboard.hasCopied}
                      onClick={() => {
                        if (copyData.pgpKey.clipboard.hasCopied) return;
                        copy("pgpKey");
                      }}
                      _hover={{
                        backgroundColor: "rgb(225, 235, 241)",
                      }}
                    >
                      <TextL>
                        {{
                          fr: "Copier",
                          en: "Copy",
                        }}
                      </TextL>
                    </Button>
                  </HStack>
                  <code
                    style={{
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-all",
                    }}
                  >
                    {pgpKey}
                  </code>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Card>
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
          fr: "M'envoyer un message directement",
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

export default Contact;
