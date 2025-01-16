import React from 'react'
import QuizTimer from './QuizTimer'
import Answers from './Answers'
import question from '../question.js'
import { useState } from 'react'

const Question = ({index , answerno  , handleClick}) => {


    const [Answer , setAnswer ] = useState({
        selectedAnswer : '',
        iscorrect : null
    })

    let timer = 10000

    if(Answer.selectedAnswer){
        timer = 1000
    }

    if(Answer.iscorrect !== null){
        timer = 2000
    }


    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            iscorrect:null
        })

        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                iscorrect: question[index].answers[0] === answer
            })
            setTimeout(()=>{
                handleClick(answer)
            }, 2000)
        },1000)


    }

    let answerState = ''

    if(Answer.selectedAnswer && Answer.iscorrect !== null){
        answerState = Answer.iscorrect ? 'correct' : 'wrong'
    }else if(Answer.selectedAnswer){
        answerState = 'answered'
    }


  return (
    
       <div id="question">
                <QuizTimer
                key={timer}
                 timeout= {timer}
                 onTimeout={Answer.selectedAnswer === "" ? answerno : null}
                 mode={answerState} />
              <h2>{question[index].text}</h2>
              <Answers
                answers={question[index].answers}
                selectedAnswer={Answer.selectedAnswer}
                answerSelected ={answerState}
                onSelect = {handleSelectAnswer}
              />
            </div>
  )
}

export default Question
