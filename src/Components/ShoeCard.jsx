import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function ShoeCard({imgURL, changeBigShoeImage, bigShoeImg}) {

    useEffect(() => {
        AOS.init({ duration : 2000});
        AOS.refresh();
      }, []);

    const handelClick = () =>{
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div 
        className={`border-2 rounded-2xl ${bigShoeImg === imgURL.bigShoe ?'border-coral-red':"border-transparent"} cursor-pointer max-sm:flex-1`} onClick={handelClick}>

        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img data-aos="flip-right" src={imgURL.thumbnail} alt='shoe Collection' width={129}  height={103} className='object-contain'/>
        </div>
    </div>
  )
}

export default ShoeCard