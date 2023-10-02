import { Accordion, Grid } from "@chakra-ui/react";
import { Academic } from "./Academic";
import { Experiences } from "./Experiences";
import { Intro } from "./Intro";
import { Print } from "./Print";
import { Skills } from "./Skills";

/** Page: Home */
export const Home = () => {
  return (
    <Grid alignContent="center" gap="3em">
      <Print />
      <Intro />
      <Academic />

      <Accordion>
        <Skills />
        <Experiences />
      </Accordion>
    </Grid>
  );
};
