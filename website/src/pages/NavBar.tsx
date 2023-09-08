import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "../App";

export const NavBar = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      margin="3em"
      padding="1em"
      justify="space-around"
      textAlign="center"
      backgroundColor="accent"
      borderRadius="1em"
    >
      <Heading color="white" margin="0.3em">
        Thomas Sauvage
      </Heading>

      <Flex
        flexDirection="row"
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="center"
        gap="1em"
      >
        {routes.map(
          ({ name, path }) =>
            name && (
              <NavLink to={path} key={path}>
                <Button
                  marginRight="1em"
                  marginLeft="1em"
                  backgroundColor="veryAccent"
                  color="white"
                  _hover={{ color: "accent" }}
                >
                  {name}
                </Button>
              </NavLink>
            )
        )}
      </Flex>
    </Stack>
  );
};
