import React, { useState } from 'react'
import iconMore from '../assets/icons/more_horiz.svg'

export default function DropdownMenu ({ position }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleOpen = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className='relative'>

      <button id="dropdownMenuIconHorizontalButton"
        type="button"
        onClick={handleOpen}>
        <img src={iconMore}
          alt=""
          className='cursor-pointer' />
      </button>

      {showDropdown ?
        <div className={`absolute desktop:left-0 z-10 w-32 bg-white rounded  shadow border border-subgray ${position}`}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 divide-y divide-subgray">
            <li>
              <p className="block py-2 px-4 cursor-pointer text-primary-royal-blue hover:bg-gray-100">Edit</p>
            </li>
            <li>
              <p className="block py-2 px-4 cursor-pointer text-indicator-indian-red hover:bg-gray-100">Delete</p>
            </li>
          </ul>
        </div>
        :
        ""
      }


    </div>
  )
}
