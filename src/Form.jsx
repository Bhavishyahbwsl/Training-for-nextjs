import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        country: '',
        sports: []
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) =>{
        if(e.target.type === "checkbox"){
            const updatedArray = [...formData.sports];

            if(e.target.checked){
                if(!updatedArray.includes(e.target.value)){
                    updatedArray.push(e.target.value)
                }
            }else{
                const index = updatedArray.indexOf(e.target.value);
                if(index !== -1){
                    updatedArray.splice(index, 1)
                }
            }
            setFormData({
               ...formData,
                sports: updatedArray
            })
        }else{
            setFormData({
               ...formData,
               [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validateErros = {};

        if(!formData.firstName){
            validateErros.firstName = "First Name is required";
        }
        if(!formData.lastName){
            validateErros.lastName = "Last Name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            validateErros.email = 'Invalid email address';
        }
        if(formData.password || !formData.password){
            if(formData.password.length < 6){
                validateErros.password = "Minimum length must be at least 6 characters";
            }else if(!formData.password){
                validateErros.password = "Password is required";
            }
        }
        if(!formData.gender){
            validateErros.gender = "Gender is required";
        }
        if(!formData.country){
            validateErros.country = "Country is required";
        }
        if (formData.sports.length === 0) {
            validateErros.sports = "Please select at least one sport";
        }
        if(Object.keys(validateErros).length > 0){
            setErrors(validateErros);
        }else{
            setErrors({});
            console.log('Form submitted:', formData);
        }

    }

  return (
    <div className='bg-slate-700 flex justify-center items-center h-[100vh]'>
        <form action="" className="flex justify-center items-center flex-col bg-yellow-300 w-[30%] rounded-lg">
            <div className='m-4 flex flex-col w-[95%]'>
                <label htmlFor="firstName" className=' font-bold mb-2 mx-1 '>First name: </label>
                <input type="text" placeholder='Type your first name' className='border rounded-sm py-1 px-3 shadow-lg' name='firstName' value={formData.firstName} onChange={handleChange}/>
                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
            </div>
            <div className='m-4 flex flex-col w-[95%]'>
                <label htmlFor="lastName" className=' font-bold mb-2 mx-1 '>Last name: </label>
                <input type="text" placeholder='Type your last name' className='border rounded-sm py-1 px-3 shadow-lg' name='lastName' value={formData.lastName} onChange={handleChange}/>
                {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            </div>
            <div className='m-4 flex flex-col w-[95%]'>
                <label htmlFor="email" className=' font-bold mb-2 mx-1 '>Email: </label>
                <input type="email" placeholder='Type your email' className='border rounded-sm py-1 px-3 shadow-lg' name='email' value={formData.email} onChange={handleChange}/>
                {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className='m-4 flex flex-col w-[95%]'>
                <label htmlFor="password" className='font-bold mb-2 mx-1'>Password: </label>
                <input type="password" placeholder='Type your password' className='border rounded-sm py-1 px-3 shadow-lg' name='password' value={formData.password} onChange={handleChange}/>
                {errors.password && <span className="text-red-500">{errors.password}</span>}
            </div>
            <div className='m-4 flex flex-col w-[95%]'>
                <label htmlFor="gender" className='font-bold mb-2 mx-1 '>Gender: </label>
                <div className='mx-2'>
                    <input type="radio" id='male' name='gender' value='male' className='cursor-pointer' onChange={handleChange}/>
                    <label htmlFor='male' className='mr-2 cursor-pointer'>Male</label>

                    <input type="radio" id="female" name="gender" value="female"  className='cursor-pointer' onChange={handleChange}/>
                    <label htmlFor="female" className="mr-2 cursor-pointer">Female</label>

                    <input type="radio" id="other" name="gender" value="other" className='cursor-pointer' onChange={handleChange}/>
                    <label htmlFor="other" className="mr-2 cursor-pointer">Prefer not to say</label>
                </div>
                {errors.gender && <span className="text-red-500">{errors.gender}</span>}
            </div>
            <div className='m-4 flex w-[95%]'>
                <label htmlFor="country" className='font-bold mb-2 mx-1'>
                    Country: 
                </label>
                <select name="country" id="country" className='w-full border rounded-md cursor-pointer pl-3' onChange={handleChange}>
                    <option value="" disabled selected>Select Your Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                    <option value="russia">Russia</option>
                </select>
                {errors.country && <span className="text-red-500">{errors.country}</span>}
            </div>
            <div className='mb-4 flex flex-col w-[95%]'>
                <label htmlFor="sports" className='font-bold mb-2 mx-1'>Favorite Sports: </label>

                <div className='flex flex-wrap items-center pl-3 '>
                    <input type="checkbox" name="cricekt" id="cricket" value="cricket" onChange={handleChange}/>
                    <label htmlFor="cricket" className='mr-2 cursor-pointer' >Cricket</label>
                    <input type="checkbox" name="badminton" id="badminton" value="badminton" onChange={handleChange}/>
                    <label htmlFor="badminton" className='mr-2 cursor-pointer'>Badminton</label>
                    <input type="checkbox" name="tabletennis" id="tabletennis" value="tabeltennis" onChange={handleChange}/>
                    <label htmlFor="tabletennis" className='mr-2 cursor-pointer'>Table Tennis</label>
                    <input type="checkbox" name="football" id="football" value="football" onChange={handleChange}/>
                    <label htmlFor="football" className='mr-2 cursor-pointer'>Football</label>
                </div>
                {errors.sports && <span className="text-red-500">{errors.sports}</span>}
            </div>
            <button type="submit" className='border rounded-md bg-black text-white px-6 py-1' onClick={handleSubmit}>Submit</button>
        </form>
    </div>

  )
}

export default Form