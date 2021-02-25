import styled from "styled-components";
import styledMap from "styled-map";

type DataProps = {
}

export const MessageContainer = styled.div<DataProps>`
    display: flex;
    margin-bottom: ${({theme}) => theme.spacing.sm};
`;

export const MessageContent = styled.div<DataProps>`
    max-width: 49%;
    border-radius: .375rem;
    padding: ${({theme}) => theme.spacing.sm};
    background: ${({theme}) => theme.colors.lightBlue};
`;