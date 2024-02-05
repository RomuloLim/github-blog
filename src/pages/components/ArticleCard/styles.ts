import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme.post};
`