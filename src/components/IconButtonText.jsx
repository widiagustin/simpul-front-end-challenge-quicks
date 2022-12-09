import React from 'react'

export default function IconButtonText ({ icon, onClick, text, color, children }) {
  return (
    <div className='flex-row'>
      <p className='text-center text-white font-bold mb-3'>{text}</p>
      <button
        className={`rounded-full text-center desktop:w-[60px] desktop:h-[60px] w-[50px] h-[50px] ${color}`}
        onClick={onClick}>
        <img src={icon} className="mx-auto w-5 desktop:w-[27px]" />
      </button>
      {children}
    </div>
  )
}
