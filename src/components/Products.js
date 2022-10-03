import React from 'react';
import { construction, consultancy, dailyNeeds, laundry, titleData } from '../data/titleData';

const Products = () => {
  return (
   <div className='grow-1 flex flex-col gap-1 items-center justify-center mobile:max-w-[full] w-full py-2 overflow-x-hidden'>
      <div className='flex flex-col justify-between gap-3'>
         <div className='bg-teal-100 w-[470px] mx-2 py-1'>
         <h2 className='text-teal-600 font-bold text-center font-cursive'>Popular Service Products</h2>
         </div>
         <>
            <div className="flex items-center justify-center flex-col">
               <h2 className='text-teal-700 font-bold font-cursive'>Daily Needs</h2>
               <div className='bg-green-300 w-[200px] h-[2px] mt-1'></div>
            </div>
            <div className='grid grid-cols-4 gap-1 ml-4 mobile:flex justify-between mobile:justify-center mobile:gap-1 my-1 overflow-y-hidden mobile:ml-0'>
            {dailyNeeds.map((daily, index) => (
               <div key={index} className='h-[120px] w-24 mobile:h-[110px] mobile:w-20 mobile:mr-1 rounded-lg box-border'>
                  <img src={daily.image} alt="logo" className='w-[100%] h-[100%] object-cover rounded-lg'/>
               </div>
               ))
            }
            </div>
         </>
         <>
            <div className="flex items-center justify-center flex-col">
               <h2 className='text-teal-700 font-bold font-cursive'>Construction</h2>
               <div className='bg-green-300 w-[200px] h-[2px] mt-1'></div>
            </div>
            <div className='grid grid-cols-4 gap-1 ml-4 mobile:flex justify-between mobile:justify-center mobile:gap-1 my-1 overflow-y-hidden mobile:ml-0'>
            {construction.map((construct, index) => (
               <div key={index} className='h-[120px] w-24 mobile:h-[110px] mobile:w-20 mobile:mr-1 rounded-lg box-border'>
                  <img src={construct.image} alt="logo" className='w-[100%] h-[100%] rounded-lg object-cover'/>
               </div>
               ))
            }
            </div>
         </>
         <>
            <div className="flex items-center justify-center flex-col">
               <h2 className='text-teal-700 font-bold font-cursive'>Consultancy</h2>
               <div className='bg-green-300 w-[200px] h-[2px] mt-1'></div>
            </div>
            <div className='grid grid-cols-4 gap-1 ml-4 mobile:flex justify-between mobile:justify-center mobile:gap-1 my-1 overflow-y-hidden mobile:ml-0'>
            {consultancy.map((consult, index) => (
               <div key={index} className='h-[120px] w-24 mobile:h-[110px] mobile:w-20 mobile:mr-1 rounded-lg box-border'>
                  <img src={consult.image} alt="logo" className='w-[100%] h-[100%] rounded-lg object-cover'/>
               </div>
               ))
            }
            </div>
         </>
         <>
            <div className="flex items-center justify-center flex-col">
               <h2 className='text-teal-700 font-bold font-cursive'>Laundry</h2>
               <div className='bg-green-300 w-[200px] h-[2px] mt-1'></div>
            </div>
            <div className='grid grid-cols-4 gap-1 ml-4 mobile:flex justify-between mobile:justify-center mobile:gap-1 my-1 overflow-y-hidden mobile:ml-0'>
            {laundry.map((laud, index) => (
               <div key={index} className='h-[120px] w-24 mobile:h-[110px] mobile:w-20 mobile:mr-1 rounded-lg box-border'>
                  <img src={laud.image} alt="logo" className='w-[100%] h-[100%] rounded-lg object-cover'/>
               </div>
               ))
            }
            </div>
         </>
      </div>
      {/* ALL POPULAR SERVICES */}
      <div className='flex flex-col justify-between gap-2 mt-2'>
         <div className='bg-teal-100 w-[470px] mx-2 py-1'>
         <h2 className='text-teal-600 font-bold text-center font-cursive'>All Popular Service Providers</h2>
         </div>
         {titleData.map((data, index) => (
            <div key={index}>
               <div className="flex items-center justify-center flex-col">
                  <h2 className='text-teal-700 font-bold font-cursive'>{data}</h2>
                  <div className='bg-green-300 w-[200px] h-[2px] mt-1 mb-2'></div>
               </div>
               <div className='flex justify-center items-center'>
                  <div className='bg-white h-[120px] w-24 rounded-lg flex flex-col justify-start items-center pt-3'>
                     <div className='h-16 w-20 bg-green-600 text-white text-4xl uppercase text-center pt-2'>L</div>
                     <p className='font-cursive text-[10px]'>Lakme Salon</p>
                  </div>
                  <div className='bg-white h-[120px] w-24 rounded-lg flex flex-col justify-start items-center pt-3'>
                     <div className='h-16 w-20 bg-gray-800 text-white text-4xl uppercase text-center pt-2'>R</div>
                     <p className='font-cursive text-[10px]'>R. D. Health Club</p>
                  </div>
                  <div className='bg-white h-[120px] w-24 rounded-lg flex flex-col justify-start items-center pt-3'>
                     <div className='h-16 w-20 bg-blue-300 text-white text-4xl uppercase text-center pt-2'>S</div>
                     <p className='font-cursive text-[10px]'>Sutkar Marriage House</p>
                  </div>
                  <div className='bg-white h-[120px] w-24 rounded-lg flex flex-col justify-start items-center pt-3'>
                     <div className='h-16 w-20 bg-pink-500 text-white text-4xl uppercase text-center pt-2'>P</div>
                     <p className='font-cursive text-[10px]'>Prats Showroom</p>
                  </div>
               </div>
            </div>
            ))
         }
      </div>
   </div>
  );
}

export default Products;
