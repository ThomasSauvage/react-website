import { ListIcon, ListItem, ListItemProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiChevronRightCircle } from "react-icons/bi";

interface LItemProps extends ListItemProps {
  children: ReactNode;
}

export const LItem = ({ children, ...props }: LItemProps) => (
  <ListItem {...props}>
    <ListIcon as={BiChevronRightCircle} color="veryAccent" />
    {children}
  </ListItem>
);
