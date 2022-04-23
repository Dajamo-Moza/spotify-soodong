import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  addCertainTrackToPlaylist,
  addNewPlaylist,
  getPlaylists,
} from "../../lib/spotify";
import useStore from "../../store";
import {
  AddNewPlaylistButton,
  AddNewPlaylistInput,
  AddNewPlaylistWrapper,
  AddPlaylistWrapper,
  CertainPlaylistWrapper,
  CloseButton,
  PlaylistName,
  Title,
  Wrapper,
} from "./styles";

const Playlist = () => {
  const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
  const setShowPlaylists = useStore((state) => state.setShowPlaylists);
  const currentTrack = useStore((state) => state.currentTrack);
  const [playlistInput, setPlaylistInput] = useState("");
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

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPlaylistInput(value);
  };

  const onClickAddNewPlaylist = async () => {
    if (window.confirm("새로운 Playlist로 추가하시겠습니까?")) {
      await addNewPlaylist(playlistInput);
      setShowPlaylists(false);
      return alert("생성 완료");
    }
    return;
  };

  const onClickAddNewPlaylistMenu = () => {
    setCreateNewPlaylist(true);
  };

  return (
    <Wrapper>
      <CloseButton onClick={onClickCloseButton}>✕</CloseButton>
      <Title>MY PLAYLISTS</Title>
      {createNewPlaylist ? (
        <AddNewPlaylistWrapper>
          <AddNewPlaylistInput
            onChange={onChangeInput}
            type="text"
            placeholder="Playlist 이름 입력"
          />
          <AddNewPlaylistButton onClick={onClickAddNewPlaylist}>
            OK
          </AddNewPlaylistButton>
        </AddNewPlaylistWrapper>
      ) : (
        <>
          {playlists?.map((playlist) => (
            <CertainPlaylistWrapper
              key={playlist.id}
              onClick={() =>
                onClickAddTrackToPlaylist(playlist.name, playlist.id)
              }
            >
              <PlaylistName>{playlist.name}</PlaylistName>
            </CertainPlaylistWrapper>
          ))}
          <AddPlaylistWrapper onClick={onClickAddNewPlaylistMenu}>
            <p>+</p>
            <p>NEW PLAYLIST</p>
          </AddPlaylistWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Playlist;
