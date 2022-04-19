import axios from "axios";
import { ITopSong, ITrack } from "../shared/type";

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

export const getCertainAlbum = async (id: string): Promise<ITrack[] | null> => {
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
