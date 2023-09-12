import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Heading } from "@chakra-ui/layout";
import { ReactNode } from "react";

export const AccordionLine = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <AccordionItem width="auto">
    <Heading>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <Heading size="sm" color="veryAccent" marginRight="1em">
            {title}
          </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);
