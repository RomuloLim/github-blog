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

export const ImageContent = styled.img`
width: 10rem;
height: 10rem;
border-radius: 10%;
`
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 1rem;
height: 100%;
`