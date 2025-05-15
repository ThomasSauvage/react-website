import { Center, Grid, Spinner } from "@chakra-ui/react";
import React, { lazy, Suspense, type LazyExoticComponent } from "react";

import { type IconType } from "react-icons";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePicture,
} from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { HashRouter, Route, Routes } from "react-router-dom";
import packageJson from "../package.json";
import { NavBar } from "./pages/NavBar";
import { type TextLanguage } from "./utils/Language";
import Home from "./pages/Home/Home";

/** A route of the app */
interface RoutePath {
  path: string;
  name: TextLanguage | null;
  logo?: IconType;
  Element:
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>;
}

/** List of all routes for this app,
 *  with logo and name for the NavBar
 *
 *  If the name is null, the route is not displayed in the NavBar
 */
export const routes: RoutePath[] = [
  {
    path: "/",
    name: { fr: "Accueil", en: "Home" },
    logo: AiOutlineHome,
    Element: Home, // No lazy loading for the home page, for faster first load
  },
  {
    path: "/projects",
    name: { fr: "Projets", en: "Projects" },
    logo: MdOutlineScience,
    Element: lazy(() => import("./pages/Projects")),
  },
  {
    path: "/pictures",
    name: { fr: "Photos", en: "Pictures" },
    logo: AiOutlinePicture,
    Element: lazy(() => import("./pages/Pictures")),
  },
  {
    path: "/contact",
    name: { fr: "Me contacter", en: "Contact me" },
    logo: AiOutlinePhone,
    Element: lazy(() => import("./pages/Contact")),
  },
  {
    path: "*",
    name: null,
    Element: lazy(() => import("./pages/NotFoundPage")),
  },
];

const App = () => {
  // HashRouter replaces BrowserRouter to allow the app to be hosted on GitHub Pages

  console.log(` -> Welcome to my website, version ${packageJson.version}`);

  return (
    <HashRouter>
      <Grid
        marginLeft={{ base: 0, lg: "10em" }}
        marginRight={{ base: 0, lg: "10em" }}
        marginBottom="15em"
      >
        <NavBar />
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route
              path={path}
              element={
                <Suspense
                  fallback={
                    <Center marginTop="30vh">
                      <Spinner size="xl" />
                    </Center>
                  }
                >
                  <Element />
                </Suspense>
              }
              key={path}
            />
          ))}
        </Routes>
      </Grid>
    </HashRouter>
  );
};

export default App;
