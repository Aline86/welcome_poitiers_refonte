import { useState } from 'react'
import s from './styles.module.css'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/facebook.png'
import statut from '../../assets/img/statut.pdf'
import Iframe from 'react-iframe'

interface FooterInfo {

  
} 
function Footer({}: FooterInfo) {
    const [opened, setOpened] = useState(false)
  return (

    <div className={s.container}>
        <div className={s.logo}>
            <img src={logo} alt="facebook"/>
        </div>
       
        <div className={s.statut}>
            <a className={s.statuts} href={statut} target="_blank">Voir nos Statuts</a>
        </div>
        <div className={s.address}>
            <h3>Welcome Poitiers</h3>
            <div>23-25, rue du Général Sérail</div>
            <div>86000 POITIERS</div>
        </div>
        <div className={s.map}  onClick={()=> setOpened(!opened)}>
           <div className={s.see_map}>Voir la carte</div>
           <div className={!opened ? `${s.none}` : `${s.full_back_drop}`}>
            <div className={s.drop} ></div>
            <div className={s.map_content}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.890861295759!2d0.34070351547080496!3d46.58939487913041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe76eb056bc1%3A0xb16f1b2037388dfd!2s23%20Rue%20du%20G%C3%A9n%C3%A9ral%20Sarrail%2C%2086000%20Poitiers!5e0!3m2!1sfr!2sfr!4v1605451424659!5m2!1sfr!2sfr"
                width="70%" height="50%" ></Iframe>

            </div>
         
           </div>
        </div>
        <div className={s.facebook}>
            <img src={facebook} alt="facebook"/>
        </div>
    </div>
    
    
    
  )
}

export default Footer