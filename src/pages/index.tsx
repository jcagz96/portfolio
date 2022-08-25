import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Contact from '../pages/contact';
import AboutMe from '../pages/aboutme';
import ShowCase from '../pages/showcase';

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
    </>

  )
}

export default Home;
