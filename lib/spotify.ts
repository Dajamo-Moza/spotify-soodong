import axios from "axios";
import { IPlaylist, ITopSong, ITrack } from "../shared/type";

const BASE_URL = "https://api.spotify.com/v1";

export const getTopAlbums = async (): Promise<ITopSong[] | null> => {
  try {
    const response = await axios(`${BASE_URL}/browse/new-releases?country=KR`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    });

    return response.data.albums.items;
  } catch (e) {
    return null;
  }
};

export const getTracksByAlbumId = async (
  id: string
): Promise<ITrack[] | null> => {
  try {
    const response = await axios(`${BASE_URL}/albums/${id}/tracks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    });

    return response.data.items;
  } catch (e) {
    return null;
  }
};

export const getPlaylists = async (): Promise<IPlaylist[] | null> => {
  try {
    const response = await axios(`${BASE_URL}/me/playlists`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    });

    return response.data.items;
  } catch (e) {
    return null;
  }
};

export const addCertainTrackToPlaylist = async (
  trackId: string,
  playlistId: string
) => {
  try {
    await axios(
      `${BASE_URL}/playlists/${playlistId}/tracks?position=0&uris=${trackId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      }
    );
    return "추가 성공";
  } catch (e) {
    return null;
  }
};

export const addNewPlaylist = async (playlistName: string) => {
  try {
    await axios(
      `${BASE_URL}/users/${process.env.NEXT_PUBLIC_USER_ID}/playlists`,
      {
        method: "POST",
        data: {
          name: playlistName,
          public: false,
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      }
    );
    return "추가 성공";
  } catch (e) {
    return null;
  }
};
