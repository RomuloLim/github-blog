import { ReactNode } from "react";
import { FooterContainer } from "./styles";

export function DetailCardFooter({ children }: { children: ReactNode }) {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    )
}
