import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import {IoIosNotifications} from 'react-icons/io'
import {ImMic} from 'react-icons/im'
import {MdAddShoppingCart, MdLocationOn} from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className='bg-teal-500 flex flex-col justify-between min-h-10vh w-full gap-2 p-2 py-3'>
      <div className='flex justify-between items-center gap-2'>
         <MdLocationOn className='text-3xl text-white'/>
         <div className='flex-1'>
            <input 
               type="text" 
               placeholder='Harhwa Fatak Nirala Nagar, Gorakhpur, Nirala Naga...'
               disabled
               className='placeholder:text-white placeholder:px-2 placeholder:font-cursive placeholder:text-[14px] border w-full rounded-lg'
            />
         </div>
         <IoIosNotifications className='text-3xl text-white'/>
         <MdAddShoppingCart className='text-3xl text-white'/>
      </div>
      <div className='flex justify-center items-center mx-3 gap-2 mt-3 sticky top-0'>
         <div className='flex justify-start items-center pl-2 h-[40px] flex-1 space-x-4 rounded-lg bg-white'>
            <AiOutlineSearch className='text-3xl text-teal-500'/>
            <input 
               type="text"
               disabled
               placeholder='Search for Products...' 
               className='border-none box-border bg-white h-full flex-1 placeholder:font-cursive'
            />
         </div>
         <ImMic className='text-3xl text-white'/>
      </div>
    </nav>
  );
}

export default NavBar;
