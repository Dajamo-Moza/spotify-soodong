import React from "react";
import useStore from "../../store";
import { CloseButton, Title, Wrapper } from "./styles";

const Playlist = () => {
  const setShowPlaylists = useStore((state) => state.setShowPlaylists);

  const onClickCloseButton = () => {
    setShowPlaylists(false);
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClickCloseButton}>✕</CloseButton>
      <Title>MY PLAYLISTS</Title>
    </Wrapper>
  );
};

export default Playlist;
