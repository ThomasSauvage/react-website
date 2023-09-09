import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { routes } from "../App";
export const NavBar = () => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
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
        display={{ base: "none", lg: "flex" }}
      >
        {routes.map(
          ({ name, path, logo }) =>
            name && (
              <NavLink to={path} key={path}>
                <Button
                  marginRight="1em"
                  marginLeft="1em"
                  backgroundColor="veryAccent"
                  color="white"
                  _hover={{ color: "accent" }}
                  leftIcon={logo}
                >
                  {name}
                </Button>
              </NavLink>
            )
        )}
      </Flex>
      <Box display={{ base: "block", lg: "none" }}>
        <Menu matchWidth>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            color="white"
            variant="outline"
            width="100%"
          />

          <MenuList alignItems="center">
            {routes.map(
              ({ name, path, logo }) =>
                name && (
                  <Center>
                    <NavLink to={path} key={path}>
                      <MenuItem icon={logo}>{name}</MenuItem>
                    </NavLink>
                  </Center>
                )
            )}
          </MenuList>
        </Menu>
      </Box>
    </Stack>
  );
};
