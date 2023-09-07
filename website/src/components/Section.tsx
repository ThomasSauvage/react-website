import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Section = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => (
  <Card>
    {title && (
      <CardHeader>
        <Heading color="veryAccent">{title}</Heading>
      </CardHeader>
    )}

    <CardBody>{children}</CardBody>
  </Card>
);
