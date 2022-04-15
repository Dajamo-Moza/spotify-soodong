interface Artist {
  name: string;
}

interface AlbumImage {
  url: string;
}

export interface TopSong {
  artists: Artist[];
  name: string;
  images: AlbumImage[];
}