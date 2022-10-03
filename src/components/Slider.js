import React, { useEffect, useState } from 'react';
import first from '../assets/slider/first.jpeg'
import second from '../assets/slider/second.jpeg'
import third from '../assets/slider/third.jpg'

const Slider = () => {
   const [current, setCurrent] = useState(1);

   const images = [first, third, second]
   useEffect(() => {
      const getSlider = setInterval(() => {
                           setCurrent(prev => prev < images.length-2 ? prev + 1 : 0)
                        }, 2000);
      
      return () => clearInterval(getSlider)
   //eslint-disable-next-line
   }, [])

   const spans = [first, third, second]
  return (
   <div className={`overflow-hidden w-full h-[160px] shadow-md p-1 rounded-lg transition duration-200 ease-in-out`}>
      <div className={`relative flex h-full w-full box-border`} style={{transform: `translateX(${-current * 100}%)`}}>
         {images.map((image, index) => (
            <img src={image} key={index} alt="referral" className='w-[100%] h-[100%] object-cover'/>
            ))
         }
         <div className={`flex justify-center items-center absolute z-50 gap-1 bottom-3`}>
            {spans.map(index => (
               <span key={index} className='rounded-full w-3 h-3 bg-red-600'></span>
               ))
            }
         </div>
      </div>
   </div>   
  );
}

export default Slider;
