import { contactInfo } from "../constants"
import { layout } from "../style"
import Titleline from "./Titleline"
import Icon from '../assets/Icon.svg'
import Icon1 from '../assets/Icon2.svg'
import line from '../assets/line.png'
import Icon2 from '../assets/Icon3.svg'

const Contact = () => {

  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.container}`}>
        <div className=" flex justify-between w-full items-center flex-col lg:flex-row">
          <div>
            <div>
              <Titleline
                img={line}
                title='Contact'
                headTitle='Get In Touch'
              />
              <p className=" text-[#333] font-plus font-semibold text-base leading-7 max-w-[430px]  md:text-xl">Fill up the form and our Team will get back to you within 24 hours.</p>
            </div>
            <div className=" py-8">
              <div className=" py-6">
                <ul>
                  {
                    contactInfo.map((methods) => {
                      return (
                        <div key={methods.id} className={`${methods.id === contactInfo.length ? "mb-0" : "mb-8"}`}>
                          <div className=" flex justify-start gap-10 items-center mb-2">
                            <img src={methods.id == contactInfo.length ? Icon : methods.id == contactInfo.length - 1 ? Icon1 : Icon2} alt="card" className=" w-16 h-26" />
                            <div>
                              <h3 className=" mb-[16px] text-[#000B41] text-[22px] leading-5 font-semibold">{methods.method}</h3>
                              <p className=" max-w-64 font-plus font-normal leading-5 text-[14px] text-[#333]">{methods.content}</p>
                            </div>
                          </div>
                          <div className=" max-w-96 h-[1px] bg-orange-200" />
                        </div>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          {/* contact div  */}
          <div>
            <div className=" w-full bg-[#3EC5FA] rounded-lg">
              <form className=" flex flex-col gap-6 py-16 px-20">
                {/* for Name  */}
                <div className=" flex flex-col">
                  <label htmlFor="name" className=" text-[#FBFFFE] font-semibold text-[15px] font-plus pb-2">Name:</label>
                  <input type="text" className=" rounded-md h-9 p-2" placeholder="Your user name" />
                </div>

                {/* for email  */}
                <div className=" flex flex-col">
                  <label htmlFor="email" className=" text-[#FBFFFE] font-semibold text-[15px] font-plus pb-2">Email:</label>
                  <input type="email" placeholder="Your email" className=" rounded-md h-9 p-2" />
                </div>

                {/* for massege */}
                <div className=" flex flex-col">
                  <label htmlFor="massage" className=" text-[#FBFFFE] font-semibold text-[15px] font-plus pb-2">Massage:</label>
                  <textarea placeholder="typing..." type="text" className=" w-72 max-h-36 h-36 p-[5px] max-w-72 rounded-md" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" mt-10 bg-[#3EC5FA] h-80 rounded-lg flex justify-center items-center flex-col p-3">
          <h1 className=" text-3xl font-extrabold text-white font-plus text-center leading-10 ">Best Cleaning <br />
            Service Company</h1>
          <p className=" text-[15px] font-normal text-[#FEFEFF] max-w-xl font-plus text-center mt-3">Quisque imperdiet mauris nec faucibus vestibulum. Ut vestibulum est ac hendrerit pharetra. Integer sit amet laoreet lectus</p>
          <button className=" px-9 py-4 mt-7 rounded-md text-sm text-[#0F1123] font-bold leading-4 uppercase font-plus bg-[#FDDB3A]">Book Appointment</button>
        </div>
      </div>
    </section>
  )
}

export default Contact