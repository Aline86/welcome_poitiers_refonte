
import {Link } from "react-router-dom";
import s from "./styles.module.css"

interface NavInfo {
    opened: boolean
}
export default function Nav({opened} : NavInfo) {

    return (
    
        <nav className={opened ?`${s.side_menu} ${s.open_side_bar}` : `${s.side_menu}`} >
            <ul className={s.ul_menu}>
                <Link   to="/">
                    <li><div>Accueil<span></span></div></li>
                </Link>
                <Link  to="/presentation">
                    <li><div>Présentation<span></span></div></li>
                </Link>
                <Link  to="/actualites">
                    <li><div>Actualités<span></span></div></li>
                </Link> 
                <Link  to="/contact">
                    <li><div>Contact<span></span></div></li>
                </Link>
                <Link  to="/adhesion">
                    <li><div>Bulletin d'adhésion<span></span></div></li>
                </Link>                                     
            </ul>
        </nav>
  
    )
}