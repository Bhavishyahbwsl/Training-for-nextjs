import React, { useState } from 'react'

const Sports = () => {


  return (
    <div className='mb-4 flex flex-col w-[95%]'>
        <label htmlFor="sports" className='font-bold mb-2 mx-1'>Favorite Sports: </label>

        <div className='flex flex-wrap items-center pl-3 '>
            <input type="checkbox" name="" id="" />
            <label htmlFor="cricket" className='mr-2 cursor-pointer' >Cricket</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="badminton" className='mr-2 cursor-pointer'>Badminton</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="tabletennis" className='mr-2 cursor-pointer'>Table Tennis</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="football" className='mr-2 cursor-pointer'>Football</label>
        </div>
    </div>
  )
}

export default Sports