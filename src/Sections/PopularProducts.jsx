import { products } from '../Constants'
import PopularProductCard from '../Components/PopularProductCard'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PopularProducts() {

  useEffect(() => {
    AOS.init({ duration : 2000});
    AOS.refresh();
  }, []);

  return (
    <section id="products" 
    className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-semibold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
            <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        </div>

        <div data-aos="flip-fade-up"  data-aos-delay="100"  className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {products.map((product)=>(
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
    </section>
  )
}

export default PopularProducts