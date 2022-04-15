import React from "react";
import { TopSong } from "../../shared/type";
import Album from "../Album";
import { Wrapper } from "./styles";

interface IProps {
  topAlbums: TopSong[];
}

const Chart = ({ topAlbums }: IProps) => {
  return (
    <Wrapper>
      {topAlbums.map((album, index) => (
        <Album key={index} album={album} rank={index + 1} />
      ))}
    </Wrapper>
  );
};

export default Chart;
