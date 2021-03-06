import create from "zustand";
import { ITrack } from "../shared/type";

interface CurrentTrackState {
  currentRank: number;
  setCurrentRank: (rank: number) => void;
  currentAlbumImage: string;
  setCurrentAlbumImage: (imgUrl: string) => void;
  currentAlbum: ITrack[] | null;
  setCurrentAlbum: (tracks: ITrack[] | null) => void;
  currentTrack: ITrack | null;
  setCurrentTrack: (track: ITrack) => void;
  showPlaylists: boolean;
  setShowPlaylists: (type: boolean) => void;
  showSearchBar: boolean;
  setShowSearchBar: (type: boolean) => void;
}

const useStore = create<CurrentTrackState>((set) => ({
  currentRank: 0,
  setCurrentRank: (rank: number) => set({ currentRank: rank }),
  currentAlbumImage: "",
  setCurrentAlbumImage: (imgUrl: string) => set({ currentAlbumImage: imgUrl }),
  currentAlbum: null,
  setCurrentAlbum: (tracks: ITrack[] | null) => set({ currentAlbum: tracks }),
  currentTrack: null,
  setCurrentTrack: (track: ITrack) => set({ currentTrack: track }),
  showPlaylists: false,
  setShowPlaylists: (type: boolean) => set({ showPlaylists: type }),
  showSearchBar: false,
  setShowSearchBar: (type: boolean) => set({ showSearchBar: type }),
}));

export default useStore;
