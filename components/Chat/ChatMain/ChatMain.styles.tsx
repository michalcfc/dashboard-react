import styled from "styled-components";
import styledMap from "styled-map";

type DataProps = {
}

export const ChatMainStyle = styled.div<DataProps>`
    width: 100%;
    display: flex;
    grid-column: span 8;
    flex-direction: column;
    background: ${({theme}) => theme.colors.white};
`;
