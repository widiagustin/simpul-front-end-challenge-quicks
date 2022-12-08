import React from 'react'
import questionAnswer from '../assets/icons/question_answer_white.svg'

export default function IconButton () {
  return (
    <>
      <button className='bg-indicator-slate-blue w-[68px] h-[68px] rounded-full text-cente'>
        <img src={questionAnswer} className="mx-auto" />
      </button>
    </>
  )
}
