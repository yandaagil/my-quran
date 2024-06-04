import { Separator } from "@/components/ui/separator"
import React, { FC } from "react"
import useSurahStore from "@/lib/zustand/store"
import PilihSurat from "@/components/section/pilihSurat"
import HeaderSurat from "@/components/section/headerSurat"
import AyatSurat from "@/components/section/ayatSurat"

const DetailSurahView: FC = () => {
  const detailSurah = useSurahStore((set) => set.detailSurah)

  return (
    <div className="my-10 flex flex-row gap-10 w-full justify-between">
      <PilihSurat />

      <div className="w-9/12">
        <HeaderSurat />
        {detailSurah?.number !== 1 && <AyatSurat detailSurah={detailSurah} />}
        <Separator />
        {detailSurah?.ayahs.map((ayah, index) =>
          <React.Fragment key={index + 1}>
            <AyatSurat detailSurah={detailSurah} ayah={ayah} />
            {index + 1 !== detailSurah.ayahs.length && <Separator />}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default DetailSurahView