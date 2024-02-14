import { ReactNode } from "react";
import { Card, CardContainer, ImageContent } from "./styles";

type HeaderCardProps = {
    children: ReactNode;
    image?: string;
}

export function DetailCardRoot({ children, image }: HeaderCardProps) {
    return (
        <>
            <Card>
                {image && <ImageContent src={image} alt="" />}
                <CardContainer>
                    {children}
                </CardContainer>
            </Card>
        </>
    );
}