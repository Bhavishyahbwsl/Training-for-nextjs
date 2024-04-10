import React from 'react'

const LastName = () => {
  return (
    <div className='m-4 flex flex-col w-[95%]'>
      <label htmlFor="lastName" className=' font-bold mb-2 mx-1 '>Last name: </label>
      <input type="text" placeholder='Type your last name' className='border rounded-sm py-1 px-3 shadow-lg'/>
    </div>
  )
}

export default LastName