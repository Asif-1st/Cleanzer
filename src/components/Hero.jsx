import { layout, styles } from "../style"
import arrow from '../assets/topRight.svg'
import arrow1 from '../assets/arrow1.svg'
import bg1 from '../assets/bg1.svg'
import bg2 from '../assets/bg2.svg'
import bg3 from '../assets/bg3.svg'
import bg4 from '../assets/bg4.svg'
import bg5 from '../assets/bg5.svg'
import bg6 from '../assets/bg6.svg'

function Hero() {
    return (   
        <div className="  w-full relative overflow-hidden">
            <img src={bg1} alt="" className=" -z-10 w-[29%] object-contain absolute -left-8 -bottom-8" />
            <img src={bg2} alt="" className="  -z-10w-[34%] object-contain absolute left-0 bottom-0 " />
            <img src={bg3} alt="" className="  -z-10w-[44%] object-contain absolute left-0 bottom-0 " />
            <div className=" flex justify-center items-center py-20">
                <div className={`${layout.container} pt-14 ${styles.flexCenter} flex-col`}>
                    {/* content  */}
                    <span className=" text-[#3EC5FA] text-base mb-[23px]">Professional Cleaning Service</span>
                    <h1 className={`${styles.headTitle} mb-10`}>We Are Premium <br className=" hidden md:block" />
                        Cleaning Company located in USA <br className=" hidden md:block" /> ready to make your life easier!!</h1>
                    <p className=" text-base font-light text-center text-black max-w-2xl">
                        At Cleanzer Crystal Clean, we believe in building a relationship with every one of our customers. Our cleaning programs are tailored to meet your needs. We dont believe in a one size fits all approach. Need us to wash dishes? Do laundry? Make the beds? Not a problem!
                    </p>
                    {/* hero btns  */}
                    <div className={` ${styles.flexCenter} pt-14 gap-4 flex-col sm:flex-row md:gap-7`}>
                        <button className="py-3 flex justify-center items-center text-[17px] text-[#FEF5E7] font-semibold gap-3 px-6 bg-[#3EC5FA] rounded-lg">Book A Schedule <img src={arrow} alt="arrow__icon" /></button>
                        <button className="py-3 flex justify-center items-center text-[17px] text-[#3EC5FA] font-semibold gap-3 px-6 bg-transparent border-2 rounded-lg">Our Best Offer<img src={arrow1} alt="arrow__icon" /></button>
                    </div>
                </div>
            </div>
            <img src={bg4} alt="" className=" -z-10 w-[29%] object-contain absolute -right-8 -bottom-8" />
            <img src={bg5} alt="" className=" -z-10 w-[34%] object-contain absolute right-0 bottom-0 " />
            <img src={bg6} alt="" className=" -z-10 w-[44%] object-contain absolute right-0 bottom-0 " />
        </div>
    )
}

export default Hero