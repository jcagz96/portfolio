import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  theme: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => shade(0.3, props.theme.colors.secondaryText)};
  color: ${(props) => props.theme.colors.text};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${(props) => shade(0.5, props.theme.colors.secondaryText)};
  }
`;