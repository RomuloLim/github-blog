import { LinkHTMLAttributes, ReactNode } from "react";
import { LinkContainer } from "./styles";

type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
}

export function Link({ children, ...rest }: LinkProps) {
    return (
        <LinkContainer {...rest}>
            {children}
        </LinkContainer>
    );

}