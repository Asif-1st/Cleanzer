import { styles } from "../style"

const Titleline = (props) => {
    return (
        <>
            <div className=" flex justify-start items-center gap-2 mb-2">
                <img src={props.img} alt="line" className=" object-contain" />
                <h4 className=" text-[#3EC5FA] text-base ">{props.title}</h4>
            </div>
            <h1 className={`${styles.sectionTitle} mb-4`}>{props.headTitle}</h1>
        </>
    )
}

export default Titleline