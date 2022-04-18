import create from "zustand";
import { Track } from "../shared/type";

interface CurrentTrackState {
  currentRank: number;
  toggleCurrentRank: (rank: number) => void;
  currentTrack: Track[] | null;
  toggleCurrentTrack: (tracks: Track[] | null) => void;
}

const useStore = create<CurrentTrackState>((set) => ({
  currentRank: 0,
  toggleCurrentRank: (rank: number) => set({ currentRank: rank }),
  currentTrack: null,
  toggleCurrentTrack: (tracks: Track[] | null) => set({ currentTrack: tracks }),
}));

export default useStore;
