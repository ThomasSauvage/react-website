import { Button, HStack, Image, Text, type TextProps } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const languages = ["fr", "en"] as const;
export type Language = (typeof languages)[number];

export const LanguageContext = React.createContext({
  language: "en" as Language,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateLanguageRouteChange: (_language: Language) => {},
});

/** Context provider for:
 *  - language: Current language of the page
 *  - setLanguage: To update the language, not change it!
 */
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // There is a default here, but it should be overridden by the URL
  // See Routing.tsx
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{ language, updateLanguageRouteChange: setLanguage }}
    >
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
  const { language, updateLanguageRouteChange } = useContext(LanguageContext);

  const location = useLocation();

  const setLanguage = (lang: Language) => {
    if (language === lang) {
      return;
    }

    updateLanguageRouteChange(lang); // Not really needed here, as Routing.tsx will handle it

    // Navigate to the same path but with the new language
    const newPath = `/${lang}${
      location.pathname !== "/" ? `#${location.pathname}` : ""
    }`;

    window.history.replaceState(null, "", newPath);
  };

  return (
    <HStack width="10em" justifyContent="center">
      <Button
        onClick={() => setLanguage("fr")}
        backgroundColor={language === "fr" ? "white" : "transparent"}
        _hover={{}}
        aria-label="Select French Language"
      >
        <Image src="/flags/fr.svg" width="1.5em" alt="FR" />
      </Button>
      <Button
        onClick={() => setLanguage("en")}
        backgroundColor={language === "en" ? "white" : "transparent"}
        _hover={{}}
        aria-label="Select English Language"
      >
        <Image src="/flags/en.svg" width="1.5em" alt="EN" />
      </Button>
    </HStack>
  );
};
