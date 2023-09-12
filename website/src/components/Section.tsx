import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { TextLanguage, useTextLanguage } from "../utils/Language";

type SectionProps = Omit<CardProps, "title"> & {
  title?: TextLanguage;
  children: ReactNode;
};
export const Section = ({ title, children, ...props }: SectionProps) => {
  const stringTitle = useTextLanguage(title ?? { fr: "", en: "" });

  return (
    <Card margin="1em" {...props}>
      {title && (
        <CardHeader>
          <Heading color="veryAccent">{stringTitle}</Heading>
        </CardHeader>
      )}

      <CardBody>{children}</CardBody>
    </Card>
  );
};
