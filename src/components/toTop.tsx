import { FC } from "react"
import { ArrowUp } from "lucide-react"

const ToTop: FC = () => {
  document.addEventListener('scroll', () => {
    const toTop = document.getElementById('top')
    if (toTop && window.scrollY > 100) {
      toTop.style.display = 'flex'
    } else if (toTop) {
      toTop.style.display = 'none'
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="top" className="bg-[#3545D0] rounded-full shadow-sm fixed bottom-5 right-5 w-16 h-16 flex items-center justify-center text-background cursor-pointer hover:bg-[#3545D0]/90 transition-all" onClick={scrollToTop}>
      <ArrowUp size={28} />
    </div>
  )
}

export default ToTop