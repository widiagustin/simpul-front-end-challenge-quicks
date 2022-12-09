import React, { useEffect, useState } from 'react'
import IconButtonText from './components/IconButtonText'
import searchIcon from '../src/assets/icons/search.svg'
import IconButton from './components/IconButton'
import questionAnswer from '../src/assets/icons/question_answer.svg'
import questionAnswerWhite from '../src/assets/icons/question_answer_white.svg'
import cloudLightning from '../src/assets/icons/cloud-lightning.svg'
import IconReaderMode from '../src/assets/icons/chrome_reader_mode.svg'
import SearchBar from './components/SearchBar'
import Modal from './components/Modal'
import Inbox from './components/Inbox'
import iconUser from '../src/assets/icons/person_white.svg'
import iconUserGray from '../src/assets/icons/person_gray.svg'

function App () {
  const [subButton, setSubButton] = useState(false)
  const [button, setButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2000);
  }, [])

  const handleButton = () => {
    setSubButton(!subButton)
  }

  const handleSubButton = () => {
    setButton(!button)
  }

  return (
    <>
      <div className='absolute right-0 w-3/4'>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-[26px] pointer-events-none">
            <img src={searchIcon} alt="" srcset="" />
          </div>
          <input type="search" id="default-search"
            className="block bg-primary-gray h-[58px] w-full right-0 pl-14 text-white" />
        </div>
      </div>
      <div className='absolute bottom-0 right-0 p-8 flex items-end gap-[26px]'>
        {console.log(button)}
        {
          subButton ?
            <>
              <IconButtonText
                color="bg-white"
                text={button ? "" : "Task"}
                icon={IconReaderMode}
                onClick={''} />
              <div className='relative'>
                <IconButtonText
                  color={`${button ? "bg-indicator-slate-blue" : "bg-white"}`}
                  text={button ? "" : "Inbox"}
                  icon={button ? questionAnswerWhite : questionAnswer}
                  onClick={handleSubButton} />
                {button ?
                  <>
                    <div className='bg-primary-gray w-[50px] h-[50px] desktop:w-[60px] desktop:h-[60px] rounded-full absolute top-3 right-3 -z-30'></div>
                    <Modal>
                      <div className='px-5 pt-5 text-center'>
                        <SearchBar />
                        {
                          !isLoading ?
                            <div className='flex mx-auto text-center justify-center items-center h-full mt-[-66px]'>
                              <div className='flex-row'>
                                <svg className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <p className='text-primary-gray mt-3 font-bold'>Loading Chats ... </p>
                              </div>
                            </div>
                            :
                            <>
                              <Inbox
                                title="109220-Naturalization"
                                name="Cameron Phillips"
                                date="January 1, 2021 19:10"
                                text="Please check this out!"
                                onClick={''}>
                                <div className='w-[34px] h-[34px] bg-primary-royal-blue rounded-full text-center flex items-center justify-center'>
                                  <img src={iconUser} alt="" width={12} height={12} />
                                </div>
                                <div className='w-[34px] h-[34px] bg-primary-gray-3 rounded-full text-center flex items-center justify-center'>
                                  <img src={iconUserGray} alt="" width={12} height={12} />
                                </div>
                              </Inbox>
                              <Inbox
                                title="109220-Naturalization"
                                name="Cameron Phillips"
                                date="January 1, 2021 19:10"
                                text="Please check this out!">
                                <div className='w-[34px] h-[34px] bg-primary-royal-blue rounded-full text-center flex items-center justify-center'>
                                  <img src={iconUser} alt="" width={12} height={12} />
                                </div>
                                <div className='w-[34px] h-[34px] bg-primary-gray-3 rounded-full text-center flex items-center justify-center'>
                                  <img src={iconUserGray} alt="" width={12} height={12} />
                                </div>
                              </Inbox>
                            </>
                        }
                      </div>
                    </Modal>
                  </>
                  : ""}
              </div>
            </>
            : ""
        }
        <IconButton
          color={`bg-primary-royal-blue ${button ? "hidden" : ""}`}
          size="w-[68px] h-[68px]"
          icon={cloudLightning}
          onClick={handleButton} />
      </div>
    </>
  )
}

export default App
