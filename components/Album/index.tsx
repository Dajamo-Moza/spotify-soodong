import Image from "next/image";
import React from "react";
import { TopSong } from "../../shared/type";
import AlbumContent from "../AlbumContent";
import { Wrapper, ImageWrapper } from "./styles";

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
      <AlbumContent album={album} rank={rank} />
    </Wrapper>
  );
};

export default Album;
