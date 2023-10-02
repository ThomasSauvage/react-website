import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../App";
import { LanguageSelector, TextL } from "../utils/Language";

/** The navigation bar, above the pages
 *
 * Uses the routes from App.tsx
 * If the name of a route is null, the route is not displayed in the NavBar
 */
export const NavBar = () => {
  const { pathname: actualPath } = useLocation();

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
                  borderWidth="2px"
                  borderColor={actualPath === path ? "white" : "veryAccent"}
                  color="white"
                  _hover={{ color: "accent" }}
                  leftIcon={<Icon as={logo} />}
                >
                  <TextL>{name}</TextL>
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
            _hover={{ background: "none" }}
            _expanded={{ background: "veryAccent" }}
          />

          <MenuList alignItems="center">
            {routes.map(
              ({ name, path, logo }) =>
                name && (
                  <Center key={path}>
                    <NavLink to={path}>
                      <MenuItem
                        height="3em"
                        background={actualPath === path ? "accent" : ""}
                        borderRadius="1em"
                      >
                        <Icon
                          as={logo}
                          color={actualPath === path ? "white" : "black"}
                        />
                        <TextL
                          marginLeft="1em"
                          fontSize="lg"
                          color={actualPath === path ? "white" : "black"}
                        >
                          {name}
                        </TextL>
                      </MenuItem>
                    </NavLink>
                  </Center>
                )
            )}
          </MenuList>
        </Menu>
      </Box>

      <Center marginTop="0.5em">
        <LanguageSelector />
      </Center>
    </Stack>
  );
};
