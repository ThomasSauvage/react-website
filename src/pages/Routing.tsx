import type { Language } from "../utils/Language";
import { Center, Spinner } from "@chakra-ui/react";
import {
  lazy,
  Suspense,
  useContext,
  useEffect,
  type ComponentType,
  type LazyExoticComponent,
} from "react";

import { type IconType } from "react-icons";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePicture,
} from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LanguageContext, type TextLanguage } from "../utils/Language";
import Home from "./Home/Home";

/** A route of the app */
interface RoutePath {
  path: string;
  name: TextLanguage | null;
  logo?: IconType;
  Element: ComponentType | LazyExoticComponent<ComponentType>;
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
    Element: lazy(() => import("./Projects")),
  },
  {
    path: "/pictures",
    name: { fr: "Photos", en: "Pictures" },
    logo: AiOutlinePicture,
    Element: lazy(() => import("./Pictures")),
  },
  {
    path: "/contact",
    name: { fr: "Me contacter", en: "Contact me" },
    logo: AiOutlinePhone,
    Element: lazy(() => import("./Contact")),
  },
  {
    path: "*",
    name: null,
    Element: lazy(() => import("./NotFoundPage")),
  },
];

export const Routing = ({ language }: { language: Language | null }) => {
  const navigate = useNavigate();
  const { updateLanguageRouteChange } = useContext(LanguageContext);

  useEffect(() => {
    if (!language) {
      const navigatorLang = navigator.language.toLowerCase().includes("fr")
        ? "fr"
        : "en";

      // Redirect to the language-specific route
      navigate(`/${navigatorLang}`, { replace: true });
      return;
    }

    // Update the language in the context
    updateLanguageRouteChange(language);
  }, [language]);

  if (!language) {
    return null;
  }

  return (
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
  );
};
