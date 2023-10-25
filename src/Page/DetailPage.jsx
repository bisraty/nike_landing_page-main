import React, { useState } from "react";
import { shoes } from "../constants";
import { Button, Nav, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { Footer } from "../sections";
import SelectShoeCard from "../components/SelectShoeCard";
import SizeCard from "../components/SizeCard";

export default function DetailPage() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div>
      <Nav />
      <section
        id='home'
        className='w-full flex xl:flex-row flex-col  justify-center min-h-screen gap-10 max-container'
      >
        <div className=' flex md:flex-row flex-col-reverse md:pb-10 md:w-[60%] w-full justify-between items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <div className='flex md:flex-col  pl-20 sm:gap-6 gap-4  bg-primary  bottom-[10%] sm:left-[10%] mt-20 max-sm:px-6'>
            {shoes.map((image, index) => (
              <div key={index}>
                <SelectShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
          <img
            src={bigShoeImg}
            alt='shoe colletion'
            width={450}
            height={402}
            className='object-contain relative z-10'
          />
        </div>
        <div className='md:w-[40%] w-full md:pr-10 px-2 mt-20'>
          <h1 className='font-palanquin text-2xl text-coral-red font-semibold'>
            Nike Air VaporMax Plus
          </h1>
          <p>Men's Shoes</p>
          <p className='mt-5 mb-2 text-coral-red font-semibold'>Select Size</p>
          <SizeCard />
          <div>
            <br />
            <h1 className='text-xl'> Description</h1>

            <p className='text-[14px] text-gray-700'>
              The Nike Air VaporMax Plus looks to the past to propel you into
              the future. Nodding to the '98 original with its floating cage and
              padded upper, it adds heel-to-toe VaporMax Air technology to ramp
              up the comfort and create a modern look. Pops of metallic silver
              against the white upper highlight the head-turning design, helping
              you walk into tomorrow with style.
            </p>
            <br />
          </div>

          <Button label='Add to bag' fullWidth={"w-[60%]"} />
          <br />
          <Button
            label='Favorite'
            backgroundColor={"white"}
            borderColor={"border-coral-red"}
            fullWidth={"w-[60%]"}
          />
          <br />
        </div>
      </section>

      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </div>
  );
}
