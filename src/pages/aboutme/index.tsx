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
          <p>Sempre me interessei por tecnologia e sempre a vi como uma forma de resolver problemas do mundo real. Licenciei-me em Engenharia Informática, atualmente, trabalho como fullstack software developer e conto com três anos de experiência na área da programação. Trabalho com tecnologias como <b>Java</b>, <b>Spring</b>, <b>Javascript</b> e <b>CSS</b>. Fora do trabalho, tenho experiência no desenvolvimento de aplicações web com <b>Reactjs</b>, <b>Nextjs</b>, <b>Nodejs</b> e no desenvolvimento mobile com <b>ReactNative</b> e <b>Flutter</b>. É com criatividade e empenho que me comprometo em todos os projetos em que me envolvo. </p>
          <div>
            {/*
            <Link href="https://www.facebook.com/joao.garcez.12/">
              <a>
                <span>
                  <FaFacebookSquare />
                </span>
                Facebook
              </a>
            </Link>
             */}
            <Link href="https://www.instagram.com/joaogarcez8/">
              <a>
                <span>
                  <FaInstagram />
                </span>
                Instagram
              </a>
            </Link>
            {/*
            <Link href="https://twitter.com/JoaoGarcez11">
              <a>
                <span>
                  <FaTwitter />
                </span>
                Twitter
              </a>
            </Link>
            */}
            <Link href="https://www.linkedin.com/in/joaogarcez/">
              <a>
                <span>
                  <FaLinkedin />
                </span>
                LinkedIn
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
            src="/aboutme_img.png"
            alt="joao garcez"
            width={500}
            height={500}
          />
        </ImageContainer>
      </Container>
    </>
  );
}

export default AboutMe;


export const Container = styled.div`

  margin-top: 200px;

  @media (max-width: 768px){
    margin-top: 0px;
  }

  display: flex;
  flex:1;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px){
    flex-direction: column-reverse;

  }

  a{
    svg{
      margin-bottom: 4px;
    }
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
    margin-top: 20px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;



    @media (max-width: 390px){
      flex-direction: column;

      a{
        margin-top: 10px;
      }
    }

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

  img{
    border-radius: 250px;
  }

  padding: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
`;


