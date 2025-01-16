import React from 'react'
import { useRef } from 'react'

const Answers = ({answers , selectedAnswer , answerSelected , onSelect}) => {
    const shuffledAnswer = useRef()
    if(!shuffledAnswer.current){
        shuffledAnswer.current= [...answers]
        shuffledAnswer.current.sort(() => Math.random() -0.5)
    }
  
  return (
    <ul id="answers">
                {shuffledAnswer.current.map((answer) => {
                    
                    let cssclass ='';
                    const isSelected = selectedAnswer === answer;

                    if(answerSelected === 'answered' && isSelected){
                        cssclass = 'selected';
                    }

                    if((answerSelected === 'wrong' || answerSelected === 'correct' ) && isSelected){
                        cssclass = answerSelected;
                    }
                    

                    return (
                    <li key={answer} className="answer">
                        <button onClick={()=> onSelect(answer)} className={cssclass} disabled = {answerSelected !== ''}  >{answer}</button>
                    </li>
                )}
                )}
              </ul>
  )
}

export default Answers
