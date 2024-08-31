import Presentation from './components/pages/Presentation'
import Actualites from './components/pages/Actualites'
import Adhesion from './components/pages/Adhesion'
import Contact from './components/pages/Contact'
import Valeurs from './components/pages/Valeurs'
import WelcomePage from './components/welcome_page/welcome'
import {BASE_URL_SITE} from './config.tsx'
import {  Routes, Route, HashRouter} from "react-router-dom";


function ThemContextProvider({}:{children: any}) {

  return (
    <div className="root">
      <HashRouter basename={BASE_URL_SITE} >
   
        <Routes>
          <Route path="/" element={<WelcomePage />}>
            Accueil
          </Route>
          <Route path="/valeurs" element={<Valeurs />}>
            Présentation
          </Route>
          <Route path="/presentation" element={<Presentation />}>
            Présentation
          </Route>
          <Route path="/actualites" element={<Actualites />}>
            Actualités
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/adhesion" element={<Adhesion />}>
            Adhésion
          </Route>

      </Routes>
             
     
      </HashRouter>
  

    </div>
  )
}

export default ThemContextProvider