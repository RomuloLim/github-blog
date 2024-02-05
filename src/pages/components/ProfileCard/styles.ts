import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.profile};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.2rem;
  padding: 2.5rem ;
  border-radius: 0.8rem;
  `

  export const TitleRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
  `

export const TitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

  export const ProfileImage = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 10%;
  `

  export const Link = styled.a`
    display: flex;
    gap: 0.3rem;
    font-weight: bold;
  `

  export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    height: 100%;
  `

  export const ProfileFooter = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem
  `

  export const IconInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `