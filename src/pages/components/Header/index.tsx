import { HeaderContainer, Logo, LogoContainer } from "./styles";

import logo from "../../../assets/logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo} alt="logo" />
            </LogoContainer>
        </HeaderContainer>
    );
}
