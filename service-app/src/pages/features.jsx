
import React from 'react'
import featuredImg from '../components/assets/png2.PNG'
import featuredImg2 from '../components/assets/png3.PNG'
import featuredImg3 from '../components/assets/png4.PNG'

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2x1 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/4">
       <h3 className="text-3x1 text-primary font-bold lg:w-1/2 mb-3">Why we are better than others</h3>
       <p className="text-base text-tartiary">our vehicle service center stands out from others due to our comprehensive service history,
        tire safety focus, transparent pricing, customer protection measures, comfort and convenience offerings, and qualified technicians with advanced equipment.
         We strive to provide you with the best service possible and ensure your satisfaction.</p>
             </div>
             {/*fearured cards */}
             <div className="w-full lg:w-3/4">
              <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8`">
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 'items-center' flex justify-center 'items-center' hover:-translate-y-4 transition-all duration- cursor-pointer">
                <div>
                    <img src={featuredImg} alt="" />
                    <h5 className='taxt-2x1 font-semibold text-primary px-5 text-center mt-5'>study schedule</h5>
                </div>
              </div>
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 'items-center' flex justify-center 'items-center' hover:-translate-y-4 transition-all duration- cursor-pointer">
                <div>
                    <img src={featuredImg2} alt="" />
                    <h5 className='taxt-2x1 font-semibold text-primary px-5 text-center mt-5'>study schedule</h5>
                </div>
              </div>
              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 'items-center' flex justify-center 'items-center' hover:-translate-y-4 transition-all duration- cursor-pointer">
                <div>
                    <img src={featuredImg3} alt="" />
                    <h5 className='taxt-2x1 font-semibold text-primary px-5 text-center mt-5'>study schedule</h5>
                </div>
              </div>
 

              </div>
             </div>
          </div>
    </div>
  );
};





export default Features;
