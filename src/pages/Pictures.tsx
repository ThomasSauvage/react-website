import {
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const pictures = [
  "1.png",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

/** A single picture, showed in the picture page */
const OnePicture = ({ name }: { name: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        src={`/pics/small/${name}`}
        height={{ base: "auto", md: "15em" }}
        width={{ base: "90%", md: "auto" }}
        onClick={onOpen}
        borderRadius="0.5em"
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody margin="2em">
            <Center height="90vh">
              <Image
                borderRadius="0.5em"
                key={name}
                src={`/pics/full/${name}`}
                maxHeight="90vh"
                maxWidth="90vw"
                objectFit="cover"
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

/** Page: Pictures */
export const Pictures = () => {
  return (
    <Flex flexWrap="wrap" gap="1em" justifyContent="space-around">
      {pictures.map((name) => (
        <OnePicture name={name} key={name} />
      ))}
    </Flex>
  );
};
