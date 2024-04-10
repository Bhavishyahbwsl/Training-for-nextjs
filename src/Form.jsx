import React from 'react'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import Password from './components/Password'
import Email from './components/Email'
import Gender from './components/Gender'
import Country from './components/Country'
import Sports from './components/Sports'

const Form = () => {
  return (
    <div className='bg-slate-700 flex justify-center items-center h-[100vh]'>
        <form action="" className="flex justify-center items-center flex-col bg-yellow-300 w-[30%] rounded-lg">
            <FirstName/>
            <LastName/>
            <Email/>
            <Password/>
            <Gender/>
            <Country />
            <Sports/>
            <button type="submit" className='border rounded-md bg-black text-white px-6 py-1'>Submit</button>
        </form>
    </div>

  )
}

export default Form