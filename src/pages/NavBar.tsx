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
import { useEffect, useState } from "react";
import { routes } from "./Routing";
import { LanguageSelector, TextL } from "../utils/Language";

/** The navigation bar, above the pages
 *
 * Uses the routes from App.tsx
 * If the name of a route is null, the route is not displayed in the NavBar
 */
export const NavBar = () => {
  const { pathname: actualPath } = useLocation();
  const [isMobileCompact, setIsMobileCompact] = useState(false);

  useEffect(() => {
    const updateCompactState = () => {
      const scrollY = window.scrollY;

      setIsMobileCompact((currentlyCompact) => {
        if (currentlyCompact) return scrollY >= 10;
        return scrollY > 200;
      });
    };

    updateCompactState();
    window.addEventListener("scroll", updateCompactState, { passive: true });

    return () => window.removeEventListener("scroll", updateCompactState);
  }, []);

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
      margin="1em"
      padding="1em"
      justify="space-around"
      alignItems="center"
      textAlign="center"
      position="sticky"
      top="1em"
      zIndex={10}
      isolation="isolate"
      backgroundColor="transparent"
      border="1px solid rgba(255, 255, 255, 0.35)"
      borderRadius="0.65em"
      boxShadow="0 18px 45px rgba(76, 61, 126, 0.22)"
      gap={{ base: isMobileCompact ? 0 : "0.5em", lg: "2em" }}
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: -1,
        borderRadius: "inherit",
        backgroundColor: "rgba(106, 88, 165, 0.5)",
        backdropFilter: "blur(18px) saturate(125%)",
        pointerEvents: "none",
      }}
    >
      <Heading
        color="white"
        margin={{ base: isMobileCompact ? 0 : "0.3em", lg: "0.3em" }}
        as="h1"
        height={{ base: isMobileCompact ? 0 : "auto", lg: "auto" }}
        opacity={{ base: isMobileCompact ? 0 : 1, lg: 1 }}
        transition="opacity 18ms ease, height 220ms ease, margin 220ms ease, transform 220ms ease"
      >
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
                backgroundColor="rgba(106, 88, 165, 0.32)"
                borderWidth="1px"
                borderColor={currentPathIs(path) ? "white" : "veryAccent"}
                color="white"
                _hover={{
                  backgroundColor: "rgba(106, 88, 165, 0.65)",
                  color: "white",
                }}
                leftIcon={<Icon as={logo} />}
              >
                <TextL>{name}</TextL>
              </Button>
            ),
        )}
      </Flex>
      <Center display={{ base: "none", lg: "flex" }} marginLeft="auto">
        <LanguageSelector />
      </Center>
      <Flex
        display={{ base: "flex", lg: "none" }}
        width="100%"
        alignItems="center"
        gap="0.5em"
      >
        <Box width="100%" flex={1} minWidth={0}>
          <Menu matchWidth>
            <MenuButton
              as={IconButton}
              aria-label="Open navigation menu"
              icon={<AiOutlineMenu />}
              color="white"
              variant="outline"
              width="100%"
              height="2.5em"
              borderRadius="0.45em"
              borderColor="rgba(255, 255, 255, 0.55)"
              _hover={{
                background: "rgba(255, 255, 255, 0.12)",
                borderColor: "white",
              }}
              _focusVisible={{
                borderColor: "white",
                boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.25)",
              }}
              _expanded={{
                backgroundColor: "rgba(106, 88, 165, 0.32)",
                color: "white",
                borderColor: "white",
              }}
            />

            <MenuList
              alignItems="stretch"
              padding="0.5em"
              borderRadius="0.55em"
              borderColor="rgba(255, 255, 255, 0.35)"
              boxShadow="0 18px 40px rgba(76, 61, 126, 0.2)"
              backgroundColor="rgba(106, 88, 165, 0.2)"
              backdropFilter="blur(18px) saturate(125%)"
            >
              {routes.map(
                ({ name, path, logo }) =>
                  name && (
                    <MenuItem
                      key={path}
                      onClick={() => {
                        changePath(path);
                      }}
                      height="3.25em"
                      width="100%"
                      margin="0.15em 0"
                      padding="0 1em"
                      backgroundColor="rgba(106, 88, 165, 0.4)"
                      color="white"
                      borderWidth="1px"
                      borderColor={currentPathIs(path) ? "white" : "veryAccent"}
                      _hover={{
                        backgroundColor: "rgba(106, 88, 165, 0.65)",
                        color: "white",
                      }}
                      borderRadius="0.35em"
                      justifyContent="flex-start"
                    >
                      <Icon as={logo} boxSize="1.2em" />
                      <TextL marginLeft="0.85em" fontSize="md" fontWeight="600">
                        {name}
                      </TextL>
                    </MenuItem>
                  ),
              )}
            </MenuList>
          </Menu>
        </Box>

        <Center
          marginTop="0"
          display="flex"
          width="auto"
          maxWidth="10em"
          flexShrink={0}
          opacity={1}
          overflow="hidden"
          pointerEvents="auto"
        >
          <LanguageSelector />
        </Center>
      </Flex>
    </Stack>
  );
};
