import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getText, LanguageContext } from "../utils/Language";
import { introduction } from "../utils/intro";

export const DynamicHeaders = () => {
  const { language } = useContext(LanguageContext);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={getText(introduction, language)} />
      </Helmet>
    </HelmetProvider>
  );
};
