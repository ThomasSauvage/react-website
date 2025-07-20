import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getText, LanguageContext, languages } from "../utils/Language";
import { introduction } from "../utils/intro";

const URL = "https://sauvage.pm/";

export const DynamicHeaders = () => {
  const { language } = useContext(LanguageContext);

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
        <meta name="description" content={getText(introduction, language)} />
        {languages.map((lang) => (
          <link
            rel="alternate"
            key={lang}
            hrefLang={lang}
            href={`${URL}${lang}/`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={URL} />
      </Helmet>
    </HelmetProvider>
  );
};
