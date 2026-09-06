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

const LanguageButton = ({
  language,
  onClick,
}: {
  language: Language;
  onClick: () => void;
}) => {
  const { language: currentLanguage } = useContext(LanguageContext);

  return (
    <Button
      onClick={onClick}
      backgroundColor={
        currentLanguage === language
          ? "rgba(135, 131, 209, 0.42)"
          : "rgba(135, 131, 209, 0.2)"
      }
      border="1px solid"
      borderColor={
        currentLanguage === language
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.28)"
      }
      _hover={{ backgroundColor: "rgba(135, 131, 209, 0.52)" }}
      aria-label={`Select ${language.toUpperCase()} Language`}
    >
      <Image
        src={`/flags/${language}.svg`}
        width="1.5em"
        alt={language.toUpperCase()}
      />
    </Button>
  );
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
    <HStack width="max-content" justifyContent="center">
      <LanguageButton onClick={() => setLanguage("fr")} language="fr" />
      <LanguageButton onClick={() => setLanguage("en")} language="en" />
    </HStack>
  );
};
