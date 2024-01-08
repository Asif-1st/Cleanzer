import line from '../assets/line.png'
import client1 from '../assets/client1.png'
import pp from '../assets/icon-quote.png'
import stars from '../assets/rating.svg'
import { layout, styles } from '../style';
import Titleline from './Titleline';
import { reviews } from '../constants';
const Testimonials = () => (
  <section className={`${layout.section} ${styles.paddingY}`}>
    <div className={`${layout.container}`}>
      <div className=' pt-10 flex  flex-col'>
        {/* top content of testimonial section  */}
        <div>
          <Titleline
            img={line}
            title='Happy clients'
            headTitle='What Our Client Say’s'
          />
          <p className=' max-w-[385px] text-[#969696] font-plus font-normal  text-base '>This is what clients have been saying after using the great service we do for clients.</p>
        </div>
        {/* testimonials container */}
        <div className={`flex flex-col justify-center items-center flex-wrap pt-24`} >
          <div className='flex justify-center flex-wrap md:flex-nowrap items-center gap-5'>
            {/* Testimonial boxes  */}
            {
              reviews.map((items) => {
                return (
                  <div key={items.id} className=' border-2 p-7'>
                    <img src={pp} alt="quets" className=' -mt-14' />
                    {/* box content  */}
                    <div className=' flex flex-col gap-5 pt-4'>
                      <p className=' text-[#646464] font-normal font-plus leading-6 text-[14px]'>{items.content}</p>
                      <div className=' pt-10'>
                        <div className=' flex gap-4 w-full'>
                          <img src={client1} alt="" className=' w-14 h-14 rounded-full' />
                          <div className=' w-full'>
                            <h3 className=' text-[#323232] font-bold text-[15px] font-plus'>{items.name}</h3>
                            <div className=' flex justify-between w-full flex-wrap xl:flex-nowrap items-center gap-3 xl:gap-0'>
                              <h4 className=' text-[#969696] font-plus text-[14px] font-normal '>{items.status}</h4>
                              <img src={stars} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials