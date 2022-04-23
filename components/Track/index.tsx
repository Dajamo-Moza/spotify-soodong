import React from "react";
import { ITrack } from "../../shared/type";
import useStore from "../../store";
import Button from "../Button";
import { TrackInfo, Wrapper } from "./styles";

interface IProps {
  number: number;
  track: ITrack;
}

const Track = ({ number, track }: IProps) => {
  const setCurrentTrack = useStore((state) => state.setCurrentTrack);
  const setShowPlaylists = useStore((state) => state.setShowPlaylists);

  const onClickAddTrack = () => {
    setCurrentTrack({ name: track.name, id: `spotify:track:${track.id}` });
    setShowPlaylists(true);
  };

  return (
    <Wrapper>
      <TrackInfo>
        Track {number} {track.name}
      </TrackInfo>
      <div>
        <Button onClick={onClickAddTrack}>
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
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
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
      </div>
    </Wrapper>
  );
};

export default Track;
