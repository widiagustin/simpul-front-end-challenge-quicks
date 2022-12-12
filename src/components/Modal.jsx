import React from 'react'


export default function Modal ({ children }) {


  return (
    <div className='bg-white w-[33.75rem] h-[33.375rem] desktop:w-[45.88rem] desktop:h-[46.1rem] rounded-md absolute right-0 bottom-20 opacity-1 duration-500'>
      {children}
    </div >
  )
}
