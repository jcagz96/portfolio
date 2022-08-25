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
          <h1>About<span>Me</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
            src="/bartsimpson.png"
            alt="homer simpson"
            width={250}
            height={700}
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


