import React from 'react'

export default function IconButton ({ icon, color, onClick }) {
  return (
    <div className='flex-row'>
      <button
        className={`rounded-full text-center w-[48px] h-[48px] desktop:w-[68px] desktop:h-[68px]
      ${color}`}
        onClick={onClick}>
        <img src={icon} className="mx-auto" />
      </button>
    </div>
  )
}
