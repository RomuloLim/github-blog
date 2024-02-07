import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 0 20%;
`

export const ProfileContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: -10rem;
`

export const Separator = styled.div`
    margin-top: 4.5rem;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        justify-content: space-between;
        
        h3 {
            font-size: ${ props => props.theme.fonts.title.sm };
        }

        span {
            font-size: ${ props => props.theme.fonts.text.sm };
            color: ${ props => props.theme.span};
        }
    }
`

export const ArticlesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
`