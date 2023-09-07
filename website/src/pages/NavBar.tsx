import { Button, Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { routes } from "../App";

export const NavBar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      margin="3em"
      padding="1em"
      backgroundColor="accent"
      borderRadius="1em"
    >
      <Heading color="white" margin="0.3em">
        Thomas Sauvage
      </Heading>
      {routes.map(
        ({ name, path }) =>
          name && (
            <NavLink to={path}>
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
  );
};
