import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import SearchBar from './SearchBar'
import Inbox from './Inbox'
import iconUser from '../assets/icons/person_white.svg'
import iconUserGray from '../assets/icons/person_gray.svg'
import ModalChat from './ModalChat'
import Spinner from './Spinner'
import ModalChatSupport from './ModalChatSupport'
import axios from 'axios'

export default function ModalInbox () {
  const [isLoading, setIsLoading] = useState(false)
  const [chat, setChat] = useState(false)
  const [chatSupport, setChatSupport] = useState(false)
  const [inbox, setInbox] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
      getApi()
    }, 2000);
  }, [])

  const getApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(res => {
      setInbox(res.data);
    })
  }

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
      <div className='bg-primary-gray w-[50px] h-[50px] desktop:w-[60px] desktop:h-[60px] rounded-full absolute top-3 right-3 -z-30' />
      <Modal>
        {
          !isLoading ?
            <>
              <SearchBar />
              <div className='flex mx-auto text-center justify-center items-center h-full mt-[-66px]'>
                <div className='flex-row'>
                  <Spinner />
                  <p className='text-primary-gray mt-3 font-bold'>Loading Chats ... </p>
                </div>
              </div>
            </>
            :
            <>
              {(() => {
                if (chat) {
                  return <ModalChat onClick={() => handleChat("showList")} />
                } else if (chatSupport) {
                  return <ModalChatSupport onClick={() => handleChat("showList")} />
                } else {
                  return (
                    <>
                      <SearchBar />
                      <div className='overflow-auto h-[28rem] desktop:h-[41rem]'>
                        <Inbox
                          title="FastVisa Support"
                          date="January 1, 2021 19:10"
                          text="Hey there! Welcome to your inbox!"
                          onClick={() => handleChat("showChatSupport")}>
                          <div className='w-[34px] h-[34px] bg-primary-royal-blue rounded-full text-center flex items-center justify-center'>
                            <img src={iconUser} alt="" width={12} height={12} />
                          </div>
                        </Inbox>
                        {inbox.map(res => (
                          <div key={res.id}>
                            <Inbox
                              title={res.name}
                              name={res.email}
                              date="January 1, 2021 19:10"
                              text={res.body}
                              onClick={() => handleChat("showChat")}>
                              <div className='w-[34px] h-[34px] bg-primary-royal-blue rounded-full text-center flex items-center justify-center'>
                                <img src={iconUser} alt="" width={12} height={12} />
                              </div>
                              <div className='w-[34px] h-[34px] bg-primary-gray-3 rounded-full text-center flex items-center justify-center'>
                                <img src={iconUserGray} alt="" width={12} height={12} />
                              </div>
                            </Inbox>
                          </div>
                        ))}
                      </div>
                    </>
                  )

                }
              })()}

            </>
        }
      </Modal>
    </>
  )
}
