import { FooterContainer } from "./styles";

export function DetailCardFooter({ children }: { children: React.ReactNode }) {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    )
}