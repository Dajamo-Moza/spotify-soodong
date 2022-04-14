import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StringifyOptions } from "querystring";
import styled from "styled-components";
import { getTopAlbums } from "../lib/spotify";

interface Artist {
  name: string;
}

interface AlbumImage {
  url: string;
}

interface TopSong {
  artists: Artist[];
  name: string;
  images: AlbumImage[];
}
interface IProps {
  topAlbums: TopSong[];
}

const Home: NextPage<IProps> = ({ topAlbums }) => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify app using Spotify Open API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {topAlbums.map((album, index) => (
        <div key={index}>
          <Image src={album.images[0].url} width={300} height={300} />
          <h1>{index + 1}</h1>
          <h1>{album.artists[0].name}</h1>
          <h1>{album.name}</h1>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const topAlbums = await getTopAlbums();

  return {
    props: {
      topAlbums,
    },
  };
}

export default Home;
