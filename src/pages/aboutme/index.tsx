import Link from "next/link";
import { NextPage } from "next/types";
import styled from 'styled-components';
import Image from 'next/image';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const AboutMe: NextPage = () => {

  return (
    <>
      <Container id="aboutme">

        <AboutMeContainer>
          <h1>João<span> Garcez</span></h1>
          <p>Atualmente sou software developer na Accenture, trabalho na área de desenvolvimento web. Trabalho essencialmente com Java, Spring, Javascript, HTML, CSS para desenvolver aplicações web. Em projetos pessoais trabalho com React, Nodejs e Typescript. Também tenho experiência na área de desenvolvimento Mobile, aprendi React Native e Flutter e desde então tenho desenvolvido algumas aplicações mobile, como extensão das minhas aplicações web</p>
          <div>

            <Link href="https://www.facebook.com/joao.garcez.12/">
              <a>
                <span>
                  <FaFacebookSquare />
                </span>
                Facebook
              </a>
            </Link>
            <Link href="https://www.instagram.com/joaogarcez8/">
              <a>
                <span>
                  <FaInstagram />
                </span>
                Instagram
              </a>
            </Link>
            <Link href="https://twitter.com/JoaoGarcez11">
              <a>
                <span>
                  <FaTwitter />
                </span>
                Twitter
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/joaogarcez/">
              <a>
                <span>
                  <FaLinkedin />
                </span>
                Linkedin
              </a>
            </Link>
            <Link href="https://github.com/jcagz96">
              <a>
                <span>
                  <FaGithub />
                </span>
                GitHub
              </a>
            </Link>
          </div>
        </AboutMeContainer>
        <ImageContainer>
          <Image
            className="image"
            src="/camada1.png"
            alt="joao garcez"
            width={450}
            height={600}
          />
        </ImageContainer>
      </Container>
    </>
  );
}

export default AboutMe;


export const Container = styled.div`

  display: flex;
  flex:1;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px){
    flex-direction: column-reverse;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: min(50px, 5%);
  padding-right: min(50px, 5%);

  >div{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

  }

  p{
    text-align: justify;
    text-justify: inter-word;
  }

  svg{
    margin-bottom: 1px;
    margin-right:4px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;


