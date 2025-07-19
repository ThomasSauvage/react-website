import { Grid } from "@chakra-ui/react";

import { HashRouter } from "react-router-dom";
import packageJson from "../package.json";
import { NavBar } from "./pages/NavBar";
import { LanguageContext, languages, type Language } from "./utils/Language";
import { DynamicHeaders } from "./pages/DynamicHeaders";
import { Routing } from "./pages/Routing";
import { useContext, useEffect } from "react";

const App = () => {
  console.log(` -> Welcome to my website, version ${packageJson.version}`);

  const { language, updateLanguageRouteChange } = useContext(LanguageContext);

  useEffect(() => {
    const langInPath = window.location.pathname.slice(1);
    if (langInPath === "" || !languages.includes(langInPath as Language)) {
      // Redirect to the homepage with the default language
      const navigatorLang = navigator.language.toLowerCase().includes("fr")
        ? "fr"
        : "en";

      window.history.replaceState(null, "", `/${navigatorLang}`);
      return;
    }

    if (langInPath !== language) {
      updateLanguageRouteChange(langInPath as Language);
      return;
    }
  }, []);

  return (
    <HashRouter>
      <DynamicHeaders />
      <Grid
        marginLeft={{ base: 0, lg: "10em" }}
        marginRight={{ base: 0, lg: "10em" }}
        marginBottom="15em"
      >
        <NavBar />
        <Routing />
      </Grid>
    </HashRouter>
  );
};

export default App;
