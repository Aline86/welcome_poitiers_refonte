import './global.css'
import Welcome from './components/welcome_page/welcome'
import ThemContextProvider from './Context'
function App() {
 
  return (
    <ThemContextProvider>
        <Welcome />
    </ThemContextProvider>
     
  )
}

export default App
