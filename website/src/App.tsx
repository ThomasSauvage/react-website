import { Grid } from "@chakra-ui/react";
import React from "react";

import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePicture,
} from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NavBar } from "./pages/NavBar";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Pictures } from "./pages/Pictures";
import { Projects } from "./pages/Projects";

interface RoutePath {
  path: string;
  name: string | null;
  logo?: React.ReactElement;
  element: React.ReactNode;
}

export const routes: RoutePath[] = [
  {
    path: "/",
    name: "Accueil",
    logo: <AiOutlineHome />,
    element: <Home />,
  },
  {
    path: "/projects",
    name: "Projets",
    logo: <MdOutlineScience />,
    element: <Projects />,
  },
  {
    path: "/pictures",
    name: "Photos",
    logo: <AiOutlinePicture />,
    element: <Pictures />,
  },
  {
    path: "/contact",
    name: "Me contacter",
    logo: <AiOutlinePhone />,
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
