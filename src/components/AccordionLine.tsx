import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Heading } from "@chakra-ui/layout";
import { type ReactNode } from "react";

/** A line of the accordion. */
export const AccordionLine = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => (
  <AccordionItem width="auto">
    <Heading>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);
