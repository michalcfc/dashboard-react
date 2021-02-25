import styled from "styled-components";

type DataProps = {
}

export const SettingsWrapper = styled.aside<DataProps>`
  width: 14rem;
  grid-area: asideLeft;
  background:  ${({theme}) => theme.colors.dark};
`;

