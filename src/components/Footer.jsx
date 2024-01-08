import { layout, styles } from "../style"
import Brand from "../assets/Brand.png"
import link from "../assets/link1.png"
import link1 from "../assets/link2.png"
import link2 from "../assets/link3.png"
import link3 from "../assets/link4.png"
import loacation from "../assets/loacation.svg"
import { contactInfo, navigation, quickLinks } from "../constants"

const Footer = () => {
  return (
    <section className={`${layout.section}`}>
      {/* container */}
      <div className={`${layout.container} ${styles.flexCenter} pt-16`}>
        <div className=" flex justify-start w-full items-start gap-10 flex-wrap md:flex-nowrap xl:gap-28">
          {/* div1  */}
          <div>
            <img src={Brand} alt="" />
            <p className=" max-w-[270px] pb-6 pt-6  ">We Are Premium Cleaning Company  in USA ready to make your life easier!!</p>
            <ul className=" flex  justify-start items-center gap-1">
              <li><a href="#"><img src={link} alt="" /></a></li>
              <li><a href="#"><img src={link1} alt="" /></a></li>
              <li><a href="#"><img src={link2} alt="" /></a></li>
              <li><a href="#"><img src={link3} alt="" /></a></li>
            </ul>
          </div>
          {/* div2 */}
          <div>
            <h1 className=" text-[#3EC5FA] text-[18px] font-semibold leading-6 mb-[18px] font-plus">Navigation</h1>
            <ul className=" flex flex-col justify-start items-start gap-[7px]">
              {
                navigation.map((items) => {
                  return (
                    <li key={items.id}><a href="#" className=" text-[#231F20] font-medium font-plus text-[15px]">{items.label}</a></li>
                  )
                })
              }
            </ul>
          </div>
          {/* div3 */}
          <div>
            <h1 className=" text-[#3EC5FA] text-[18px] font-semibold leading-6 mb-[18px] font-plus">Quick Links</h1>
            <ul className=" flex flex-col justify-start items-start gap-[7px]">
              {
                quickLinks.map((items) => {
                  return (
                    <li key={items.id}><a href="#" className="text-[#231F20] font-medium font-plus text-[15px]">{items.label}</a></li>
                  )
                })
              }
            </ul>
          </div>
          {/* div4 */}
          <div>
            <h1 className=" text-[#3EC5FA] text-[18px] font-semibold leading-6 mb-[18px] font-plus">Contact Info</h1>
            <ul className=" flex flex-col justify-start items-start gap-[18px]">
              {
                contactInfo.map((items) => {
                  return(
                    <li key={items.id} className=" flex gap-2"><img src={loacation} alt="" /><a href="#" className="text-[#231F20] font-medium font-plus text-[15px]">{items.content}</a></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer