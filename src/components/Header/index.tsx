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
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

const Header: NextComponentType = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { theme, switchTheme } = useTheme();

  function download() {
    const URL = '/CV2022EN_JoaoGarcez.pdf'
    if (typeof window !== "undefined") {
      //window.location.href = URL
      window.open(URL, '_blank');
    }
  }

  //console.log("theme no header: " + theme);

  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <Logo>
            Início
            {/*<span>João</span>*/}
          </Logo>
        </Link>
        <Hamburger isOpen={isOpen} onClick={() => { setIsOpen(!isOpen) }}>

          {isOpen ? <CgClose style={{ marginRight: -1 }} size={24} /> : <GiHamburgerMenu size={22} />}

        </Hamburger>
        <Menu isOpen={isOpen}>
          <Link href="/aboutme" >
            <MenuLink onClick={() => { setIsOpen(!isOpen) }}>
              Sobre mim
            </MenuLink>
          </Link>
          <Link href="/showcase">
            <MenuLink onClick={() => { setIsOpen(!isOpen) }}>
              Projetos
            </MenuLink>
          </Link>
          <Link href="/contact">
            <MenuLink onClick={() => { setIsOpen(!isOpen) }}>
              Contacto
            </MenuLink>
          </Link>
          {/* <MenuLink>
            <a href='CV2022EN_JoaoGarcez.pdf' download>Download CV</a>
          </MenuLink> */}
          <button className="downloadcv" onClick={download}>
            Download CV
          </button>

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