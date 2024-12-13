import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import {shoe8 } from "../assets/images"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SuperQuality() {

  useEffect(() => {
    AOS.init({ duration : 2000});
    AOS.refresh();
  }, []);


  return (
    <section id="about-us"
     className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
     >
        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                We Provide You
              <span className="text-coral-red"> Super </span>
              <span className="text-coral-red">Quality </span>
               Shoes
          </h2>
          
          <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          </p>

          <p className='mt-4 lg:max-w-lg info-text'>Our dedication to attention to detail embarks your passion.</p>
          
          <div className="mt-11 ">
          <Button className="mt-9" label="View Details"  />
          </div>
        </div>

        <div>
          <img data-aos="fade-left" data-aos-delay="100"
              src={shoe8} 
              alt="QualityImage" width={570}
              height={522}
              className=" bg-cover bg-center object-contain"/>
        </div>
    </section>
  )
}

export default SuperQuality