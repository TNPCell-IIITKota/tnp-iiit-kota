import type { NextPage } from 'next';

import Head from 'next/head';

import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Pitch from '@components/Pitch';
import Policy from '@components/Policy';
import Preload from '@components/Preload';
import Slider from '@components/Slider';
import Stats from '@components/Stats';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Training and Placement Cell - IIIT Kota</title>

      <Preload font="open-sans-latin-300-normal" />
      <Preload font="open-sans-latin-400-normal" />
      <Preload font="open-sans-latin-600-normal" />
    </Head>

    <Hero />
    <Pitch />
    <Stats />
    <Slider />
    <Policy />
    <Contact />
    <Footer />
  </>
);

export default IndexPage;
