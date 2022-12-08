import React from 'react'

export default function Button ({ name }) {
  return (
    <>
      <button className='bg-primary-royal-blue px-4 py-2 rounded-md text-white font-bold'>
        <p>{name}</p>
      </button>
    </>
  )
}
