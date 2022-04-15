import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { getTopAlbums } from "../lib/spotify";
import useSWR from "swr";
import SideMenu from "../components/SideMenu";

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
      <SideMenu />
      <ChartWrapper>
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
              <AlbumButtonWrapper>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Button>
              </AlbumButtonWrapper>
            </AlbumContent>
          </AlbumWrapper>
        ))}
      </ChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 90px;
  background-color: #02c567;
`;

const Button = styled.button`
  width: 40px;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
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

const AlbumButtonWrapper = styled.div`
  display: flex;
`;

export default Home;
