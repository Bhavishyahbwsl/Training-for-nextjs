import React, { useState } from 'react';

const Gender = () => {

    const [selectedGender, setSelectedGender] = useState("");

    const handleselection = (e) =>{
        setSelectedGender(e.target.value);
    }

  return (
    <div className='m-4 flex flex-col w-[95%]'>
      <label htmlFor="gender" className='font-bold mb-2 mx-1 '>Gender: </label>
      <div className='mx-2'>
        <input type="radio" id='male' name='gender' value='male' checked={selectedGender === 'male'} onChange={handleselection} className='cursor-pointer'/>
        <label htmlFor='male' className='mr-2 cursor-pointer'>Male</label>

        <input type="radio" id="female" name="gender" value="female" checked={selectedGender === 'female'} onChange={handleselection} className='cursor-pointer'/>
        <label htmlFor="female" className="mr-2 cursor-pointer">Female</label>

        <input type="radio" id="other" name="gender" value="other" checked={selectedGender === 'other'} onChange={handleselection} className='cursor-pointer'/>
        <label htmlFor="other" className="mr-2 cursor-pointer">Prefer not to say</label>
      </div>
    </div>
  );
}

export default Gender;
