import { FaBars } from 'react-icons/fa';
import Link from "next/link";
import styled, { css } from 'styled-components';

interface MenuProps {
  isOpen: boolean;
}

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.header};
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  flex-wrap: wrap;
  align-items: center;
  
  position: sticky;
  top: 0;
  height: auto;


  z-index: 2;

  @media (max-width: 768px){
    .dark-mode-toggle{
      margin-top: 6px;
      margin-bottom: 10px;
    }
  }

`;


export const Hamburger = styled.div<MenuProps>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  svg{
    &:hover{
      color: ${(props) => props.theme.colors.secondaryText};
    }
  }

  @media (max-width: 768px){
    display: none;
    flex-direction: column;
    display: flex;
  }
`;

export const MenuLink = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s easi-in;
  font-size: 0.9rem;

  &:hover{
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")}
  }

  .react-toggle-track-check{
    margin-top:12px;
    margin-left: -4px;
  }

  .react-toggle-track-x{
    margin-top:12px;
    margin-right: 4px;
  }
  
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.secondaryText};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span{
    font-weight: 300;
    font-size: 1.3rem;
  }
`;