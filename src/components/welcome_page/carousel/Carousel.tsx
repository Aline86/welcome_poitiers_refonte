import { useEffect, useState, useRef } from 'react'
import s from './styles/style.module.css'
import CarouselContainer from "./CarouselContainer"

interface CustomCarouselInfo {
  width: number, 
  height: number,
  cardNumber: number,
  gap: number,

} 
function Carousel({width, height, gap, cardNumber}: CustomCarouselInfo) {
  const [colors, setColors] = useState<string[]>([]);
  const [transitionFinished, setTransitionFinished] = useState(false);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>();
  const [resize, setResize] = useState(window.innerWidth);

  function generateColor() {
    let arrayColors = [];

      arrayColors.push('"L’accueil, c’est nouer une relation humaine privilégiée, découvrir une culture, et c’est moins compliqué qu’on pourrait l’imaginer", Benoît Weeger, tuteur et famille d\'accueil');
      arrayColors.push('"Welcome m’a permis de trouver un toit pour me poser et avancer" Cheik, accueilli à Welcome Poitiers"');
      arrayColors.push('"On s’accompagne les uns les autres, les tuteurs, les familles. Il y a un vrai suivi des situations, personne n’est isolé. Au final, c’est un peu comme si on recevait un ami", Maryline tourancheau, vice-présidente');

    
      setColors(arrayColors);
  }


  function updateCardRef() {
    const cardWidth: number|undefined = cardRef.current?.clientWidth
    if(cardWidth !== undefined) {
      setCardWidth(cardWidth + 15)
    }
  }
 
  function updateTransitionState(state: boolean) {
    setTransitionFinished(state);
  }

  function updateColors(state: boolean) {
    setTransitionFinished(state);
  }


  useEffect(() => {
 
  
    generateColor();
  
  }, []);

  function updateSize() {
    window.location.reload()
  }
  useEffect(() => {
  
    window.addEventListener("resize", updateSize);
    setResize(window.innerWidth);
 

  }, [resize])
  return (
    <div className={s.body_container} >
        {colors.length === cardNumber && 
          <CarouselContainer 
            width={width} 
            height={height} 
            gap={gap}
            updateColors={updateColors} 
            colors={colors} 
            transitionFinished={transitionFinished} 
            updateTransitionState={updateTransitionState} 
            cardWidth={cardWidth} 
            updateCardRef={updateCardRef} 
            cardRef={cardRef} 
            cardNumber={cardNumber}
            resize={resize}
          />
        }       
    </div>
    
  )
}

export default Carousel
