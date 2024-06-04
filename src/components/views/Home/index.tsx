import useSurahStore from "@/lib/zustand/store"
import Link from "next/link"
import { FC } from "react"

const HomepageView: FC = () => {
  const surahs = useSurahStore((state) => state.surahs)

  return (
    <div className="my-10">
      <div className="flex flex-wrap w-full gap-y-5">
        {surahs.map((surah) =>
          <div key={surah.number} className="basis-1/3 px-5">
            <Link href={`/surah/${surah.number}`} className="group p-3 h-20 flex flex-row gap-5 items-center border-2 border-transparent rounded-lg bg-[#F1F4F9] text-card-foreground shadow-sm hover:border-[#E1E8F0] transition-all cursor-pointer">
              <div className="aspect-square h-full flex justify-center items-center px-4 py-2 bg-[#E1E8F0] rounded-md text-center font-semibold group-hover:bg-[#3545D0] transition-all group-hover:text-background">
                {surah.number}
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold">{surah.name} <span className="font-normal">({surah.translation})</span></h3>
                <div className="flex flex-row gap-2 text-muted-foreground">
                  <p>{surah.revelation}</p>
                  <span>•</span>
                  <p>{surah.numberOfAyahs} Ayat</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomepageView