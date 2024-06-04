import HomepageView from "@/components/views/Home";
import { FC, useEffect } from "react";
import quranServices from "../services";
import useSurahStore from "@/lib/zustand/store";

const Home: FC = () => {
  const updateSurahs = useSurahStore((set) => set.updateSurahs)

  useEffect(() => {
    const getAllSurah = async () => {
      const { data } = await quranServices.getAllSurah()
      updateSurahs(data)
    }

    getAllSurah()
  }, [updateSurahs])

  return (
    <HomepageView />
  );
}

export default Home;