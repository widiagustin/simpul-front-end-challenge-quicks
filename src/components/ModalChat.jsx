import React from 'react'
import iconArrowBack from '../assets/icons/arrow_back_gray.svg'
import iconClose from '../assets/icons/close_gray.svg'
import iconMore from '../assets/icons/more_horiz.svg'

export default function ModalChat ({ onClick }) {
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
        <div className='px-4 py-5 w-full h-[24rem] desktop:h-[35rem] overflow-auto'>
          <div className='flex place-content-end'>
            <div className='text-sm w-[411px] flex flex-col items-end'>
              <p className='text-chat-deep-purple font-bold'>You</p>
              <div className='bg-chat-light-purple p-[10px] rounded-[5px]'>
                <p>No worries. It will be completed ASAP. I've asked him yesterday</p>
                <p className='mt-3'>19:32</p>
              </div>
            </div>
          </div>
          <div className='flex place-content-end'>
            <div className='text-sm w-[411px] flex flex-col items-end'>
              <p className='text-chat-deep-purple font-bold'>You</p>
              <div className='bg-chat-light-purple p-[10px] rounded-[5px]'>
                <p>No worries. It will be completed ASAP. I've asked him yesterday</p>
                <p className='mt-3'>19:32</p>
              </div>
            </div>
          </div>
          <div className='flex place-content-end'>
            <div className='text-sm w-[411px] flex flex-col items-end'>
              <p className='text-chat-deep-purple font-bold'>You</p>
              <div className='bg-chat-light-purple p-[10px] rounded-[5px]'>
                <p>No worries. It will be completed ASAP. I've asked him yesterday</p>
                <p className='mt-3'>19:32</p>
              </div>
            </div>
          </div>
          <div className="h-3 border-b border-primary-gray text-center mt-7 mb-2">
            <span className="bg-white font-bold text-primary-gray px-7">Today June 09 2021</span>
          </div>
          <div className='flex gap-2 items-start self-start'>
            <div>
              <p className='text-sm text-chat-deep-orange'>Mary Hilda</p>
              <div className='flex gap-2 items-start'>
                <div className='text-sm w-[411px]'>
                  <div className='bg-chat-light-orange p-[10px] rounded-[5px]'>
                    <p>Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</p>
                    <p className='mt-3'>19:32</p>
                  </div>
                </div>
                <img src={iconMore} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-10 gap-3 mt-3 px-4 desktop:mt-6'>
          <input
            type="text"
            placeholder='Type a new messaage'
            className='w-full border pl-4 border-primary-gray rounded-md' />
          <button className='bg-primary-royal-blue rounded-md py-2 px-5 font-bold text-white'>Send</button>
        </div>
      </div>
    </>
  )
}
