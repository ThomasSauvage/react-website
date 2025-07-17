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
import { routes } from "./Routing";
import { LanguageContext, LanguageSelector, TextL } from "../utils/Language";
import { useContext } from "react";

/** The navigation bar, above the pages
 *
 * Uses the routes from App.tsx
 * If the name of a route is null, the route is not displayed in the NavBar
 */
export const NavBar = () => {
  const { pathname: actualPath } = useLocation();
  const { language } = useContext(LanguageContext);

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      margin={{ base: "1em", lg: "3em" }}
      padding="1em"
      justify="space-around"
      textAlign="center"
      backgroundColor="accent"
      borderRadius="1em"
    >
      <Heading color="white" margin="0.3em" as="h1">
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
              <NavLink
                to={`/${language}${path !== "/" ? path : ""}`}
                key={path}
              >
                <Button
                  marginRight="1em"
                  marginLeft="1em"
                  backgroundColor="veryAccent"
                  borderWidth="2px"
                  borderColor={
                    actualPath === `/${language}${path}` ||
                    actualPath === `/${language}${path}/` ||
                    (path === "/" && actualPath === `/${language}`)
                      ? "white"
                      : "veryAccent"
                  }
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

          <MenuList alignItems="center" padding="0 2em 0 2em">
            {routes.map(
              ({ name, path, logo }) =>
                name && (
                  <NavLink key={path} to={path} style={{ width: "100%" }}>
                    <MenuItem
                      height="3em"
                      margin={"0.5em 0 0.5em 0"}
                      background={actualPath === path ? "accent" : ""}
                      color={actualPath === path ? "white" : "black"}
                      _hover={{
                        background: "veryAccent",
                        color: "white",
                      }}
                      borderRadius="1em"
                      justifyContent="center"
                    >
                      <Icon as={logo} />
                      <TextL marginLeft="1em" fontSize="lg">
                        {name}
                      </TextL>
                    </MenuItem>
                  </NavLink>
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
