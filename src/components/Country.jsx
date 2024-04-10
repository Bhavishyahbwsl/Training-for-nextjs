import React from 'react'

const Country = () => {
  return (
    <div className='m-4 flex w-[95%]'>
        <label htmlFor="country" className='font-bold mb-2 mx-1'>
            Country: 
        </label>
        <select name="country" id="country" className='w-full border rounded-md cursor-pointer pl-3'>
            <option value="" disabled selected>Select Your Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
            <option value="china">China</option>
            <option value="russia">Russia</option>
        </select>
    </div>
  )
}

export default Country