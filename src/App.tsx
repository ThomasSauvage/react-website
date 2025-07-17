import { Center, Grid, Spinner } from "@chakra-ui/react";

import { HashRouter, Route, Routes } from "react-router-dom";
import packageJson from "../package.json";
import { NavBar } from "./pages/NavBar";
import { languages } from "./utils/Language";
import { DynamicHeaders } from "./pages/DynamicHeaders";
import { Routing } from "./pages/Routing";
import { lazy, Suspense } from "react";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  console.log(` -> Welcome to my website, version ${packageJson.version}`);

  return (
    <HashRouter>
      <DynamicHeaders />
      <Grid
        marginLeft={{ base: 0, lg: "10em" }}
        marginRight={{ base: 0, lg: "10em" }}
        marginBottom="15em"
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Routing language={null} />} />
          {languages.map((lang) => (
            <Route
              key={lang}
              path={`/${lang}/*`}
              element={<Routing language={lang} />}
            />
          ))}
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <Center marginTop="30vh">
                    <Spinner size="xl" />
                  </Center>
                }
              >
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </Grid>
    </HashRouter>
  );
};

export default App;
