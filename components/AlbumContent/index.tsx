import React from "react";
import { TopSong } from "../../shared/type";
import useStore from "../../store";
import AlbumMenu from "../AlbumMenu";
import { Artist, Description, Name, Rank, Wrapper } from "./styles";

interface IProps {
  album: TopSong;
  rank: number;
}

const AlbumContent = ({ album, rank }: IProps) => {
  const currentRank = useStore((state) => state.currentRank);
  const isClicked = currentRank === rank;

  return (
    <Wrapper isClicked={isClicked}>
      <Rank>{rank}</Rank>
      <Description>
        <Name>{album.name}</Name>
        <Artist>{album.artists[0].name}</Artist>
      </Description>
      {currentRank !== rank && <AlbumMenu album={album} rank={rank} />}
    </Wrapper>
  );
};

export default AlbumContent;
