import styled from "styled-components";
import styledMap from "styled-map";

type DataProps = {
}

export const MessageInputContainer = styled.div`
    display: flex;
    justify-content: space-between
`

export const MessageInputStyle = styled.input<DataProps>`
    flex: 1 0 0;
`;
