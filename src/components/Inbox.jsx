import React from 'react'

export default function Inbox ({ children, title, date, name, text, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className='w-[500px] desktop:w-[665px] mx-auto mt-[26px] cursor-pointer'>
        <div className='flex justify-between items-center'>
          <div className='flex w-[480px] desktop:w-full space-x-3'>
            <div className='col-start-2 row-start-1 row-end-3 flex text-left items-start'>
              <div className='flex justify-end -space-x-4'>
                {children}
              </div>
            </div>
            <div>
              <div className='flex'>
                <p className='text-primary-royal-blue font-bold mb-2'>{title} </p>
                <p className='text-primary-gray text-sm font-normal ml-4'>{date}</p>
              </div>
              <p className='font-bold text-primary-gray text-sm text-left'>{name}</p>
              <p className='text-primary-gray text-sm text-left'>{text}</p>
            </div>
          </div>
          <div className='bg-indicator-indian-red w-[10px] h-[10px] rounded-full'></div>
        </div>
        <div className='mt-[38px] border-b border-primary-gray-2'></div>
      </div>
    </>
  )
}
