import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LanguageProvider } from "./utils/Language";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const bgDarker = "#e7e7f1";
const accent = "#8783d1";
const veryAccent = "#6a58a5";

const theme = extendTheme({
  fonts: {
    body: "'Montserrat', system-ui, sans-serif",
    heading: "'Montserrat', system-ui, sans-serif",
  },
  colors: {
    bgDarker,
    accent,
    veryAccent,
  },
  components: {
    GridItem: {
      variants: {
        smooth: {
          backgroundColor: "#6a58a5",
          borderRadius: "1em",
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
  </StrictMode>
);
