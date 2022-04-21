import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { addCertainTrackToPlaylist, getPlaylists } from "../../lib/spotify";
import useStore from "../../store";
import {
  CertainPlaylistWrapper,
  CloseButton,
  PlaylistName,
  Title,
  Wrapper,
} from "./styles";

const Playlist = () => {
  const setShowPlaylists = useStore((state) => state.setShowPlaylists);
  const currentTrack = useStore((state) => state.currentTrack);
  const { data: playlists } = useQuery("playlists", getPlaylists);

  const onClickCloseButton = () => {
    setShowPlaylists(false);
  };

  const onClickAddTrackToPlaylist = async (
    playlistName: string,
    playlistId: string
  ) => {
    if (
      window.confirm(`${playlistName} Playlist에 Track을 추가하시겠습니까?`)
    ) {
      if (currentTrack) {
        await addCertainTrackToPlaylist(currentTrack.id, playlistId);
        return alert("추가 완료");
      }
    }
    return;
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClickCloseButton}>✕</CloseButton>
      <Title>MY PLAYLISTS</Title>
      {playlists?.map((playlist) => (
        <CertainPlaylistWrapper
          key={playlist.id}
          onClick={() => onClickAddTrackToPlaylist(playlist.name, playlist.id)}
        >
          <PlaylistName>{playlist.name}</PlaylistName>
        </CertainPlaylistWrapper>
      ))}
    </Wrapper>
  );
};

export default Playlist;
