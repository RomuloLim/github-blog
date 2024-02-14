import { ReactNode } from "react";
import { CardHeaderContainer, } from "./styles";

export function DetailCardHeader({ children }: { children: ReactNode }) {
    return (
        <CardHeaderContainer>
            {children}
        </CardHeaderContainer>
    )
}