import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill, BsFillChatTextFill } from "react-icons/bs";
import { GiScrollQuill } from "react-icons/gi";
import home from '../assets/slider/home.jpeg'

const Footer = () => {
  return (
    <div className="sticky bottom-[-2px] w-full z-50 bg-white h-12 flex justify-around py-6 items-center">
      <div className="flex justify-center items-center flex-col py-4">
         <AiFillHome className='text-3xl text-teal-500'/>
         <p className='text-[12px] font-cursive'>Home</p>
      </div>
      <div className="flex justify-center items-center flex-col">
         <BsFillPeopleFill className='text-3xl text-teal-500'/>
         <p className='text-[12px] font-cursive'>Profile</p>
      </div>
      <div className="flex justify-center items-center flex-col">
         <div style={styled}>
            <img src={home} alt="Home" />
         </div>
      </div>
      <div className="flex justify-center items-center flex-col">
         <GiScrollQuill className='text-3xl text-teal-500'/>
         <p className='text-[12px] font-cursive'>Follow List</p>
      </div>
      <div className="flex justify-center items-center flex-col">
         <BsFillChatTextFill className='text-3xl text-teal-500'/>
         <p className='text-[12px] font-cursive'>Chat</p>
      </div>
    </div>
  );
}

export default Footer;

const styled = {
   backgroundColor: 'rgba(0, 128, 128, 0.5)',
   height: '50px',
   width: '30px',
   borderRadius: '5px',
   transform: 'rotateX(55deg)'
}