import { arrowRight } from "../assets/icons"
import {offer} from "../assets/images"
import Button from "../Components/Button"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SpecialOffer() {

  useEffect(() => {
    AOS.init({ duration : 2000});
    AOS.refresh();
  }, []);

  return (
    <section className='flex justify-wrap items-center max-xl:flex-row-reverse gap-10 max-container max-lg:flex-col-reverse'>
      <div className='flex-1 '>
        <img data-aos="fade-right" src={offer} width={773} height={687} className="object-contain w-full" />
      </div>

      <div data-aos="fade-left" className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
              <span className="text-coral-red"> Special </span>
               Offer
          </h2>
          
          <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          </p>

          <p className='mt-4 lg:max-w-lg info-text'>Our dedication to attention to detail embarks your passion.</p>
          
          <div className="mt-11 flex flex-wrap gap-5">
          <Button className="mt-9" label="View Details" iconURL={arrowRight}  />
          <Button className="mt-9" label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate" />
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer