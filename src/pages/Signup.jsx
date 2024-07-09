import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const StarbucksSignupForm = ({setIssignin}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  setIssignin(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log({
      fullName,
      email,
      dob,
      username,
      password,
      receiveEmails,
      agreeTerms
    });
    // Reset form fields or redirect to a success page
  };

  return (
    <div className="max-w-md mx-auto mt-3 bg-white p-6 h-full shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create an Account - Starbucks® Rewards</h2>
      <p className='text-green'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.</p>

      <form onSubmit={handleSubmit}>
        <h1 className='text-2xl font-semibold'>Personal Details</h1>

        {/* Personal Information */}
        <div className="mb-4">
          
          <input
          placeholder='Full Name'
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
         
          <input
            type="text"
            placeholder='Username'
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <h1 className='text-2xl font-semibold'>Account Secuirty</h1>
        <div className="mb-4">
         
          <input
            type="email"
            placeholder='Email Address *'
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        

        {/* Account Security */}
        

        <div className="mb-4">
          
          <input
            type="password"
            placeholder='Enter Password'
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,25}"
            title="Must contain at least one number, one uppercase, one lowercase letter, one special character, and between 8 to 25 characters"
            required
          />
        </div>
        <p className='text-green my-4'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              checked={receiveEmails}
              onChange={() => setReceiveEmails(!receiveEmails)}
            />
            <span className="text-sm text-gray-700">Yes, I’d like email from Starbucks</span>
          </label>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <span className="text-sm text-gray-700">
              I agree to the Starbucks® Rewards Terms and the Starbucks Card Terms, and have read the Starbucks Privacy Statement.
            </span>
          </label>
        </div>
       <div className='flex flex-col'>

       <Link className='text-green mb-3' to='/signin'>Already Have an Account?</Link>
        {/* Communication Preferences */}
        <p className='text-green'>If No?</p>
        <button
          className="bg-green text-black px-4 py-2 rounded-md hover:bg-green-600"
        >
          Create Account
        </button>
       </div>
       
      </form>
    </div>
  );
};

export default StarbucksSignupForm;
