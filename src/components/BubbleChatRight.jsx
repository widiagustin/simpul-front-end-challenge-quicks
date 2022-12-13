import React from 'react'
import DropdownMenu from './DropdownMenu'

export default function BubbleChatRight ({ text }) {
  return (
    <div className='flex place-content-end flex-row-reverse'>
      <div className='text-sm flex flex-col items-end'>
        <p className='text-chat-deep-purple font-bold'>You</p>
        <div className='flex flex-row-reverse gap-2'>
          <div className='bg-chat-light-purple p-[10px] rounded-[5px] max-w-[411px]'>
            <p>{text}</p>
            <p className='mt-3'>19:32</p>
          </div>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
