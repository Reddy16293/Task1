import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col gap-y-5'>

      {/* First Section */}
      <section className='flex h-[417px]'>
        <div className='flex flex-col justify-center items-center w-1/2 bg-orange-100'>
          <div className='font-bold mb-[50px]'>
            Enjoy half off your first drink
          </div>
          <div className='flex mb-2 w-[340px] justify-center text-center font-semibold'>
            <p>Download the app for half off a handcrafted drink during your first week.* Plus, tap into mobile ordering, exclusive offers and so much more.</p>
          </div>
          <Link to='/signin'>
            <button className='mb-2 text-black border border-black bg-blue-200 rounded-[40px] py-1 px-2'>Sign up here</button>
          </Link>
        </div>
        <div className='w-1/2'>
          <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92890.jpg' alt='First Section' className='object-cover w-full h-full' />
        </div>
      </section>

      {/* Second Section */}
      <section className='flex h-[417px]'>
        <div className='w-1/2'>
          <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92996.jpg' alt='Second Section' className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col justify-center items-center w-1/2 bg-pink-300'>
          <div className='font-bold mb-[50px]'>
            Enjoy half off your first drink
          </div>
          <div className='flex mb-2 w-[340px] justify-center text-center font-semibold'>
            <p>Download the app for half off a handcrafted drink during your first week.* Plus, tap into mobile ordering, exclusive offers and so much more.</p>
          </div>
          <Link to='/signin'>
            <button className='mb-2 text-black border border-black bg-blue-200 rounded-[40px] py-1 px-2'>Sign up here</button>
          </Link>
        </div>
      </section>

      {/* Third Section */}
      <section className='flex h-[417px]'>
        <div className='flex flex-col justify-center items-center w-1/2 bg-orange-100'>
          <div className='font-bold mb-[50px]'>
            Enjoy half off your first drink
          </div>
          <div className='flex mb-2 w-[340px] justify-center text-center font-semibold'>
            <p>Download the app for half off a handcrafted drink during your first week.* Plus, tap into mobile ordering, exclusive offers and so much more.</p>
          </div>
          <Link to='/signin'>
            <button className='mb-2 text-black border border-black bg-blue-200 rounded-[40px] py-1 px-2'>Sign up here</button>
          </Link>
        </div>
        <div className='w-1/2'>
          <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92707.jpg' alt='Third Section' className='object-cover w-full h-full' />
        </div>
      </section>

      {/* Fourth Section */}
      <section className='flex h-[417px]'>
        <div className='w-1/2'>
          <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-92998.jpg' alt='Fourth Section' className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col justify-center items-center w-1/2 bg-orange-100'>
          <div className='font-bold mb-[50px]'>
            Enjoy half off your first drink
          </div>
          <div className='flex mb-2 w-[340px] justify-center text-center font-semibold'>
            <p>Download the app for half off a handcrafted drink during your first week.* Plus, tap into mobile ordering, exclusive offers and so much more.</p>
          </div>
          <Link to='/signin'>
            <button className='mb-2 text-black border border-black bg-blue-200 rounded-[40px] py-1 px-2'>Sign up here</button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
