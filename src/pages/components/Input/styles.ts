import styled from "styled-components";

export const InputContainer = styled.div`

`

export const InputControl = styled.input`
    width: 100%;
    padding: 1rem 0.75rem;
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.input};
    border-radius: 6px;

    &::placeholder {
        color: ${props => props.theme.label};
    }
`