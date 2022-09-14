import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled: boolean;
}

export const PrevButtonCustom = styled.button`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;

  left: 27px;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  svg{
    width: 100%;
    height: 100%;
  }
`;

export const NextButtonCustom = styled.button`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;

  right: 27px;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  svg{
    width: 100%;
    height: 100%;
  }
`;