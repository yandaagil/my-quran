import { create } from "zustand";
import { Surah, DetailSurah } from "@/types/surah.type";

type State = {
  surahs: Surah[] | [];
  detailSurah: DetailSurah | null;
};

type Action = {
  updateSurahs: (surahs: State["surahs"]) => void;
  updateDetailSurah: (detailSurah: State["detailSurah"]) => void;
};

const useSurahStore = create<State & Action>((set) => ({
  surahs: [],
  detailSurah: null,
  updateSurahs: (surahs) => set(() => ({ surahs: surahs })),
  updateDetailSurah: (detailSurah) => set(() => ({ detailSurah: detailSurah })),
}));

export default useSurahStore;
