import { ListIcon, ListItem, ListItemProps } from "@chakra-ui/react";
import { BiChevronRightCircle } from "react-icons/bi";
import { TextL, TextLanguage } from "../utils/Language";

type LItemLProps = Omit<ListItemProps, "children"> & {
  children: TextLanguage;
};

export const LItemL = ({ children, ...props }: LItemLProps) => (
  <ListItem {...props}>
    <ListIcon as={BiChevronRightCircle} color="veryAccent" />
    <TextL as="span">{children}</TextL>
  </ListItem>
);

export const LItem = ({ children, ...props }: ListItemProps) => (
  <ListItem {...props}>
    <ListIcon as={BiChevronRightCircle} color="veryAccent" />
    {children}
  </ListItem>
);
