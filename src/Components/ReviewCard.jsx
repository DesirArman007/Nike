
import { star } from '../assets/icons'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ReviewCard({customerName, rating, feedback, imgURL}) {

    useEffect(() => {
        AOS.init({ duration : 2000});
        AOS.refresh();
      }, []);

  return (
    <div data-aos="zoom-in-up"  className='flex flex-col justify-center items-center '>
        <img 
            src={imgURL}
            alt="Customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className='info-text mt-3 justify-center items-center'>
            {feedback}
        </p>
        <div className='flex justify-center font-semibold items-center gap-2'>
            <img
                src={star} width={24} height={24} className='object-contain m-0'
            />
            <p>{rating}</p>
        </div>
        <h3 className='font-bold mt-2 text-xl'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard