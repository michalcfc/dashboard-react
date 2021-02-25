import styled from "styled-components";
import { space } from "styled-system"

type DataProps = {
  rows?: number
  rowGap?: number
  columns?: string
  gridGap?: string
  columnGap?: number
  columnSpan?: number
  hoverEffect?: boolean
  pointer?: boolean
  mt?: number
  mb?: number
}

export const CardContainer = styled.div<DataProps>`
  ${space}
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 0.4rem;
  flex-direction: column;
  border: 1px solid transparent;
  background: ${({theme}) => theme.background};
  box-shadow: ${({theme}) => theme.boxShadow};
  grid-column: ${({columnSpan}) => columnSpan ? `1 / span ${columnSpan}` : ''};
  &:hover {
    border: ${({theme, hoverEffect}) => hoverEffect && `1px solid ${theme.colors.purple}`};
    box-shadow: ${({theme, hoverEffect}) => hoverEffect && theme.boxShadowColor};
  };
`;

export const CardFigure = styled.figure`
  margin: 0;
  padding: 0;
  position: relative;
  &:before {
   content: "";
   background: linear-gradient(0deg,rgba(0,0,0,.45),rgba(0,0,0,.27));
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   z-index: 10;
  }
`

export const CardImg = styled.img`
 width: 100%;
 height: 180px;
 object-fit: cover;
`

export const CardTitle = styled.div`

`;

export const CardContent = styled.div`
  flex: 1 1 0%;
  margin:  ${({theme}) => theme.spacing.sm};
  padding: ${({theme}) => theme.spacing.sm};
`;

export const CardFooter = styled.div`
  margin: ${({theme}) => theme.spacing.sm};
  padding: ${({theme}) => theme.spacing.sm};
`;