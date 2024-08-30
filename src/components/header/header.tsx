import { useState } from 'react'
import s from './style.module.css'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/facebook.png'
import Nav from "./Nav/Nav"
import {Link} from 'react-router-dom'

interface HeaderInfo {

  
} 
function Header({}: HeaderInfo) {
  const [open, setOpen] = useState(false);

  return (
    <>
     <div className={s.backdrop}></div>
     <div className={s.container}>
        <div className={s.burger_menu}>
          <div className={open ? `${s.menu_btn} ${s.open}` : `${s.menu_btn }`} onClick={()=>setOpen(!open)}>
          <div className={s.menu_btn__burger}>
          </div>
        </div>
        <div >
          <Nav opened={open}/>
        </div>
        </div>
        <div className={s.title}><div className={s.title_container}>Welcome Poitiers<span></span></div></div>
        <div className={s.end}>
            <div className={s.facebook}><img src={facebook} alt="facebook"/></div>
            <Link to="/"><div className={s.logo}><img src={logo} alt="logo" /></div></ Link>
        </div>
       
      </div>
    </>
    
    
  )
}

export default Header
