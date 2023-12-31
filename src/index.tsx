import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./utils/Language";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

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

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </LanguageProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
