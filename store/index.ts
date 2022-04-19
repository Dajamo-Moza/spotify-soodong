import create from "zustand";
import { ITrack } from "../shared/type";

interface CurrentTrackState {
  currentRank: number;
  setCurrentRank: (rank: number) => void;
  currentAlbumImage: string;
  setCurrentAlbumImage: (imgUrl: string) => void;
  currentTrack: ITrack[] | null;
  setCurrentTrack: (tracks: ITrack[] | null) => void;
}

const useStore = create<CurrentTrackState>((set) => ({
  currentRank: 0,
  setCurrentRank: (rank: number) => set({ currentRank: rank }),
  currentAlbumImage: "",
  setCurrentAlbumImage: (imgUrl: string) => set({ currentAlbumImage: imgUrl }),
  currentTrack: null,
  setCurrentTrack: (tracks: ITrack[] | null) => set({ currentTrack: tracks }),
}));

export default useStore;
