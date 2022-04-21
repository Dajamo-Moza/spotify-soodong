import create from "zustand";
import { IAlbum } from "../shared/type";

interface CurrentTrackState {
  currentRank: number;
  setCurrentRank: (rank: number) => void;
  currentAlbumImage: string;
  setCurrentAlbumImage: (imgUrl: string) => void;
  currentAlbum: IAlbum[] | null;
  setCurrentAlbum: (tracks: IAlbum[] | null) => void;
}

const useStore = create<CurrentTrackState>((set) => ({
  currentRank: 0,
  setCurrentRank: (rank: number) => set({ currentRank: rank }),
  currentAlbumImage: "",
  setCurrentAlbumImage: (imgUrl: string) => set({ currentAlbumImage: imgUrl }),
  currentAlbum: null,
  setCurrentAlbum: (tracks: IAlbum[] | null) => set({ currentAlbum: tracks }),
}));

export default useStore;
