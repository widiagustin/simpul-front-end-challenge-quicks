import React, { useEffect, useState } from 'react'
import IconButtonText from './components/IconButtonText'
import searchIcon from '../src/assets/icons/search.svg'
import IconButton from './components/IconButton'
import questionAnswer from '../src/assets/icons/question_answer.svg'
import questionAnswerWhite from '../src/assets/icons/question_answer_white.svg'
import cloudLightning from '../src/assets/icons/cloud-lightning.svg'
import IconReaderMode from '../src/assets/icons/chrome_reader_mode.svg'
import IconReaderModeWhite from '../src/assets/icons/chrome_reader_mode_white.svg'
import ModalInbox from './components/ModalInbox'
import ModalTask from './components/ModalTask'

function App () {
  const [subButton, setSubButton] = useState(false)
  const [button, setButton] = useState(false)
  const [btnTask, setBtnTask] = useState(false)

  const handleButton = () => {
    setSubButton(!subButton)
  }

  const handleSubButton = (params) => {
    if (params === "showInbox") {
      setButton(!button)
      setBtnTask(false)
    } else if (params === "showTask") {
      setBtnTask(!btnTask)
      setButton(false)
    }
  }

  return (
    <>
      <div className='absolute right-0 w-3/4'>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-[26px] pointer-events-none">
            <img src={searchIcon} alt="" />
          </div>
          <input type="search" id="default-search"
            className="block bg-primary-gray h-[58px] w-full right-0 pl-14 text-white" />
        </div>
      </div>
      <div className='absolute bottom-0 right-0 p-8 flex items-end gap-[26px]'>
        {
          subButton ?
            <>
              <IconButtonText
                color={`${btnTask ? "bg-indicator-orange" : "bg-white"}`}
                text={btnTask ? "" : "Task"}
                icon={btnTask ? IconReaderModeWhite : IconReaderMode}
                onClick={() => handleSubButton("showTask")} />
              <div className='relative'>
                <IconButtonText
                  color={`${button ? "bg-indicator-slate-blue" : "bg-white"}`}
                  text={button ? "" : "Inbox"}
                  icon={button ? questionAnswerWhite : questionAnswer}
                  onClick={() => handleSubButton("showInbox")} />

                {(() => {
                  if (button) {
                    return <ModalInbox />
                  } else if (btnTask) {
                    return <ModalTask />
                  }
                  else
                    return null
                })()}
              </div>
            </>
            : ""
        }
        <IconButton
          color={`bg-primary-royal-blue ${button && btnTask ? "hidden" : ""}`}
          size="w-[68px] h-[68px]"
          icon={cloudLightning}
          onClick={handleButton} />
      </div>
    </>
  )
}

export default App
