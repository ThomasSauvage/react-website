import React, { ReactNode, useContext, useState } from "react";

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

type TextLanguageProps = {
  [key in Language]: string;
};

export const useTextLanguage = (texts: TextLanguageProps) => {
  const { language } = useContext(LanguageContext);

  return texts[language];
};

export const TextLanguage = (texts: TextLanguageProps): ReactNode => {
  const text = useTextLanguage(texts);

  return <>{text}</>;
};
