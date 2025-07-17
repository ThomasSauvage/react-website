import { Flex, Heading, Text } from "@chakra-ui/react";

/** Page: Not found */
const NotFoundPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin="3em">
      <Heading marginTop="2em" marginBottom="0.5em">
        {" "}
        404 !{" "}
      </Heading>
      <Text> The requested page was not found </Text>
    </Flex>
  );
};

export default NotFoundPage;
