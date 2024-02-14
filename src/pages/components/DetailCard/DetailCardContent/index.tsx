import { ReactNode } from "react";

type DetailCardContentProps = {
    children: ReactNode;
}

export function DetailCardContent({ children }: DetailCardContentProps) {
    return (
        <>
            {children}
        </>
    );
}