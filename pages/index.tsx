import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { getTopAlbums } from "../lib/spotify";
import { useQuery } from "react-query";
import SideMenu from "../components/SideMenu";
import Chart from "../components/Chart";
import { Suspense } from "react";

const Home: NextPage = () => {
  const { data: topAlbums, error } = useQuery("topAlbums", getTopAlbums);

  if (error) {
    return <div>Error happened...</div>;
  }

  // if (!topAlbums) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Wrapper>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify app using Spotify Open API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <Chart topAlbums={topAlbums} />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 90px;
  background-color: #02c567;
`;

export default Home;
