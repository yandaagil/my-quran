import useSurahStore from "@/lib/zustand/store"
import { FC } from "react"

const HeaderSurat: FC = () => {
  const detailSurah = useSurahStore((state) => state.detailSurah)

  return (
    <div className="flex flex-col gap-3 items-center p-5 rounded-t-lg bg-[#F1F4F9] border-2 border-[#E1E8F0]">
      <p className="text-xl font-bold">{detailSurah?.number}. {detailSurah?.name} <span className=" text-xl font-normal">({detailSurah?.translation})</span></p>
      <div className="flex flex-row gap-3">
        <p>{detailSurah?.revelation}</p>
        <span>•</span>
        <p>{detailSurah?.numberOfAyahs} Ayat</p>
      </div>
      <audio src={detailSurah?.audio} controls></audio>
    </div>
  )
}

export default HeaderSurat