import { HeaderContainer, Logo } from "./styles";

import logo from "../../../assets/logo.svg";

export function Header({ children }: { children: React.ReactNode }) {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo" />
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}>
                {children}
            </div>
        </HeaderContainer>
    );
}
