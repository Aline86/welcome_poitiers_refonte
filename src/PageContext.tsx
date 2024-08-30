import {useEffect} from "react"
import Welcome from "./components/welcome_page/welcome"
import Actualites from "./components/pages/Actualites"
import Presentation from "./components/pages/Valeurs"
import Adhesion from "./components/pages/Adhesion"
import Contact from "./components/pages/Contact"
import ThemContextProvider from './Context'

function PageContext() {
  useEffect(() => {

  }, [])
  return (

    <ThemContextProvider>
        <Welcome />
        <Actualites />
        <Presentation />
        <Contact />
        <Adhesion />
    </ThemContextProvider>

  )
}

export default PageContext
