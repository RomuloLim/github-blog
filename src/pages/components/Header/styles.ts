import styled from "styled-components";

import cover from "../../../assets/cover.svg";

export const HeaderContainer = styled.header`
  background: url(${cover}) no-repeat;
  background-size: cover;
  padding: 6.4rem 0 13.4rem;
`;

export const HeaderChildren = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  margin: 0 auto;
`;
