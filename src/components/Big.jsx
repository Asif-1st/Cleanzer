import { layout, styles } from "../style"

const Big = () => (
    <section className={` bg-[#3EC5FA] ${styles.paddingY} relative`}>
        <div className={`${layout.container} py-6`}>
            <div className={`${styles.flexCenter}`}>
                <h1 className=" text-[32px] text-white md:text-[46px] text-center font-plus font-bold">We Make Sanitizing Services <br className=" hidden sm:block" /> Simple And Easy For You</h1>
            </div>
            <div className={`${styles.flexCenter}`}>
                <button className="absolute text-[#121212] font-semibold  -bottom-7 z-10 bg-[#FDDB3A] px-10 py-4 rounded-md">More Than Just Cleaning</button>
            </div>
        </div>
    </section>
)

export default Big