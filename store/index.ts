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
}));

export default useStore;
