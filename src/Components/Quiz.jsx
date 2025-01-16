import React from "react";
import { useState , useCallback } from "react";
import question from "../question.js";
import QuizComplete from "./QuizComplete.jsx";
import Question from "./Question.jsx";



const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  
  const activeQuestionIndex = answers.length 
  const questionComplete = activeQuestionIndex === question.length;

  const handleClick = useCallback((selectedanswer)=>{


    setAnswers((prev) => [
        ...prev , selectedanswer
    ])

  }, [])

  const notAnswered = useCallback(()=> handleClick(null) , [handleClick]) 



  if(questionComplete){
    return (
       <QuizComplete userAnswer = {answers}/>
    )
  }


  return (      
      <div id="quiz">
           <Question  
           key={activeQuestionIndex}
           index={activeQuestionIndex}
                answerno = {notAnswered} 
                handleClick = {handleClick}
           />
          </div>
  );
};

export default Quiz;
