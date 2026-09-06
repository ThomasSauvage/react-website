import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./index.css";
import App from "./App.tsx";
import { LanguageProvider } from "./utils/Language";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const bgDarker = "#eeedf7";
const accent = "#8783d1";
const veryAccent = "#6a58a5";
const ink = "#29243d";
const surface = "rgba(255, 255, 255, 0.68)";
const border = "rgba(255, 255, 255, 0.72)";

const theme = extendTheme({
  fonts: {
    body: "'Montserrat', system-ui, sans-serif",
    heading: "'Montserrat', system-ui, sans-serif",
  },
  colors: {
    bgDarker,
    accent,
    veryAccent,
    ink,
    surface,
    border,
  },
  styles: {
    global: {
      body: {
        color: "ink",
        backgroundColor: "bgDarker",
      },
      "::selection": {
        color: "white",
        backgroundColor: "accent",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        transition: "background-color 180ms ease, box-shadow 180ms ease",
        _hover: {
          backgroundColor: "rgba(135, 131, 209, 0.85) !important",
          boxShadow: "0 8px 18px rgba(106, 88, 165, 0.18)",
        },
        _focusVisible: {
          boxShadow: "0 0 0 3px rgba(135, 131, 209, 0.4)",
        },
      },
    },
    GridItem: {
      variants: {
        smooth: {
          backgroundColor: surface,
          border: `1px solid ${border}`,
          borderRadius: "0.65em",
        },
      },
    },
  },
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </LanguageProvider>
    </ChakraProvider>
  </StrictMode>,
);
