import { layout } from "../style";
import line from '../assets/line.png'
import rightArrow from '../assets/rightArrow.svg'
import Titleline from "./Titleline";
import home from '../assets/home.svg'
import arrowblue from '../assets/arrowblue.svg'
import { cardContent } from "../constants";

function Service() {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container} pt-8`}>
        {/* head title section  */}
        <div className=" flex-1 flex justify-center items-cente flex-col gap-3 md:gap-0 md:flex-row">
          <div className=" flex-1">
            {/* subtitle  */}
            <Titleline
              img={line}
              title="best services"
              headTitle="What Our Services"
            />
            <p className=" text-base text-[#969696] font-normal leading-6">While we can customize your cleaning plan to suit your <br className=" hidden lg:block" /> needs, most clients schedule regular cleaning services:</p>
          </div>
          <div className=" flex-1 flex justify-start md:justify-end items-center sm:items-end">
            <button className="py-3 flex justify-center items-center text-[17px] text-[#FEF5E7] font-semibold gap-3 px-6 bg-[#3EC5FA] rounded-lg">See More <img src={rightArrow} alt="arrow__icon" /></button>
          </div>
        </div>
        {/* card container  */}
        <div className=" flex justify-center items-center flex-wrap py-12 gap-16">
          {/* card  */}
            {cardContent.map((items) => {
              return(
                <div key={items.id} className=" p-8 border-[2px] max-w-[360px] rounded-xl border-[#F2F2F2]">
                    <div className=" rounded-md p-3 mb-5 bg-[#3EC5FA] w-11 h-11">
                      <img src={home} alt="homeIcon" className=" object-contain"/>
                    </div>
                    <h2 className=" mb-[14px] text-[18px] font-bold font-plus text-[#323232]">{items.title}</h2>
                    <p className=" text-[14px] font-normal leading-6 text-[#646464] font-plus mb-5">{items.disciption}</p>
                    <button className="py-3 pl-0 flex justify-center items-center px-6"><a href="/" className=" flex underline  text-[15px] font-normal  text-[#3EC5FA] gap-3">
                    learn More<img src={arrowblue} alt="arrow__icon" /></a></button>
                </div>
              )
            })}
        </div> 
      </div>
    </section>
  )
}

export default Service













