import React from "react";
import { TopSong } from "../../shared/type";
import AlbumMenu from "../AlbumMenu";
import { Artist, Description, Name, Rank, Wrapper } from "./styles";

interface IProps {
  album: TopSong;
  rank: number;
}

const AlbumContent = ({ album, rank }: IProps) => {
  return (
    <Wrapper>
      <Rank>{rank}</Rank>
      <Description>
        <Name>{album.name}</Name>
        <Artist>{album.artists[0].name}</Artist>
      </Description>
      <AlbumMenu />
    </Wrapper>
  );
};

export default AlbumContent;