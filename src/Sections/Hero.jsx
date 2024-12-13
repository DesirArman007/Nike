import { useEffect } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../Components/Button"
import { shoes, statistics } from "../Constants"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const[bigShoeImg,setBigShoeImg]= useState(bigShoe1)

  useEffect(() => {
    AOS.init({ duration : 2000});
    AOS.refresh();
  }, []);

  return (
    <section id="home" 
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
      <br />
      <span className="text-coral-red inline-block mt-3"><Typewriter
          options={{
            strings: ['Nike'],
            autoStart: true,
            loop: true,
          }}
        /></span> Shoes
    </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for
        your active life.</p>

        <Button label="Shop now"  iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">

            {/* {statistics.map((stat,index)=> (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))} */}

            {statistics.map((stats,index)=> (
              <div key={index}>
              <div>
              <CountUp
                        end={stats.value}
                        duration={5}
                        delay={2}
                        className="text-4xl font-palanquin font-bold"
                      />
                        <span
                          className="text-4xl font-palanquin font-bold"
                        >
                          K
                        </span>
                </div>      
              <p className="leading-7 font-montserrat text-slate-gray">{stats.label}</p>
            </div>
            ))}
        </div>
      </div>
      
      <div className="relative flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
        src={bigShoeImg} 
        alt="shoe collection" 
        width={610} 
        height={500} 
        className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
          {shoes.map((shoe,index)=>(
            <div key={index} data-aos="flip-fade-up" >
              <ShoeCard imgURL={shoe}
               changeBigShoeImage={(shoe) =>{
                setBigShoeImg(shoe)
               }}
               bigShoeImg={bigShoeImg}
               />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero