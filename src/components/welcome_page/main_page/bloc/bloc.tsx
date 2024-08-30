import s from './style.module.css'
import {Link} from 'react-router-dom'


  
interface BlocInfo {
  route: string
  title: string
  img: string
} 
function Bloc({route, title, img}: BlocInfo) {
  console.log("route", route)

  return (
    <div className={s.bloc} >
      
      <Link    to={route}  >
    
      <div className={s.image_container}>
        <img src={img} alt={img} />
        <div className={s.title}>
          {title}
        </div>
      </div>
          
            
          
        
      
    
    </Link  >  
  </div>
 
  )
}

export default Bloc