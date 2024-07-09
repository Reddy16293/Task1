import React, { useEffect } from 'react';

const Signin = ({ setIssignin }) => {
  useEffect(() => {
    setIssignin(true);
  }, [setIssignin]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="font-bold text-2xl mb-2">Sign in or create an account</div>
      <div className="text-gray-600 mb-6">* indicates required field</div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username or email address *"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password *"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center">
            <input type="checkbox" id="keepMeSignedIn" className="mr-2" />
            <label htmlFor="keepMeSignedIn" className="text-gray-600">Keep me signed in.</label>
          </div>
          <div className="text-gray-600 text-sm mb-4">
            <span>Details </span>
            <a href="#" className="text-green hover:underline">Learn about staying signed in</a>
          </div>
          <div className="flex flex-col gap-2 text-sm mb-4">
            <a href="#" className="text-green hover:underline">Forgot your username?</a>
            <a href="#" className="text-green hover:underline">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="bg-dark-green text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="text-center mt-6">
        <div className="font-bold text-lg mb-2">JOIN STARBUCKS® REWARDS</div>
        <div className="text-gray-600 mb-4">
          Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.
        </div>
        <button
          className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Join now
        </button>
      </div>
    </div>
  );
};

export default Signin;
