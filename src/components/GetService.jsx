import { layout, styles } from "../style"
import Titleline from "./Titleline"
import line from '../assets/line.png'
import em1 from '../assets/em1.png'
import em2 from '../assets/em2.png'
import { clientService } from "../constants"
import document from '../assets/document.svg'

function GetService() {
  return (
    <section className={`${layout.section} bg-[#f8f7ff] relative ${styles.flexCenter}`}>
      <div className={`${layout.container} py-8`}>
        <div className="flex justify-center items-center gap-10 lg:gap-0 lg:flex-row flex-col">
          {/* left component  */}
          <div className=" w-full flex flex-col flex-1 justify-center items-start">
            <Titleline
              img={line}
              title="Get our Service"
              headTitle="How To Get Our Service"
              className=" mb-14" 
            />
            <div className=" py-6">
              <ul>
                {
                  clientService.map((methods) => { 
                    return(
                      <div key={methods.id} className={`${methods.id === clientService.length  ? "mb-0" : "mb-8"}`}>
                          <div className=" flex justify-start gap-10 items-center mb-2"> 
                            <img src={document} alt="card" className=" w-16 h-26"/>
                            <div>
                              <h3 className=" mb-[16px] text-[#000B41] text-[22px] leading-5 font-semibold">{methods.title}</h3>
                              <p className=" max-w-64 font-plus font-normal leading-5 text-[14px] text-[#333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div className=" max-w-96 h-[1px] bg-orange-200"/>
                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          {/* right component  */}
          <div className=" flex-1 flex flex-col justify-center lg:justify-end items-center">
              <img src={em1} alt="employe" className=" w-[84%] h-auto mb-6"/>
              <div className=" flex justify-start items-center gap-4">
                <img src={em2} alt="employe" className=" max-w-16 h-auto" />
                <p className=" max-w-[360px] font-normal"><span className="  font-bold text-[14px] leading-6">Fringilla scelerisque</span> in imperdiet nisi erat in id. Vel fermentum aenean aenean id ornare vitae sapien nulla auctor. At nisl sem eget orci pretium sed.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default GetService 