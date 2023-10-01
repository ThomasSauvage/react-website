import { Button, HStack, Image, Text, TextProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { usePersistentState } from "./usePersistantState";

type Language = "fr" | "en";

export const LanguageContext = React.createContext({
  language: "en" as Language,
  setLanguage: (language: Language) => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  console.log(navigator.language);
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

export type TextLanguage = {
  [key in Language]: string;
};

export const getText = (texts: TextLanguage, language: Language) => {
  return texts[language];
};

export const useTextLanguage = (texts: TextLanguage) => {
  const { language } = useContext(LanguageContext);

  return getText(texts, language);
};

type TextLProps = Omit<TextProps, "children"> & {
  children: TextLanguage;
};

export const TextL = ({ children, ...props }: TextLProps) => {
  const text = useTextLanguage(children);

  return <Text {...props}>{text}</Text>;
};

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
