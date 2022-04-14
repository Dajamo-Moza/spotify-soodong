import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { getTopAlbums } from "../lib/spotify";
import useSWR from "swr";

const Home: NextPage = () => {
  const { data: topAlbums, error } = useSWR("/api/songs", getTopAlbums);

  if (error) {
    return <div>Error happened...</div>;
  }

  if (!topAlbums) {
    return <div>Loading...</div>;
  }

  console.log(topAlbums);

  return (
    <Wrapper>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify app using Spotify Open API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {topAlbums.map((album, index) => (
        <AlbumWrapper key={index}>
          <AlbumImage>
            <Image src={album.images[0].url} width={120} height={120} />
          </AlbumImage>
          <AlbumContent>
            <AlbumRank>{index + 1}</AlbumRank>
            <AlbumDescription>
              <AlbumName>{album.name}</AlbumName>
              <AlbumArtist>{album.artists[0].name}</AlbumArtist>
            </AlbumDescription>
          </AlbumContent>
        </AlbumWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 90px;
`;

const AlbumWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AlbumImage = styled.div`
  padding: 0px 30px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-bottom: 13px;
`;

const AlbumContent = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin-left: 37px;
`;

const AlbumRank = styled.p`
  font-size: 80px;
  font-weight: 700;
  width: 120px;
`;

const AlbumDescription = styled.div`
  width: 557px;
  height: 99px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AlbumName = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const AlbumArtist = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export default Home;
