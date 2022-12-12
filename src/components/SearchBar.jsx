import React from 'react'
import searchIcon from '../assets/icons/search_gray.svg'

export default function SearchBar () {
  return (
    <>
      <div className='px-5 pt-5 text-center'>
        <div className='w-3 inline relative'>
          <img src={searchIcon} alt="" width={12} height={12} className="absolute right-10 top-1" />
          <input className='w-[500px] desktop:w-[666px] border border-primary-gray-2 rounded-[5px] placeholder-[#333] px-10 bg-white'
            placeholder='Search' />
        </div>
      </div>
    </>

  )
}
