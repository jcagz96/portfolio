import Link from "next/link";
import { NextComponentType, NextPage } from "next/types";
import { useState } from "react";
import {
  Nav,
  Hamburger,
  Logo,
  Menu,
  MenuLink
} from './styles';
import "react-toggle/style.css";
import Toggle from 'react-toggle';
import { useTheme } from "../../hooks/theme";

const Header: NextComponentType = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { theme, switchTheme } = useTheme();

  console.log("theme no header: " + theme);

  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <Logo>
            Garcez
            {/*<span>João</span>*/}
          </Logo>
        </Link>
        <Hamburger isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>
          <span className="first-span" />
          <span className="middle-span" />
          <span className="third-span" />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <Link href="/aboutme" >
            <MenuLink onClick={() => { setIsOpen(!isOpen) }}>
              About Me
            </MenuLink>
          </Link>
          <Link href="/showcase">
            <MenuLink onClick={() => { setIsOpen(!isOpen) }}>
              Showcase
            </MenuLink>
          </Link>
          <Link href="/contact">
            <MenuLink onClick={() => { setIsOpen(!isOpen) }}>
              Contact
            </MenuLink>
          </Link>
          <Toggle
            className="dark-mode-toggle"
            checked={theme === 'dark' ? true : false}
            onChange={switchTheme}
            icons={{ checked: '🔆', unchecked: '🌙' }}
            aria-label="Dark mode toggle"
          />
        </Menu>
      </Nav>
    </>
  );
}

export default Header;