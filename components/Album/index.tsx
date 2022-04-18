import Image from "next/image";
import React from "react";
import { TopSong } from "../../shared/type";
import useStore from "../../store";
import AlbumContent from "../AlbumContent";
import { Wrapper, ImageWrapper } from "./styles";

interface IProps {
  album: TopSong;
  rank: number;
}

const Album = ({ album, rank }: IProps) => {
  const currentRank = useStore((state) => state.currentRank);

  return (
    <Wrapper>
      {currentRank !== rank && (
        <ImageWrapper>
          <Image src={album.images[0].url} width={150} height={150} />
        </ImageWrapper>
      )}
      <AlbumContent album={album} rank={rank} />
    </Wrapper>
  );
};

export default Album;
