import DetailSurahView from "@/components/views/DetailSurah"
import useSurahStore from "@/lib/zustand/store"
import quranServices from "@/services"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"

const DetailSurah: FC = () => {
  const { nomorSurah } = useRouter().query
  const { updateSurahs, updateDetailSurah } = useSurahStore()

  useEffect(() => {
    if (!nomorSurah) return

    const getAllSurah = async () => {
      const { data } = await quranServices.getAllSurah()
      updateSurahs(data)
    }

    const getDetailSurah = async (nomorSurah: string) => {
      const { data } = await quranServices.getDetailSurah(nomorSurah)
      updateDetailSurah(data)
    }

    getDetailSurah(nomorSurah as string)
    getAllSurah()
  }, [nomorSurah, updateSurahs, updateDetailSurah])

  return (
    <DetailSurahView />
  )
}

export default DetailSurah