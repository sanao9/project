import React from 'react';

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <div>
          <img src={banner} alt="banner" className='lg:h-[386px]' />
        </div>
        <div className="md:w-3/5">
          <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
          <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
          <div className='space-x-5 space-y-4'>
            <button className='btnPrimary'>{btn1}</button>
            <button className='btnPrimary'>{btn2}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  const bannerImage = require("../components/assets/banner.jpg"); // Assuming 'banner.jpg' is your image file
  
  return (
    <Banner banner={bannerImage} heading="Welcome to HM Vehicle Service Center" subheading="At HM Vehicle Service Center, we are dedicated to providing top-quality automotive services to our valued customers. Whether you need routine maintenance, repairs, or diagnostics for your vehicle, our experienced technicians are here to help." btn1="Get started" btn2="Discount" />
  );
}

export default Home;


