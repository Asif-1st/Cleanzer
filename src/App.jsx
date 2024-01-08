import Big from "./components/Big";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import GetService from "./components/GetService";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
// import { layout } from "./style"


function App() {

  return (
    <>
      <div className={``}>
        <Navigation />
      </div>
      <div>
        <Hero />
        <Service />
        <GetService />
        <Big />
        <Counter />
        <Testimonials />
        <Contact />
        <Footer />
        <div className=" bg-[#3EC5FA] w-full h-14 flex justify-center items-center">
          <p className=" text-center px-4 text-white">Copyright ©Developer Asif 2023 | All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default App



