import styled from "styled-components";
import { lighten } from "polished";

type DataProps = {
  isFixed?: boolean
}

export const AsideWrapper = styled.aside<DataProps>`
  width: 14rem;
  grid-area: asideLeft;
  background:  ${({theme}) => theme.colors.dark};
`;

export const AsideContent = styled.div<DataProps>`
  width: 20rem;
  height: 100vh;
  display: flex;
  grid-area: asideRight;
  flex-direction: column;
  padding: ${({theme}) => theme.spacing.md};
  background: ${({theme}) => theme.colors.white};
`;

export const AsideItems = styled.div<DataProps>`
  flex-grow: 1;
`;

export const AsideItem = styled.div<DataProps>`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  &:hover {
    background: ${({theme}) => lighten(0.1, theme.colors.dark)}
  }
`;
  
  export const StyledLink = styled.a`
  width: 100%;
  padding: ${({theme}) => theme.spacing.md};
  color: ${({theme}) => theme.colors.white};
`