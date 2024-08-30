import { useEffect, useState, useRef } from 'react'
import s from './style.module.css'
import Carousel from "../carousel/Carousel"

interface HeaderBodyInfo {

} 

function HeaderBody({}: HeaderBodyInfo) {
  const [cardWidth, setCardWidth] = useState<number|undefined>(0)
  const result = window.matchMedia("(max-width: 1000px)");
  const [resize, setResize] = useState(window.innerWidth);
  
 
  
  const getWidth = useRef<HTMLDivElement|null>(null)
  function updateCardWidth() {
    let widthCard = getWidth.current !== null ? (getWidth.current?.clientWidth) : undefined
    setCardWidth(widthCard)
  }

  useEffect(() => {
    updateCardWidth();
  }, [])
 
  return (
    <div className={s.container} ref={getWidth}>
        <div className={s.top} >
        {(cardWidth !== undefined) && (<Carousel  
            height={250} 
            width={cardWidth} 
            gap={30} 
            cardNumber={3}
        
            />)
        }

        </div>
    </div>
    
  )
}

export default HeaderBody