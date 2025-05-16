import { Heading, HStack, Text } from "@chakra-ui/layout";
import { type ReactNode } from "react";
import { AccordionLine } from "./AccordionLine";
import type { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

/** A line of the accordion, with a text title. */
export const AccordionLineTextTitle = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: IconType;
  children: ReactNode;
}) => (
  <AccordionLine
    title={
      <Heading size="sm" color="veryAccent" marginRight="1em">
        <HStack spacing="0.5em" alignItems="center">
          {icon && <Icon as={icon} marginRight="0.5em" />}
          <Text>{title}</Text>
        </HStack>
      </Heading>
    }
  >
    {children}
  </AccordionLine>
);
