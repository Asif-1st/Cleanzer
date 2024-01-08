import { layout, styles } from "../style"
import Brand from '../assets/Brand.png';
import menu from '../assets/menu1.svg';
import { navLinks } from "../constants";
import { useState } from "react";
import xmark from "../assets/xmark.jpg"

function Navigation() {

    // sticky navbar color change on scroll 
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (scrollY >= 30) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

    // toggle navbar 
    const [navbar, setNavbar] = useState(!false);

    return (
        <div className={` ${color ? 'bg-white shadow-md' : 'bg-transparent'} flex justify-center items-center w-full z-40 top-0 py-4 fixed`}>
            {/* container  */}
            <div className={`${layout.container}`}>
                {/* navigation  */}
                <div className={`${styles.flexCenter} `}>
                    {/* logo  */}
                    <div className=" flex-1" >
                        <img src={Brand} alt="logo" className=" w-36 h-auto object-contain" />
                    </div>
                    {/* navlinks  */}
                    <nav className={` flex-1 ${styles.flexCenter}`} >
                        <ul className={`${styles.flexCenter} gap-8 hidden md:flex`}>
                            {
                                navLinks.map((items) => {
                                    return (<li className=" text-[17px] font-plus font-medium" key={items.id}><a href="/">{items.label}</a></li>
                                    )
                                })
                            }
                        </ul>
                        <div className="  flex-1 flex justify-end items-center ">
                            <img src={menu} alt="menubar" onClick={() => {
                                setNavbar(!navbar);
                            }} className="object-contain w-8 h-8  md:hidden" />
                        </div>
                    </nav>
                    {/* nav btn  */}
                    <div className=" hidden flex-1 lg:flex justify-end items-center">
                        <button className=" py-3 px-6 bg-[#3EC5FA] rounded-lg"><a href="/" className=" text-[17px] text-[#FEF5E7] font-semibold">Request An Estimate</a></button>
                    </div>
                </div>
            </div>
            <nav className={` flex justify-start items-center  flex-col md:hidden bg-[#fff] transition-all duration-300 absolute right-0 top-0 origin-right shadow-xl py-2 h-screen ${navbar ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"} `} >
                <div className=" flex justify-end items-center pr-52 pl-4">
                    <img src={xmark} alt="menubar" onClick={() => {
                        setNavbar(!false)
                    }} className={`object-contain w-6 h-6 rounded-full`} />
                </div>
                <div className="">
                    <img src={Brand} alt="logo" className=" w-36 h-auto object-contain" />
                </div>
                <ul className={`flex justify-center items-center w-full pl-4 gap-4 flex-col pt-8`}>
                    {
                        navLinks.map((items) => {
                            return (<li className=" text-[17px] text-black font-plus font-medium" key={items.id}><a href="/">{items.label}</a></li>
                            )
                        })
                    }
                </ul>
                <div className="flex justify-center pl-4 items-start w-full pt-7">
                    <button className=" py-3 px-6 bg-[#3EC5FA] rounded-lg"><a href="/" className=" text-[17px] text-[#FEF5E7] font-semibold font-plus">Learn more</a></button>
                </div>
            </nav>
        </div>
    )
}

export default Navigation