import React from 'react'

const Password = () => {
  return (
    <div className='m-4 flex flex-col w-[95%]'>
      <label htmlFor="password" className='font-bold mb-2 mx-1'>Password: </label>
      <input type="password" placeholder='Type your password' className='border rounded-sm py-1 px-3 shadow-lg'/>
    </div>
  )
}

export default Password