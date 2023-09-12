import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps extends CardProps {
  title?: string;
  children: ReactNode;
}
export const Section = ({ title, children, ...props }: SectionProps) => (
  <Card margin="1em" {...props}>
    {title && (
      <CardHeader>
        <Heading color="veryAccent">{title}</Heading>
      </CardHeader>
    )}

    <CardBody>{children}</CardBody>
  </Card>
);
