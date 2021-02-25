import styled from "styled-components";

type DataProps = {
}

export const ChatAsideStyles = styled.div<DataProps>`
    overflow-y: auto;
    max-height: 800px;
    grid-column: span 4;
`;

export const ChatRow = styled.div<DataProps>`
    border: 1px solid transparent;
    box-shadow: ${({theme}) => theme.boxShadow};
    background: ${({theme}) => theme.colors.white};
    &:hover {
        box-shadow: ${({theme}) => theme.boxShadowColor};
        border: 1px solid ${({theme}) => theme.colors.purple};
    };
    &:not(:first-child) {
        margin-top: ${({theme}) => theme.spacing.md};
    }
`;


export const ChatItem = styled.div`
    cursor: pointer;
    padding: ${({theme}) => theme.spacing.md};
`