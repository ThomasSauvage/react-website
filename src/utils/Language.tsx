import { Button, HStack, Image, Text, TextProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { usePersistentState } from "./usePersistantState";

type Language = "fr" | "en";

export const LanguageContext = React.createContext({
  language: "en" as Language,
  setLanguage: (language: Language) => {},
});

/** Context provider for:
 *  - language: Current language of the page
 *  - setLanguage: To change the language
 */
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = usePersistentState<Language>(
    navigator.language.toLowerCase().includes("fr") ? "fr" : "en",
    "language"
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/** Object containing text in different languages */
export type TextLanguage = {
  [key in Language]: string;
};

/** Get the text in the current language,
 *  Used for type safety
 */
export const getText = (texts: TextLanguage, language: Language) => {
  return texts[language];
};

type TextLProps = Omit<TextProps, "children"> & {
  children: TextLanguage;
};

/** Text component with multiple languages support */
export const TextL = ({ children, ...props }: TextLProps) => {
  const { language } = useContext(LanguageContext);
  const text = getText(children, language);

  return <Text {...props}>{text}</Text>;
};

/** Fancy component to select the language */
export const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <HStack width="10em" justifyContent="center">
      <Button
        onClick={() => setLanguage("fr")}
        backgroundColor={language === "fr" ? "white" : "transparent"}
        _hover={{}}
      >
        <Image src="/flags/fr.svg" width="1.5em" />
      </Button>
      <Button
        onClick={() => setLanguage("en")}
        backgroundColor={language === "en" ? "white" : "transparent"}
        _hover={{}}
      >
        <Image src="/flags/en.svg" width="1.5em" />
      </Button>
    </HStack>
  );
};
