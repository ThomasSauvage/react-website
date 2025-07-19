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
import { useLocation } from "react-router-dom";
import { routes } from "./Routing";
import { LanguageSelector, TextL } from "../utils/Language";

/** The navigation bar, above the pages
 *
 * Uses the routes from App.tsx
 * If the name of a route is null, the route is not displayed in the NavBar
 */
export const NavBar = () => {
  const { pathname: actualPath } = useLocation();

  const getPath = (path: string) => `${path !== "/" ? path : ""}`;

  const changePath = (path: string) => {
    window.location.hash = getPath(path);
    if (getPath(path) === "") {
      // Just to remove the trailing hash
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const currentPathIs = (path: string) =>
    actualPath === getPath(path) ||
    actualPath === `${getPath(path)}/` ||
    (path === "/" && actualPath === `/`);

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
              <Button
                key={path}
                onClick={() => {
                  changePath(path);
                }}
                marginRight="1em"
                marginLeft="1em"
                backgroundColor="veryAccent"
                borderWidth="2px"
                borderColor={currentPathIs(path) ? "white" : "veryAccent"}
                color="white"
                _hover={{ color: "accent" }}
                leftIcon={<Icon as={logo} />}
              >
                <TextL>{name}</TextL>
              </Button>
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
                  <MenuItem
                    key={path}
                    onClick={() => {
                      changePath(path);
                    }}
                    height="3em"
                    width="100%"
                    margin={"0.5em 0 0.5em 0"}
                    background={currentPathIs(path) ? "accent" : ""}
                    color={currentPathIs(path) ? "white" : "black"}
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
