import {
  Card,
  CardBody,
  CardHeader,
  type CardProps,
  Heading,
} from "@chakra-ui/react";
import { type ReactNode, useContext } from "react";
import { LanguageContext, type TextLanguage, getText } from "../utils/Language";

type SectionProps = Omit<CardProps, "title"> & {
  title?: TextLanguage;
  children: ReactNode;
};

/** A styled card */
export const Section = ({ title, children, ...props }: SectionProps) => {
  const { language } = useContext(LanguageContext);
  const stringTitle = getText(title ?? { fr: "", en: "" }, language);

  return (
    <Card
      margin="1em"
      backgroundColor="surface"
      border="1px solid"
      borderColor="border"
      borderRadius="0.65em"
      boxShadow="0 18px 45px rgba(106, 88, 165, 0.1)"
      {...props}
    >
      {title && (
        <CardHeader>
          <Heading color="veryAccent" size={{ base: "md", md: "lg" }}>
            {stringTitle}
          </Heading>
        </CardHeader>
      )}

      <CardBody>{children}</CardBody>
    </Card>
  );
};
