import create from "zustand";
import { ITrack } from "../shared/type";

interface CurrentTrackState {
  currentRank: number;
  toggleCurrentRank: (rank: number) => void;
  currentAlbumImage: string;
  toggleCurrentAlbumImage: (imgUrl: string) => void;
  currentTrack: ITrack[] | null;
  toggleCurrentTrack: (tracks: ITrack[] | null) => void;
}

const useStore = create<CurrentTrackState>((set) => ({
  currentRank: 0,
  toggleCurrentRank: (rank: number) => set({ currentRank: rank }),
  currentAlbumImage: "",
  toggleCurrentAlbumImage: (imgUrl: string) =>
    set({ currentAlbumImage: imgUrl }),
  currentTrack: null,
  toggleCurrentTrack: (tracks: ITrack[] | null) =>
    set({ currentTrack: tracks }),
}));

export default useStore;
