import { Accordion, Grid, GridItem } from "@chakra-ui/react";
import { Academic } from "./Academic";
import { Experiences } from "./Experiences";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { Volunteering } from "./Volunteering";

/** Page: Home */
const Home = () => {
  return (
    <Accordion allowToggle>
      <Grid
        templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
        alignItems="center"
      >
        <Intro />
        <Academic />
        <Experiences />
        <Volunteering />

        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <Skills />
        </GridItem>
      </Grid>
    </Accordion>
  );
};

export default Home;
