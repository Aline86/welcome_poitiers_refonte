import s from './style.module.css'
import Bloc from "./bloc/bloc"
import card_1 from './img/card_1.jpg'
import card_2 from './img/card_2.jpg'
import card_3 from './img/card_3.jpg'
import card_4 from './img/card_4.jpg'
import card_5 from './img/card_5.png'

interface MainInfo {

  
}

function Main({}: MainInfo) {
  
  
  return (
    <>
     <div className={s.container} >
        <Bloc route="/presentation" title="Présentation" img={card_1} />
        <Bloc route="/valeurs" title="Valeurs" img={card_5} />
        <Bloc route="/actualites" title="Actualités" img={card_2}/>
        <Bloc route="/adhesion" title="Adhésion" img={card_3}/>
        <Bloc route="/contact" title="Contact" img={card_4}/>
      
    </div>
    
    </>
   
    
  )
}

export default Main