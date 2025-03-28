import SlideCmt from "./SlideCmt";
import SlideCmtPhone from "./SlideCmtPhone";

export default function CustomerSay() {
    return (
        <section className=" bg-white md:bg-[#FAFAFA]  md:pt-[80px] lg:pt-[100px] md:pb-[40px] lg:pb-[58px]     mb-[40px] md:mb-[50px] lg:mb-[60px] xl:mb-[100px] " >
           <div className=" flex flex-col justify-between mx-auto max-w-[1400px] " >
                <h2 className="  text-center mb-2 md:mb-4 lg:mb-[20px] font-volkhov text-xl md:text-4xl lg:text-[46px] lg:leading-[46px]">
                    This Is What Our Customers Say
                </h2>
                <p className=" ml-5 text-center md:mx-auto max-w-[614px] text-[#8A8A8A] text-sm  md:text-base mb-[40px] md:mb-[60px] lg:mb-[70px]">
                    Fasco has recently received an outpouring of positive feedback from its valued customers, reflecting the exceptional quality and service that define our platform.
                </p>
              <div className=" hidden md:block">  <SlideCmt/></div>
              <div className=" md:hidden" > <SlideCmtPhone/></div>
           </div>
        </section>
    );
}
