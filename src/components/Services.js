import { serviceData } from '../data/titleData';

const Services = () => {
  return (
    <>
      {/* SERVICES WE PROVIDE */}
      <div className='grow -1 flex flex-col justify-between overflow-x-scroll gap-3'>
         <div className='bg-teal-100 w-[470px] mx-2 py-1'>
            <h2 className='text-teal-600 font-bold text-center font-cursive'>Services We Provide</h2>
         </div>
         <div className='grid grid-cols-2 gap-2 my-2'>
            {serviceData.map((service, index) => (
               <div key={index} className='relative'>
                  <div className='relative'>
                     <p className='text-white font-cursive absolute top-[-6px] px-[4px] rounded-sm text-[10px] font-bold right-0 bg-green-500 z-50'>20% off</p>
                  <div className='max-h-[120px] rounded-[5px] overflow-hidden'>
                     <img src={service.image} alt={`${service.title}`} className='w-[100%] h-auto object-cover' />
                  </div>
                  </div>
                  <p className='text-white font-cursive absolute bottom-1 left-[30%] right-[30%] font-bold'>{service.title}</p>
               </div>
               ))
            }
         </div>
      </div>   
    </>
  );
}

export default Services;
