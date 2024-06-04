import { FC } from "react"
import Navbar from "../navbar"
import ToTop from "../toTop"

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container">{children}</main>
      <ToTop />
    </>
  )
}

export default Layout