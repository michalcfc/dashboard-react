import styled from "styled-components";

type DataProps = {
}

export const MessageListStyle = styled.div<DataProps>`
    flex: 1 1 0%;
    padding: ${({theme}) => theme.spacing.md};
`;
