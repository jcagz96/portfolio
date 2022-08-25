import Link from "next/link";
import { NextPage } from "next/types";
import { Container, AboutMeContainer, ImageContainer } from './styles';
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