import React from 'react';
import Slider from 'react-slick';
import './gift.css'; // Import CSS file for arrow styles and additional styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const pics = [
  "https://cdn.pixabay.com/photo/2015/08/11/08/27/coupon-883645_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/18/15/47/card-1835447_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/23/21/54/christmas-6819716_640.jpg",
  "https://tse4.mm.bing.net/th?id=OIP.Orq6X7NKar-7xoHP8gvw8wHaHa&pid=Api&P=0&h=180",
  "https://cdn.pixabay.com/photo/2017/12/13/00/23/christmas-3015776_640.jpg",
  "https://media.gettyimages.com/id/1235959060/photo/a-starbucks-gift-card-arranged-in-new-york-u-s-on-friday-oct-15-2021-an-economy-hamstrung-by.jpg?s=612x612&w=0&k=20&c=Y8fvlvqdqyYWiOT7NALegJSLy4yTwzlGW_htyVU-fZA=",
  "https://media.gettyimages.com/id/458674999/photo/gift-cards.jpg?s=612x612&w=0&k=20&c=sbx_czyZwZaeDB6DfdWELhuGYV8WBecw7tfZluv-qqw=",
  "https://media.gettyimages.com/id/1235958964/photo/a-starbucks-gift-card-arranged-in-new-york-u-s-on-friday-oct-15-2021-an-economy-hamstrung-by.jpg?s=612x612&w=0&k=20&c=H_NBhDJ_AjqX9RnFK5iSJ8C3VLCQo90vhvRarhPpmSs=",
  "https://media.gettyimages.com/id/458953949/photo/gift-cards.jpg?s=612x612&w=0&k=20&c=fptlQG765ZbaHsdOoC92O-TE7Hxhu-HtQ0KNSobPLdE=",
  "https://media.gettyimages.com/id/1235958716/photo/a-starbucks-gift-card-arranged-in-the-brooklyn-borough-of-new-york-u-s-on-friday-oct-15-2021.jpg?s=612x612&w=0&k=20&c=29YFFqw3kxj86e2knGFZUqatAFf4PSIivcO6uJDGRO8=",
  "https://media.gettyimages.com/id/513703863/photo/gift-cards.jpg?s=612x612&w=0&k=20&c=Aq_mwBN83M6M9c4ldlNxjoX6ehkgLwS0hevfMOsSpOg=",
  "https://media.gettyimages.com/id/1235959208/photo/a-starbucks-gift-card-arranged-in-new-york-u-s-on-friday-oct-15-2021-an-economy-hamstrung-by.jpg?s=612x612&w=0&k=20&c=gGVQHNNp0oY7yEhCHNHKkwllu204OPicljEtx3zNL38="
];

const GiftCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true
        }
      }
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
      </div>
    )
  };

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        Previous
      </div>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        Next
      </div>
    );
  }

  return (
    <div>
        <div className="mx-[50px] mt-10 ">
      <div>
        <h1 className="text-black text-lg font-semibold">FEATURED</h1>
      </div>
      <Slider {...settings} className="slider-container mb-10">
        {pics.map((pic, index) => (
          <div key={index} className="slick-slide p-3">
            <img
              src={pic}
              alt={`Gift Card ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
              style={{ marginRight: '10px' }} // Adjust the gap between slides
            />
          </div>
        ))}
      </Slider>
      <div className='flex bg-light-beige w-full py-4  rounded justify-start mx-4 items-center gap-4'>
        <div>
            <img src='https://www.starbucks.com/weblx/images/gift/group-gift-cards.png' alt='logo' className='w-20 h-10' />


        </div>
        <div>
            <h1>New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</h1>

        </div>
      </div>
      
        
    </div>
    <div className='flex bg-light-beige w-full py-4 mt-4  rounded justify-start mx-4 items-center gap-4'>
        <h1 className='font-bold'>Received a gift card?</h1>
        <h1>
        Earns 2★Stars per $1</h1>
        <button className='bg-black text-white py-1 px-2 rounded hover:bg-green'> Add or Reload</button>
        
        <button className='bg-black text-white py-1 px-2 rounded hover:bg-green'> Check Balance </button>
         </div>


    </div>
    
  );
};

export default GiftCard;
