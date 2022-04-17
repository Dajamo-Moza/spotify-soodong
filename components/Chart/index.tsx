import React from "react";
import { useQuery } from "react-query";
import { getTopAlbums } from "../../lib/spotify";
import Album from "../Album";
import { Wrapper } from "./styles";

const Chart = () => {
  const { data: topAlbums } = useQuery("topAlbums", getTopAlbums, {
    suspense: true,
  });

  return (
    <Wrapper>
      {topAlbums?.map((album, index) => (
        <Album key={index} album={album} rank={index + 1} />
      ))}
    </Wrapper>
  );
};

export default Chart;
