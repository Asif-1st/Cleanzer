import { counterContent } from "../constants"
import { layout, styles } from "../style"

const Counter = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.container}`}>
      <div className={`flex justify-center flex-col items-center`}>
        <p className=" max-w-3xl text-center mt-10 text-black font-plus font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut sollicitudin sem. Ut tempus ligula eget vestibulum dapibus. Sed ac pulvinar massa. Class aptent </p>
        <div className={`${styles.flexCenter} pt-12`}>
          <ul className={`${styles.flexCenter} gap-10 flex-wrap`}>
            {
              counterContent.map((item) => (
                <div key={item.id} className=" bg-[#3EC5FA] px-20 py-6 rounded-2xl">
                  <span className=" text-[#FEF5E7] font-semibold text-4xl">{item.number}</span>
                  <p className=" text-[#FEF5E7] font-medium text-[16px]">{item.text}</p>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Counter