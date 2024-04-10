import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    sports: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? [...prevData[name], value] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validate First Name
    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First name is required';
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last name is required';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    // Validate Password
    if (formData.password.trim().length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    // Validate Gender
    if (!formData.gender) {
      validationErrors.gender = 'Please select a gender';
    }

    // Validate Country
    if (!formData.country) {
      validationErrors.country = 'Please select a country';
    }

    // Validate Favorite Sports
    if (formData.sports.length === 0) {
      validationErrors.sports = 'Please select at least one sport';
    }

    // If there are validation errors, set them in state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no validation errors, submit the form
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='bg-slate-700 flex justify-center items-center h-[100vh]'>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col bg-yellow-300 w-[30%] rounded-lg">
        {/* First Name */}
        <div className='m-4 flex flex-col w-[95%]'>
          <label htmlFor="firstName" className='font-bold mb-2 mx-1'>First name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Type your first name'
            className={`border rounded-sm py-1 px-3 shadow-lg ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className='m-4 flex flex-col w-[95%]'>
          <label htmlFor="lastName" className='font-bold mb-2 mx-1'>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Type your last name'
            className={`border rounded-sm py-1 px-3 shadow-lg ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
        </div>

        {/* Email */}
        <div className='m-4 flex flex-col w-[95%]'>
          <label htmlFor="email" className='font-bold mb-2 mx-1'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Type your email'
            className={`border rounded-sm py-1 px-3 shadow-lg ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className='m-4 flex flex-col w-[95%]'>
          <label htmlFor="password" className='font-bold mb-2 mx-1'>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Type your password'
            className={`border rounded-sm py-1 px-3 shadow-lg ${errors.password ? 'border-red-500' : ''}`}
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>

        {/* Gender */}
        <div className='m-4 flex flex-col w-[95%]'>
          <label htmlFor="gender" className='font-bold mb-2 mx-1'>Gender:</label>
          <div className='mx-2'>
            <input type="radio" id='male' name='gender' value='male' onChange={handleChange} className='cursor-pointer' />
            <label htmlFor='male' className='mr-2 cursor-pointer'>Male</label>

            <input type="radio" id="female" name="gender" value="female" onChange={handleChange} className='cursor-pointer' />
            <label htmlFor="female" className="mr-2 cursor-pointer">Female</label>

            <input type="radio" id="other" name="gender" value="other" onChange={handleChange} className='cursor-pointer' />
            <label htmlFor="other" className="mr-2 cursor-pointer">Prefer not to say</label>
          </div>
          {errors.gender && <span className="text-red-500">{errors.gender}</span>}
        </div>

        {/* Country */}
        <div className='m-4 flex w-[95%]'>
          <label htmlFor="country" className='font-bold mb-2 mx-1'>Country:</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full border rounded-md cursor-pointer pl-3 ${errors.country ? 'border-red-500' : ''}`}
          >
            <option value="" disabled>Select Your Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
            <option value="china">China</option>
            <option value="russia">Russia</option>
          </select>
          {errors.country && <span className="text-red-500">{errors.country}</span>}
        </div>

        {/* Favorite Sports */}
        <div className='mb-4 flex flex-col w-[95%]'>
          <label htmlFor="sports" className='font-bold mb-2 mx-1'>Favorite Sports:</label>
          <div className='flex flex-wrap items-center pl-3 '>
            <input type="checkbox" name="sports" id="cricket" value="cricket" onChange={handleChange} />
            <label htmlFor="cricket" className='mr-2 cursor-pointer'>Cricket</label>

            <input type="checkbox" name="sports" id="badminton" value="badminton" onChange={handleChange} />
            <label htmlFor="badminton" className='mr-2 cursor-pointer'>Badminton</label>

            <input type="checkbox" name="sports" id="tabletennis" value="tabletennis" onChange={handleChange} />
            <label htmlFor="tabletennis" className='mr-2 cursor-pointer'>Table Tennis</label>

            <input type="checkbox" name="sports" id="football" value="football" onChange={handleChange} />
            <label htmlFor="football" className='mr-2 cursor-pointer'>Football</label>
          </div>
          {errors.sports && <span className="text-red-500">{errors.sports}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className='border rounded-md bg-black text-white px-6 py-1'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
