import { CardContainer } from "./styles";

export function HeaderCard({ children }: { children: React.ReactNode }) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}