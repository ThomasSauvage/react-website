import { Grid, Link } from "@chakra-ui/react";
import { Section } from "../components/Section";

export const Contact = () => {
  return (
    <Grid gap="3em">
      <Section title="Mes coordonnées">
        N'hésitez pas à me contacter par mail:{" "}
        <Link href="mailto:thomas.sauva@gmail.com" color="accent" isExternal>
          thomas.sauva@gmail.com
        </Link>
      </Section>
      <Section title="Mes réseaux sociaux">
        Vous pouvez aussi m'ajouter sur linkedin en cliquant sur ce lien:{" "}
        <Link
          href="https://www.linkedin.com/in/sauvagethomas/"
          color="accent"
          isExternal
        >
          in/sauvagethomas
        </Link>
      </Section>
    </Grid>
  );
};
