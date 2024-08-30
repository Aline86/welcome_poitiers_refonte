import Presentation from './components/pages/Presentation'
import Actualites from './components/pages/Actualites'
import Adhesion from './components/pages/Adhesion'
import Contact from './components/pages/Contact'
import Valeurs from './components/pages/Valeurs'
import WelcomePage from './components/welcome_page/welcome'
//import NotFound from './components/pages/NotFound'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />
  },
  {
  path: "/valeurs",
    element: <Valeurs />
  },
  {
    path: "/presentation",
    element: <Presentation />
  },
  {
    path: "/actualites",
    element: <Actualites />
  },
  {
    path: "/adhesion",
    element: <Adhesion />
  },
  {
    path: "/contact",
    element: <Contact />
  }
 /*,
  {
    path: "*",
    element: <NotFound />
  }*/
])
function ThemContextProvider({children}:{children: any}) {

  return (
    <div className="root">{}
        <RouterProvider router={router} fallbackElement={children}>
      
       
          
        </RouterProvider>
    

    </div>
  )
}

export default ThemContextProvider