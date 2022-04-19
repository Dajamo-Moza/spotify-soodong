import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { getTopAlbums } from "../../lib/spotify";
import useStore from "../../store";
import Album from "../Album";
import Track from "../Track";
import { Wrapper, SelectedAlbumWrapper, TracksWrapper } from "./styles";

const Chart = () => {
  const { data: topAlbums } = useQuery("topAlbums", getTopAlbums, {
    suspense: true,
  });
  const currentRank = useStore((state) => state.currentRank);
  const currentAlbumImage = useStore((state) => state.currentAlbumImage);
  const currentTrack = useStore((state) => state.currentTrack);

  return (
    <Wrapper>
      {topAlbums?.map((album, index) => (
        <div key={album.id}>
          <Album album={album} rank={index + 1} />
          {currentRank === index + 1 && currentTrack?.length && (
            <SelectedAlbumWrapper>
              <Image src={currentAlbumImage} width={450} height={450} />
              <TracksWrapper>
                {currentTrack.map((track, index) => (
                  <Track key={track.id} number={index + 1} track={track} />
                ))}
              </TracksWrapper>
            </SelectedAlbumWrapper>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default Chart;
