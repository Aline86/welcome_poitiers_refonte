import { useEffect, useState } from 'react'
import Card from "./Card"
import s from './styles/style.module.css'

interface CarouselData {
  colors: string[],
  transitionFinished: boolean,
  cardWidth: number,
  updateCardRef: any,
  updateColors: any,
  cardRef: any,
  updateTransitionState: any,
  width: number, 
  height:number,
  gap: number,
  cardNumber: number
  resize: number
} 

function CarouselContainer({colors,  transitionFinished, cardWidth, updateCardRef, cardRef, updateTransitionState, updateColors, width, gap, height, cardNumber, resize} : CarouselData) {
  const [trigger, setTrigger] = useState(0);
  const [move, setMove] = useState(0);
  const result = window.matchMedia("(max-width: 1000px)");



  function updateTransitionRight() {
    const popItem = colors.pop();
    if(popItem !== undefined) {
      colors.unshift(popItem)
      updateColors(colors);
    
    }
    updateTransitionState(false);
  }

  function moveRight() {
    setTrigger(trigger + 1);
    setMove(cardWidth + gap / 2);
    updateTransitionState(true);
  }

  useEffect(() => {
    updateCardRef()
    setTrigger(trigger + 1);
  }, []);

  useEffect(() => {
    
    //Implementing the setInterval method
      const interval = setInterval(() => {        
        if(!transitionFinished) {
          moveRight();
        }
        if(transitionFinished) {
          updateTransitionRight()
        }
        setTrigger(trigger + 1);
      }, 5000);
 
      //Clearing the interval
      return () => clearInterval(interval);
  }, [trigger]);
  if(!result) {
    useEffect(() => {}, [resize])
  }

  return (
    <div className={s.body}/* onTransitionEnd={() => updateTransitionState(false)}*/>
      {transitionFinished ? (<button className={s.left} style={{ pointerEvents: 'none', color: 'lightgray'}}  >&#x27E8;</button>) : (<button className={s.left} style={{marginRight: `${gap}px`}}><span>&#x27E8;</span></button>) }
      <div className={s.container_class} style={{minWidth:`${cardWidth + gap } px`, margin: `${gap}px auto`, height: `${!result.matches ? height + 2 : 150 }px`, width: `${width * (cardNumber)}px`, maxWidth: "100%"}} >
          <div className={s.card_container} style={{ transform: `translateX(${ - cardWidth - gap / 2 }px)`}}>
            <div className={s.cards}>
       
              {
                colors.map((value, index) => {
                  return (
                    
                    <Card key={index} 
                      color={value} 
                      cardRef={cardRef} 
                      transitionFinished={transitionFinished} 
                      trasnsType={"transform 2s ease-in"} 
                      transX={move} 
                      width={width} 
                      gap={gap} 
                      height={height} 
                      resize={resize}
                    />
                  )
                })
                
              }
           
            </div>
          </div>
      </div>
          {transitionFinished ? (<button className={s.right} style={{marginLeft: `${!result.matches ? gap : 0 }px`, pointerEvents: 'none', color: 'lightgray'}}  >&#x27E9;</button>) : (<button className={s.right} style={{marginLeft: `${gap}px`}} ><span>&#x27E9;</span></button>) }   
    </div>
    
  )
}

export default CarouselContainer