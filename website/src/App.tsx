import { Grid } from "@chakra-ui/react";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NavBar } from "./pages/NavBar";
import { NotFoundPage } from "./pages/NotFoundPage";

interface RoutePath {
  path: string;
  name: string | null;
  element: React.ReactNode;
}

export const routes: RoutePath[] = [
  {
    path: "/",
    name: "Accueil",
    element: <Home />,
  },
  {
    path: "/projects",
    name: "Projets",
    element: <div>Projets</div>,
  },
  {
    path: "/contact",
    name: "Me contacter",
    element: <Contact />,
  },
  {
    path: "*",
    name: null,
    element: <NotFoundPage />,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Grid marginLeft="10em" marginRight="10em">
        <NavBar />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </Grid>
    </BrowserRouter>
  );
};

export default App;
