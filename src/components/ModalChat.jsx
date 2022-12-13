import React, { useCallback, useEffect, useRef, useState } from 'react'
import iconArrowBack from '../assets/icons/arrow_back_gray.svg'
import iconClose from '../assets/icons/close_gray.svg'
import BubbleChatLeft from './BubbleChatLeft'
import BubbleChatRight from './BubbleChatRight'

export default function ModalChat ({ onClick }) {
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

  const handleChat = (params) => {
    if (params === "showList") {
      setChat(false)
      setChatSupport(false)
    } else if (params === "showChat") {
      setChat(true)
    } else if (params === "showChatSupport") {
      setChatSupport(true)
    }
  }

  return (
    <>
      <div className='px-5 pt-5'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-[14px]'>
            <img src={iconArrowBack} alt="" onClick={onClick} className="cursor-pointer" />
            <div>
              <p className='font-bold text-primary-royal-blue'>I-589-AMARKHIL, Obaidullah[Affirmative Filling with ZHN]</p>
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

          <BubbleChatRight text="No worries. It will be completed ASAP. I've asked him yesterday" />

          <div className="h-3 border-b border-primary-gray text-center mt-7 mb-2">
            <span className="bg-white font-bold text-primary-gray px-7">Today June 09 2021</span>
          </div>

          <BubbleChatLeft
            name="Mary Hilda"
            titleColor="text-chat-deep-orange"
            textColor="bg-chat-light-orange"
            text="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks." />

          <BubbleChatRight text="Please contact Mary for questions regarding the case bcs she will be managin your forms now on! Thanks Mary" />

          <div className='flex justify-center mx-auto'>
            <p className={`duration-300 absolute bg-sticker-light-blue px-3 py-2 rounded-md text-sticker-deep-blue bottom-16
              ${popMessage ? 'opacity-1' : 'opacity-0'}`}>New Message</p>
          </div>

          <div className="h-3 border-b border-indicator-indian-red text-center mt-7 mb-2">
            <span className="bg-white font-bold text-indicator-indian-red px-7">New Message</span>
          </div>

          <BubbleChatLeft
            name="Obaidullah Amarkhil"
            titleColor="text-chat-deep-green"
            textColor="bg-chat-light-green"
            text="Morning. I'll try to do them. Thanks" />

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
