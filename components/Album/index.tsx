import Image from "next/image";
import React from "react";
import { TopSong } from "../../shared/type";
import {
  Artist,
  Button,
  ButtonWrapper,
  Content,
  Description,
  ImageWrapper,
  Name,
  Rank,
  Wrapper,
} from "./styles";

interface IProps {
  album: TopSong;
  rank: number;
}

const Album = ({ album, rank }: IProps) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={album.images[0].url} width={120} height={120} />
      </ImageWrapper>
      <Content>
        <Rank>{rank}</Rank>
        <Description>
          <Name>{album.name}</Name>
          <Artist>{album.artists[0].name}</Artist>
        </Description>
        <ButtonWrapper>
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
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default Album;
