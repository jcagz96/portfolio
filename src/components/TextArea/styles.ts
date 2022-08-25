import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.header};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.secondaryText};
  display: flex;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.colors.danger};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${(props) => props.theme.colors.text};
      border-color: ${(props) => props.theme.colors.secondaryText};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: ${(props) => props.theme.colors.icon};
      }
    `}
  textarea {
    background: transparent;
    width: 100%;
    height: 100%; 
    box-sizing: border-box;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    resize: none;
    
    &::-webkit-scrollbar{
      display: none;
    }
    
    &::placeholder {
      color: ${(props) => props.theme.colors.secondaryText};
    }

    ${(props) =>
    props.isFilled &&
    css`
        color: ${(props) => props.theme.colors.secondaryText};
    `}
    
  }

  
  > svg {
    margin-right: 16px;
    margin-bottom: 70px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  color: ${(props) => props.theme.colors.danger};
  span {
    background: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.text};
    &::before {
      border-color: ${(props) => props.theme.colors.danger} transparent;
    }
  }
`;