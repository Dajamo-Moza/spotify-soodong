import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify app using Spotify Open API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Main Page</h1>
    </div>
  );
};

export default Home;
