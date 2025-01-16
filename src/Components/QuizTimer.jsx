import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const QuizTimer = ({timeout , onTimeout , mode}) => {

    const [remainingTime , setRemainingTime] = useState(timeout)

    useEffect(()=>{
        const timeoutclear = setTimeout(onTimeout, timeout)

        return (()=>{
            clearTimeout(timeoutclear)
        })

    }, [timeout , onTimeout])
    
    useEffect(()=>{
        const time = setInterval(()=>{
            setRemainingTime(prev => prev-100)
        },100)

        return (()=>{
            clearInterval(time)
        })

    } , [])

   


  return (
    <progress id='question' value= {remainingTime} max={timeout} className={mode} />
  )
}

export default QuizTimer
