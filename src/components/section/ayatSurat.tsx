import { Play } from 'lucide-react'
import React, { FC } from 'react'
import { Ayah, DetailSurah } from '@/types/surah.type'
import TafsirAyat from './tafsirAyat'

interface AyatSuratProps {
  detailSurah: DetailSurah | null
  ayah?: Ayah
}

const AyatSurat: FC<AyatSuratProps> = ({ detailSurah, ayah }) => {
  return (
    <div className="py-10 flex flex-row gap-10" id={`${ayah?.number.inSurah}`}>
      <div className="flex flex-col gap-7 items-center">
        <span className="font-bold text-muted-foreground text-xl">{ayah ? ayah.number.inSurah : 0}</span>
        <Play size={20} className="text-muted-foreground hover:text-foreground transition-all cursor-pointer" />
        {ayah && <TafsirAyat detailSurah={detailSurah} ayah={ayah} />}
      </div>
      <div className="flex flex-col gap-10 w-full">
        <p className="text-end text-3xl font-lpmq leading-[2.5]">{ayah ? ayah.arab : detailSurah?.bismillah.arab}</p>
        <p className="font-medium leading-relaxed">{ayah ? ayah.translation : detailSurah?.bismillah.translation}</p>
        {/* <audio src={ayah ? ayah.audio.ahmedajamy : detailSurah?.bismillah.audio} controls></audio> */}
      </div>
    </div>
  )
}

export default AyatSurat