import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Ayah, DetailSurah } from "@/types/surah.type"
import { BookOpenText } from "lucide-react"
import { FC } from "react"

interface TafsirAyatProps {
  detailSurah: DetailSurah | null
  ayah: Ayah
}

const TafsirAyat: FC<TafsirAyatProps> = ({ detailSurah, ayah }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BookOpenText size={20} className="text-muted-foreground hover:text-foreground transition-all cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tafsir {detailSurah?.name} Ayat {ayah.number.inSurah}</DialogTitle>
        </DialogHeader>
        <p className="text-end text-3xl font-lpmq leading-[2.5]">{ayah.arab}</p>
        <div>
          <h4 className="font-semibold">Tafsir Jalalayn</h4>
          <p className="leading-relaxed">{ayah.tafsir.jalalayn}</p>
        </div>
        <div>
          <h4 className="font-semibold">Tafsir Kemenag Pendek</h4>
          <p className="leading-relaxed">{ayah.tafsir.kemenag.short}</p>
        </div>
        <div>
          <h4 className="font-semibold">Tafsir Kemenag Panjang</h4>
          <p className="leading-relaxed">{ayah.tafsir.kemenag.long}</p>
        </div>
        <h4>
          <h4 className="font-semibold">Tafsir Quraish</h4>
          <p className="leading-relaxed">{ayah.tafsir.quraish}</p>
        </h4>
      </DialogContent>
    </Dialog>
  )
}

export default TafsirAyat