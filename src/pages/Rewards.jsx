import React, { useEffect, useState } from 'react';
import starlogo from '../assets/starlogo.png';
import step1 from '../assets/step1.webp';
import step2 from '../assets/step2.webp';
import step3 from '../assets/step3.webp';
import star25 from '../assets/star25.webp';
import star100 from '../assets/star100.webp';
import star200 from '../assets/star200.webp';
import star300 from '../assets/star300.webp';
import star400 from '../assets/star400.webp';

const Rewards = () => {
  const [selectedStar, setSelectedStar] = useState('25★Stars'); // Default to 25★Stars

  useEffect(() => {
    const header = document.getElementById('rewards-header');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('sticky', 'top-0', 'z-10');
      } else {
        header.classList.remove('sticky', 'top-0', 'z-10');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleStarClick = (stars) => {
    setSelectedStar(stars);
  };

  return (
    <div>
      {/* Sticky Header */}
      <div
        id='rewards-header'
        className='bg-black h-10 w-full flex justify-start items-center fixed top-0 z-10'
      >
        <h1 className='text-white font-bold p-2'>STARBUCKS® REWARDS</h1>
      </div>

      {/* Main Content */}
      <section
        className='bg-light-beige bg-no-repeat bg-cover bg-center min-h-screen text-3xl font-semibold flex items-center justify-start p-8 md:p-16 gap-y-8'
        style={{ backgroundImage: `url(${starlogo})` }}
      >
        <div className='max-w-screen-lg mx-auto'>
          <h1>FREE COFFEE</h1>
          <h1>IS A TAP AWAY</h1>
          <p className='text-lg font-semibold'>
            Join now to start earning Rewards.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className='py-16 px-4 md:px-12 lg:px-24'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center gap-8'>
          {/* Step 1 */}
          <div className='flex flex-col items-center text-center shadow-md p-6'>
            <img src={step1} alt='step1' className='h-20 w-20 mb-4' />
            <h2 className='font-semibold text-lg mb-2'>Create an account</h2>
            <p className='text-gray-700'>
              To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.
            </p>
          </div>

          {/* Step 2 */}
          <div className='flex flex-col items-center text-center shadow-md p-6'>
            <img src={step2} alt='step2' className='h-20 w-20 mb-4' />
            <h2 className='font-semibold text-lg mb-2'>Order and pay how you’d like</h2>
            <p className='text-gray-700'>
              Use cash, credit/debit card, or save time and pay right through the app. You’ll collect Stars all ways. Learn how.
            </p>
          </div>

          {/* Step 3 */}
          <div className='flex flex-col items-center text-center shadow-md p-6'>
            <img src={step3} alt='step3' className='h-20 w-20 mb-4' />
            <h2 className='font-semibold text-lg mb-2'>Earn Stars, get Rewards</h2>
            <p className='text-gray-700'>
              As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className='flex justify-center items-center bg-gray-100 py-16 px-4 md:px-12 lg:px-24'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold mb-8'>Get your favorites for free</h1>
          <div className='flex justify-between items-center mb-4'>
            {/* Star Navigation */}
            <div className='flex gap-4'>
              <div onClick={() => handleStarClick('25★Stars')} className={`cursor-pointer ${selectedStar === '25★Stars' ? 'font-bold text-green-600 text-[20px] hover:underline underline-offset-8' : 'text-gray-500 text-[20px] hover:text-green-600'}`}>
                25★
              </div>
              <div onClick={() => handleStarClick('100★Stars')} className={`cursor-pointer ${selectedStar === '100★Stars' ? 'font-bold text-green-600 text-[20px] hover:underline underline-offset-8' : 'text-gray-500 text-[20px] hover:text-green-600'}`}>
                100★
              </div>
              <div onClick={() => handleStarClick('200★Stars')} className={`cursor-pointer ${selectedStar === '200★Stars' ? 'font-bold text-green-600 text-[20px] hover:underline underline-offset-8' : 'text-gray-500 text-[20px] hover:text-green-600'}`}>
                200★
              </div>
              <div onClick={() => handleStarClick('300★Stars')} className={`cursor-pointer ${selectedStar === '300★Stars' ? 'font-bold text-green-600  text-[20px] hover:underline underline-offset-8' : 'text-gray-500 text-[20px] hover:text-green-600'}`}>
                300★
              </div>
              <div onClick={() => handleStarClick('400★Stars')} className={`cursor-pointer ${selectedStar === '400★Stars' ? 'font-bold text-green-600  text-[20px] hover:underline underline-offset-8' : 'text-gray-500  text-[20px] hover:text-green-600'}`}>
                400★
              </div>
            </div>
          </div>

          {/* Selected Star Information */}
          {selectedStar && (
            <div>
              
              <div className='flex justify-center items-center bg-light-green'>
                <img src={selectedStar === '25★Stars' ? star25 : selectedStar === '100★Stars' ? star100 : selectedStar === '200★Stars' ? star200 : selectedStar === '300★Stars' ? star300 : star400} alt={selectedStar} className='h-40 w-40 mr-8' />
                <p className='text-gray-700'>
                  Customize your drink. Make your drink just right with an extra espresso shot, nondairy milk, or a dash of your favorite syrup.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      

    
    </div>
  );
};

export default Rewards;
