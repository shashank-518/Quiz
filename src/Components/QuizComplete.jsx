import React from 'react'
import QuizCompleted from '../assets/quiz-complete.png' 
import Question from '../question.js'


const QuizComplete = ({userAnswer}) => {

  const skippedQuestion = userAnswer.filter(answer => answer === null)
  const correctAnswer = userAnswer.filter((answer, index) => answer === Question[index].answers[0])

  const skippedPercentage = Math.round((skippedQuestion.length/userAnswer.length) *100);
  const correctPercentage = Math.round((correctAnswer.length/userAnswer.length)*100);
  const wrongPercentage = 100-skippedPercentage-correctPercentage



  return (
    <div id="summary" >
            <img src= {QuizCompleted} alt="" />
            <h2>Quiz Completed!</h2>
    <div id='summary-stats'>
        <p>
          <span className='number' >{skippedPercentage}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{correctPercentage}%</span>
          <span className='text'>Answer Correctly</span>
        </p>
        <p>
          <span className='number' >{wrongPercentage}%</span>
          <span className='text'>answer Incorrectly</span>
        </p>


    </div>

        <ol>
          {userAnswer.map((answer , index) => {
            let cssClass = "user-answer"

            if(answer === Question[index].answers[0]){
              cssClass+= " correct"
            }
            else if(answer === null){
              cssClass += " skipped"
            }
            else{
              cssClass+= " wrong"
            }


            return(
          <li key={answer}>
            <h2>{index+1}</h2>
            <p className='question' >{Question[index].text}</p>
            <p className={cssClass} >{answer ?? 'Skipped'}</p>
          </li>
            )

})}

        </ol>



        </div>

  
  )
}

export default QuizComplete
