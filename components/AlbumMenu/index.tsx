import React from "react";
import { getTracksByAlbumId } from "../../lib/spotify";
import { ITopSong } from "../../shared/type";
import useStore from "../../store";
import Button from "../Button";
import { Wrapper } from "./styles";

interface IProps {
  album: ITopSong;
  rank: number;
}

const AlbumMenu = ({ album, rank }: IProps) => {
  const setCurrentRank = useStore((state) => state.setCurrentRank);
  const setCurrentAlbumImage = useStore((state) => state.setCurrentAlbumImage);
  const setCurrentTrack = useStore((state) => state.setCurrentTrack);

  const onClickTracks = async () => {
    const tracks = await getTracksByAlbumId(album.id);
    setCurrentRank(rank);
    setCurrentAlbumImage(album.images[0].url);
    setCurrentTrack(tracks);
  };

  return (
    <Wrapper>
      <Button onClick={onClickTracks}>
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
    </Wrapper>
  );
};

export default AlbumMenu;
