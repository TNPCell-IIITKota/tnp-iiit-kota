import type { NextPage } from 'next';

import Head from 'next/head';

import Contact from '@components/Contact';
import FAQs from '@components/FAQs';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Pitch from '@components/Pitch';
import Policy from '@components/Policy';
import Preload from '@components/Preload';
import Slider from '@components/Slider';
import Stars from '@components/Stars';
import Stats from '@components/Stats';
import TeamHome from '@components/TeamHome';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta
        content="The TnP Cell of IIIT Kota acts as a facilitator for training and placement, and works enthusiastically towards the overall development of the students."
        name="description"
      />
      <title>Training and Placement Cell - IIIT Kota</title>

      <Preload font="open-sans-latin-300-normal" />
      <Preload font="open-sans-latin-400-normal" />
      <Preload font="open-sans-latin-600-normal" />
    </Head>

    <Navbar />
    <Hero />
    <Pitch />
    <Stats />
    <Slider />
    <Stars />
    <Policy />
    <FAQs />
    <TeamHome />
    <Contact />
    <Footer />
  </>
);

export default IndexPage;
