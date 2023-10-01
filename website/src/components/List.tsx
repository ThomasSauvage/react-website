import { ListIcon, ListItem, ListItemProps } from "@chakra-ui/react";
import { BiChevronRightCircle } from "react-icons/bi";
import { TextL, TextLanguage } from "../utils/Language";

type LItemLProps = Omit<ListItemProps, "children"> & {
  children: TextLanguage;
  iconColor?: string;
};

export const LItemL = ({
  children,
  iconColor = "veryAccent",
  ...props
}: LItemLProps) => (
  <ListItem {...props}>
    <ListIcon as={BiChevronRightCircle} color={iconColor} />
    <TextL as="span">{children}</TextL>
  </ListItem>
);

export const LItem = ({ children, ...props }: ListItemProps) => (
  <ListItem {...props}>
    <ListIcon as={BiChevronRightCircle} color="veryAccent" />
    {children}
  </ListItem>
);
