import styled from "styled-components";
import { color } from 'styled-system'

type DataProps = {
  bg: string
}

const bg = color

export const ButtonWrapper = styled.button<DataProps>`
  cursor: pointer;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  font-size: .8rem;
  margin: ${({theme}) => theme.spacing.xs};
  border-radius: .25rem;
  padding: .47rem .75rem;
  border: 1px solid transparent;
  background: ${color}
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    ${bg}
  }
`;