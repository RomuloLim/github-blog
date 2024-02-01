import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2.4rem;
  border-radius: 0.8rem;
  width: 50%;
  `

  export const TitleRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  export const ProfileImage = styled.img`
    width: 12rem;
  `

  export const Link = styled.a``
