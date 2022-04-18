import React from "react";
import { useQuery } from "react-query";
import { getTopAlbums } from "../../lib/spotify";
import useStore from "../../store";
import Album from "../Album";
import { Wrapper } from "./styles";

const Chart = () => {
  const { data: topAlbums } = useQuery("topAlbums", getTopAlbums, {
    suspense: true,
  });
  const currentRank = useStore((state) => state.currentRank);
  const currentTrack = useStore((state) => state.currentTrack);

  console.log("CurrentRank", currentRank);
  console.log("CurrentTrack", currentTrack);

  return (
    <Wrapper>
      {topAlbums?.map((album, index) => (
        <div>
          <Album key={index} album={album} rank={index + 1} />
          {currentRank === index + 1 && currentTrack?.length && (
            <div>Clicked Track</div>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default Chart;
