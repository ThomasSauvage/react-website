import { Grid } from "@chakra-ui/react";
import React from "react";

import { IconType } from "react-icons";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePicture,
} from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./pages/NavBar";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Pictures } from "./pages/Pictures";
import { Projects } from "./pages/Projects";
import { TextLanguage } from "./utils/Language";

interface RoutePath {
  path: string;
  name: TextLanguage | null;
  logo?: IconType;
  element: React.ReactNode;
}

export const routes: RoutePath[] = [
  {
    path: "/",
    name: { fr: "Accueil", en: "Home" },
    logo: AiOutlineHome,
    element: <Home />,
  },
  {
    path: "/projects",
    name: { fr: "Projets", en: "Projects" },
    logo: MdOutlineScience,
    element: <Projects />,
  },
  {
    path: "/pictures",
    name: { fr: "Photos", en: "Pictures" },
    logo: AiOutlinePicture,
    element: <Pictures />,
  },
  {
    path: "/contact",
    name: { fr: "Me contacter", en: "Contact me" },
    logo: AiOutlinePhone,
    element: <Contact />,
  },
  {
    path: "*",
    name: null,
    element: <NotFoundPage />,
  },
];

const App = () => {
  // HashRouter replaces BrowserRouter to allow the app to be hosted on GitHub Pages
  return (
    <HashRouter>
      <Grid
        marginLeft={{ base: 0, lg: "10em" }}
        marginRight={{ base: 0, lg: "10em" }}
        marginBottom="15em"
      >
        <NavBar />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Grid>
    </HashRouter>
  );
};

export default App;
