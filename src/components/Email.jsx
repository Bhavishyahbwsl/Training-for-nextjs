import React from 'react'

const Email = () => {
  return (
    <div className='m-4 flex flex-col w-[95%]'>
      <label htmlFor="email" className=' font-bold mb-2 mx-1 '>Email: </label>
      <input type="email" placeholder='Type your email' className='border rounded-sm py-1 px-3 shadow-lg'/>
    </div>
  )
}

export default Email