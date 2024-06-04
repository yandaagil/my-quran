import useSurahStore from "@/lib/zustand/store"
import Link from "next/link"
import { useRouter } from "next/router"
import { Input } from "../ui/input"
import { FC, useState } from "react"
import { Surah, Ayah } from "@/types/surah.type"

const PilihSurat: FC = () => {
  const { surahs, detailSurah } = useSurahStore()
  const nomorSurah = parseInt(useRouter().asPath.split('/')[2])
  const [searchSurah, setSearchSurah] = useState<Surah[] | null>(null)
  const [searchAyah, setSearchAyah] = useState<Ayah[] | null>(null)

  const handleSearchSurah = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSurahs = [...surahs]
    const filteredSurah = newSurahs.filter((surah) => surah.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchSurah(filteredSurah)
  }

  const handleSearchAyah = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return setSearchAyah(null)
    const newAyah = detailSurah && [...detailSurah.ayahs]
    const filteredAyah = newAyah && newAyah.filter((ayah) => String(ayah.number.inSurah).includes(e.target.value))
    setSearchAyah(filteredAyah)
  }

  return (
    <div className="p-5 sticky top-10 flex flex-row gap-5 rounded-lg bg-[#F1F4F9] border-2 border-[#E1E8F0] h-[80vh] w-fit">
      <div className="flex flex-col gap-3">
        <h4 className="font-medium">Pilih Surat</h4>
        <Input name="searchSurah" onChange={handleSearchSurah} />
        <div className="h-full overflow-y-auto surah-scroll">
          {searchSurah !== null ? (
            searchSurah.length !== 0 ? (
              searchSurah.map((surah) => (
                <Link
                  href={`/surah/${surah.number}`}
                  key={surah.number}
                  className={`py-1 px-2 rounded-md flex flex-row gap-3 text-muted-foreground hover:bg-[#E1E8F0] hover:text-foreground ${nomorSurah === surah.number && 'bg-[#E1E8F0] font-medium'}`}
                >
                  <span className={`w-5 ${nomorSurah === surah.number && 'text-foreground'}`}>{surah.number}</span>
                  <p className={`${nomorSurah === surah.number && 'text-foreground'}`}>{surah.name}</p>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground">Surat tidak ditemukan</p>
            )
          ) : (
            surahs.map((surah) => (
              <Link
                href={`/surah/${surah.number}`}
                key={surah.number}
                className={`py-1 px-2 rounded-md flex flex-row gap-3 text-muted-foreground hover:bg-[#E1E8F0] hover:text-foreground ${nomorSurah === surah.number && 'bg-[#E1E8F0] font-medium'}`}
              >
                <span className={`w-5 ${nomorSurah === surah.number && 'text-foreground'}`}>{surah.number}</span>
                <p className={`${nomorSurah === surah.number && 'text-foreground'}`}>{surah.name}</p>
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-medium">Ayat</h4>
        <Input name="searchAyah" className="w-12" onChange={handleSearchAyah} />
        <div className="h-full overflow-y-auto surah-scroll">
          {searchAyah !== null ? (
            searchAyah.length !== 0 ? (
              searchAyah.map((ayah) =>
                <Link
                  href={`#${ayah.number.inSurah}`}
                  key={ayah.number.inSurah}
                  className={`py-1 px-2 rounded-md flex flex-row gap-3 text-muted-foreground hover:bg-[#E1E8F0] hover:text-foreground`}
                >
                  <p className={``}>{ayah.number.inSurah}</p>
                </Link>
              )
            ) : (
              <p className="text-muted-foreground">Ayat tidak ditemukan</p>
            )
          ) : (
            detailSurah?.ayahs.map((ayah) =>
              <Link
                href={`#${ayah.number.inSurah}`}
                key={ayah.number.inSurah}
                className={`py-1 px-2 rounded-md flex flex-row gap-3 text-muted-foreground hover:bg-[#E1E8F0] hover:text-foreground`}
              >
                <p className={``}>{ayah.number.inSurah}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default PilihSurat