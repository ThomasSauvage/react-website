import { Button, HStack, Image, Text, TextProps } from "@chakra-ui/react";
import React, { useContext, useState } from "react";

type Language = "fr" | "en";

export const LanguageContext = React.createContext({
  language: "fr" as Language,
  setLanguage: (language: Language) => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

type TextLanguage = {
  [key in Language]: string;
};

export const useTextLanguage = (texts: TextLanguage) => {
  const { language } = useContext(LanguageContext);

  return texts[language];
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
    <HStack>
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
