import React from "react";

import { Link } from "react-router-dom";

import WomanImg from '../img/woman_hero.png'


const Hero = () => {
  return (
    <section className="bg-pink-200  h-[800px]  bg-hero bg-cover bg-center">
      <div className="flex justify-around h-full items-center container mx-auto ">
        <div className="flex flex-col ">
          <div className="flex items-center space-x-2">
          <div className="w-[30px] bg-red-600 h-[2px]"></div>
          <div className="uppercase text-sm font-semibold">New trend</div>
          </div>

          <div className="uppercase mt-2 text-[50px]">Autumn sale stylish <br></br> <span className="font-bold">Womens</span></div>
          <div className=" w-[30%]">
            {
              <Link to={`/`}>
               <div className="font-semibold uppercase text-sm mt-2">Discover More</div>
                <div className="w-[80%] bg-black h-[2px]"></div>
              </Link>
            }
          </div>
        </div>

        <div className="hidden md:block lg-block"><img className="h-[40%]" src={WomanImg}/></div>
      </div>
    </section>
  );
};

export default Hero;
