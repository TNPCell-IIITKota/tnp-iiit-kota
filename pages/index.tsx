import type { NextPage } from 'next';

import Head from 'next/head';

import Preload from '@components/Preload';

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
  </>
);

export default IndexPage;
