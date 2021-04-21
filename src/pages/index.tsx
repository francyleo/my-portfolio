import React from 'react';
import Head from 'next/head';

import Header from '@components/Header';
import { Container, Description, Subtitle, Title } from 'src/styles/pages/Hero';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Francyleo Matos - Portfolio</title>
      </Head>
      <Header />
      <Subtitle>desenvolvedor full-stack</Subtitle>
      <Title>Francyleo Matos</Title>
      <Description>
        Sempre atualizado com a novas tecnologias do mercado
      </Description>
      {/* <SideLines /> */}
    </Container>
  );
};

export default Home;
