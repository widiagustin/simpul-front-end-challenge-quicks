import React, { useCallback, useEffect, useRef, useState } from 'react'
import iconArrowBack from '../assets/icons/arrow_back_gray.svg'
import iconClose from '../assets/icons/close_gray.svg'
import BubbleChatLeft from './BubbleChatLeft'
import BubbleChatRight from './BubbleChatRight'
import SpinnerChat from './SpinnerChat'

export default function ModalChatSupport ({ onClick }) {
  const scrollBottomRef = useRef(null)
  const [y, setY] = useState(window.scrollY)
  const [popMessage, setPopMessage] = useState(false)

  const handleScrollMessage = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollTop && y < 70) {
        setPopMessage(true)
      } else if (y < window.scrollTop && y > 75) {
        setPopMessage(false)
      }
      setY(window.scrollTop)
    }, [y],
  )


  useEffect(() => {

    const domNode = scrollBottomRef.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  }, [])

  return (
    <>
      <div className='px-5 pt-5'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-[14px]'>
            <img src={iconArrowBack} alt="" onClick={onClick} className="cursor-pointer" />
            <div>
              <p className='font-bold text-primary-royal-blue'>FastVisa Support</p>
              <p className='text-sm'>3 Participants</p>
            </div>
          </div>
          <img src={iconClose} alt="" />
        </div>
      </div>
      <div className='border-b border-subgray mt-[18px]' />
      <div className='px-3'>
        <div
          className='px-4 py-5 w-full h-[24rem] desktop:h-[35rem] overflow-auto'
          ref={scrollBottomRef}
          onScroll={handleScrollMessage}>

          <BubbleChatLeft
            name="FastVisa Support"
            titleColor="text-primary-royal-blue"
            textColor="bg-chat-light-yellow"
            text="Hi there. Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible" />

          <BubbleChatRight text="Hi, I need help with something can you help me?" />

          <div className='flex justify-center mx-auto'>
            <p className={`duration-300 absolute bg-sticker-light-blue px-3 py-2 rounded-md text-sticker-deep-blue bottom-16
              ${popMessage ? 'opacity-1' : 'opacity-0'}`}>New Message</p>
          </div>

          <div className='bg-sticker-light-blue w-full text-sm p-3 rounded-md flex items-center gap-3 relative top-20 desktop:top-64'>
            <SpinnerChat />
            <p>Please wait while we connect you with one of our team ...</p>
          </div>
        </div>
        <div className='flex h-10 gap-3 mt-3 px-4 desktop:mt-6'>
          <input
            type="text"
            placeholder='Type a new messaage'
            className='w-full border pl-4 border-primary-gray rounded-md' />
          <button className='bg-primary-royal-blue rounded-md py-2 px-5 font-bold text-white'> Send </button>
        </div>

      </div>
    </>
  )
}
