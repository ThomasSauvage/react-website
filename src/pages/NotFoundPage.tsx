import { Flex, Heading, Text } from "@chakra-ui/react";

/** Page: Not found */
const NotFoundPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin="3em">
      <Heading margin="2em"> Introuvable ! </Heading>
      <Text> La page cherchée n'a pas été trouvée </Text>
    </Flex>
  );
};

export default NotFoundPage;
