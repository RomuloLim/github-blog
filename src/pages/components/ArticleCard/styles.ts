import styled from "styled-components";

export const CardContainer = styled.a`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme.post};

    &:hover {
        box-shadow: 0 0 8px 0 ${props => props.theme.shadow};
        transform: scale(1.02);

        transition: 0.3s;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        h1 {
            font-size: ${props => props.theme.fonts.title.md};
            color: ${props => props.theme.title};
            width: 80%;
        }

        span {
            font-size: ${props => props.theme.fonts.text.sm};
            color: ${props => props.theme.span};
        }
    }

    p {
        font-size: ${props => props.theme.fonts.text.md};
        color: ${props => props.theme.text};

        line-height: 2rem;

        content: "...";
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`