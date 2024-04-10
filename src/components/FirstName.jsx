import React from 'react'

const FirstName = () => {
  return (
    <div className='m-4 flex flex-col w-[95%]'>
      <label htmlFor="firstName" className=' font-bold mb-2 mx-1 '>First name: </label>
      <input type="text" placeholder='Type your first name' className='border rounded-sm py-1 px-3 shadow-lg'/>
    </div>
  )
}

export default FirstName