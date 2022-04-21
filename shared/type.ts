interface IArtist {
  name: string;
}

interface IAlbumImage {
  url: string;
}

export interface ITopSong {
  artists: IArtist[];
  name: string;
  images: IAlbumImage[];
  id: string;
}

export interface ITrack {
  name: string;
  id: string;
}
