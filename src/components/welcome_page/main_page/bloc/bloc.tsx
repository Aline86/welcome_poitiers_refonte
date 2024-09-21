import { useState } from 'react'
import s from './style.module.css'
import {Link} from 'react-router-dom'
import ContentLoader from "./ContentLoader"

  
interface BlocInfo {
  route: string
  title: string
  img: string
} 
function Bloc({route, title, img}: BlocInfo) {

  const [loaded, isLoaded] = useState(false)
  const updateLoaded = (state: boolean) => {
    console.log("inside", state)
    isLoaded(state)
  }

  return (
    <div className={s.bloc} >
      
      <Link to={route}  >
      
      <div className={s.image_container} >
          {!loaded && (<ContentLoader props=""/>)}
          
            
            <img src={img} alt={img} onLoad={() => updateLoaded(true)} style={{ display: loaded ? "flex" : "none" }}/>
            
            
            <div className={s.title} style={{ display: loaded ? "block" : "none" }}>
              {title}
            </div>
          
          </div>
      </Link  >  
    </div>
 
  )
}

export default Bloc