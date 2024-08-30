import s from './styles/style.module.css'
import { useEffect } from 'react'
interface CardData {
    color: string,
    cardRef: any,
    transitionFinished: boolean,
    trasnsType: string,
    transX: number,
    width: number|undefined, 
    height: number,
    gap: number,
    resize: number
} 

function Card({color, cardRef, transitionFinished, trasnsType, transX, width, gap, height, resize
} : CardData) {
    const result = window.matchMedia("(max-width: 1000px)");
    useEffect(() => {
        console.log("window.innerWidth", resize)
    }, [resize])
    if(transitionFinished){
        return ( <div className={s.card_app}  style={{  width:`${!result.matches ?  `${width}px`: `calc(100vw - 40px)`}`, height:`${!result.matches ? `${height}px`: `100`}px`, margin:`${gap  * 0.5}px`, transition: `${trasnsType}`, transform: `translateX(${transX}px)`}} ref={cardRef}>
            <div className={s.card_text}>{color}</div>
        </div> )
    }
    else {
        return ( <div   className={s.card_app} ref={cardRef} style={{  width:`${!result.matches ? `${width}px`: `calc(100vw - 40px)`}`, height:`${!result.matches ? `${height}px`: `100`}px`, margin:`${gap  * 0.5}px`}}>
          <div className={s.card_text}>{color}</div>
        </div> )
    }
    
}

export default Card