import axios from "axios";

const BASE_URL = "https://api.spotify.com/v1";

interface Artist {
  name: string;
}

interface AlbumImage {
  url: string;
}

interface TopSong {
  artists: Artist[];
  name: string;
  images: AlbumImage[];
}

export const getTopAlbums = async (): Promise<TopSong[] | null> => {
  const response = await axios(`${BASE_URL}/browse/new-releases?country=KR`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  });

  return response.data.albums.items;
};
