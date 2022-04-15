import React from "react";
import { TopSong } from "../../shared/type";
import {
  Wrapper,
} from "./styles";

interface IProps {
  topAlbums: TopSong[];
}

const Chart = ({ topAlbums }: IProps) => {
  return (
    <Wrapper>
      {topAlbums.map((album, index) => (
        
      ))}
    </Wrapper>
  );
};

export default Chart;
