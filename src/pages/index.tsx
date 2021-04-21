import React from 'react';
import Head from 'next/head';

import Header from '@components/Header';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGooglePlus,
} from 'react-icons/fa';

import {
  Container,
  Description,
  Subtitle,
  Title,
  Social,
  HeroWrapper,
  LineWrapper,
} from 'src/styles/pages/Hero';

import SideSvg from '../assets/svg/side_bar_lines.svg';
import BackgroundPrograminSvg from '../assets/svg/background_programing.svg';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Francyleo Matos - Portfolio</title>
      </Head>
      <Header />
      <Container>
        <Subtitle>desenvolvedor full-stack</Subtitle>
        <Title>Francyleo Matos</Title>
        <Description>
          Sempre atualizado com a novas <br />
          tecnologias do mercado.
        </Description>
        <Social>
          <a
            href="https://www.linkedin.com/in/francyleo-matos-91ab8b150/"
            target="_blank"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/francyleo" target="_blank">
            <FaGithub size={32} />
          </a>
          <a href="https://www.instagram.com/pirata_dev/" target="_blank">
            <FaInstagram size={32} />
          </a>
          <a href="mailto:programadorleomatos@gmail.com">
            <FaGooglePlus size={32} />
          </a>
        </Social>
        <LineWrapper>
          <SideSvg />
        </LineWrapper>
        <HeroWrapper>
          <BackgroundPrograminSvg />
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Home;
