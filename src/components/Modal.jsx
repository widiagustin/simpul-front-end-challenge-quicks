import React from 'react'


export default function Modal ({ children }) {


  return (
    <div className='bg-white w-[540px] h-[543px] desktop:w-[734px] desktop:h-[737px] rounded-md absolute right-0 bottom-20 opacity-1 duration-500'>
      {children}

    </div >
  )
}
