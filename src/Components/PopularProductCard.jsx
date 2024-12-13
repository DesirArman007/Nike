
import { star } from '../assets/icons'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PopularProductCard({imgURL,name, price}) {
  useEffect(() => {
    AOS.init({ duration : 2000});
    AOS.refresh();
  }, []);
  return (
    <div  className='flex flex-1 flex-col w-full max-sm:w-full border-2 p-1 rounded-[35px] hover:scale-105 transition-transform duration-300 ease-in-out'>
        <img data-aos="fade-up" src={imgURL} alt="ProductImage" width={290} height={180}
            className=' rounded-[35px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] '/>

        <div className='mt-8 flex justify-start '>
        <img   src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
        </div>

        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal mb-2'>{price}</p>
    
    </div>
  )
}

export default PopularProductCard