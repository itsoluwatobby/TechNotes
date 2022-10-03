import React from 'react';
import {BsPeople, BsNewspaper} from 'react-icons/bs'
import {AiOutlineFire} from 'react-icons/ai'
import {HiLightBulb} from 'react-icons/hi'
import {MdOutlineWaterDrop} from 'react-icons/md'
import {IoIosArrowDropright} from 'react-icons/io'

const Main = () => {
  return (
   <div className='w-full mt-1 grow-1 flex items-center'>
    <div className='grid w-full bg-white font-cursive grid-cols-4 place-content-center gap-1 shadow-md rounded-md m-2 p-2'>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500 whitespace-wrap'>Prepaid Mobile Recharge</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>DTH Recharge</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Loans</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Promotion</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>News</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Blog</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsPeople className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Jobs</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <BsNewspaper className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500 whitespace-wrap'>Anonymous FeedBack</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <p className='text-red-600 font-cursive text-[11px]'>Coming Soon</p>
         <AiOutlineFire className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Gas Booking</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <p className='text-red-600 font-cursive text-[11px]'>Coming Soon</p>
         <HiLightBulb className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Electricity Bill</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <p className='text-red-600 font-cursive text-[11px]'>Coming Soon</p>
         <MdOutlineWaterDrop className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>Water Bill</p>
      </div>
      <div className='flex flex-col w-[100px] h-[95px] justify-center items-center gap-2'>
         <IoIosArrowDropright className='text-teal-500 text-[40px]'/>
         <p className='text-[11px] text-center text-teal-500'>See More</p>
      </div>
    </div>
   </div>
  );
}

export default Main;
