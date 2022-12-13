import React from 'react'
import iconMore from '../assets/icons/more_horiz.svg'
import DropdownMenu from './DropdownMenu'

export default function BubbleChatLeft ({ name, text, titleColor, textColor }) {
  return (
    <div className='flex gap-2 items-start self-start'>
      <div>
        <p className={`text-sm font-bold ${titleColor}`}>{name}</p>
        <div className='flex gap-2 items-start'>
          <div className='text-sm max-w-[411px]'>
            <div className={`p-[10px] rounded-[5px] ${textColor}`}>
              <p>{text}</p>
              <p className='mt-3'>19:32</p>
            </div>
          </div>
          <DropdownMenu position="right-1" />
        </div>
      </div>
    </div>
  )
}
