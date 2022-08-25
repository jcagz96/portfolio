import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: number;
  style: object;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #eddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div) <ContainerProps>`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 96%;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  & + div {
    margin-top: 8px;
  }
  background: #ebf8ff;
  color: #3172b7;
  ${(props: ContainerProps) => toastTypeVariations[props.type || 'info']}
  > svg {
    margin: 4px 12px 0 0;
    align-self: center;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;

    svg{
      margin-bottom: 8px;
    }
  }
  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;