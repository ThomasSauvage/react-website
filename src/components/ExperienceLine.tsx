import { HStack, Image, VStack, Heading } from "@chakra-ui/react";
import { useContext, type ReactNode } from "react";
import {
  getText,
  LanguageContext,
  TextL,
  type TextLanguage,
} from "../utils/Language";
import { AccordionLine } from "./AccordionLine";

/** A working experience/volunteering */
export const ExperienceLine = ({
  company,
  jobTitle,
  dates,
  logo,
  children,
}: {
  company: TextLanguage;
  jobTitle: TextLanguage;
  dates: TextLanguage;
  logo: string;
  children: ReactNode;
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <AccordionLine
      title={
        <HStack spacing="1em" alignItems="center">
          <Image
            src={`/logos/${logo}`}
            alt={"Logo of " + getText(company, language)}
            boxSize="4em"
            fit="contain"
          />
          <VStack spacing="0" alignItems="flex-start">
            <Heading size="sm" color="veryAccent" marginRight="1em" as="h3">
              {getText(jobTitle, language)}
            </Heading>
            <TextL>{company}</TextL>
            <TextL fontSize="sm" color="gray.600">
              {dates}
            </TextL>
          </VStack>
        </HStack>
      }
    >
      {children}
    </AccordionLine>
  );
};
