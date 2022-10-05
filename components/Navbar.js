import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => { 
  const [ isOpen, setIsOpen ] = useState(false);
  const [ show, setShow ] = useState("hidden")
  
  const showMobileNavbar = () => { 
    setIsOpen(!isOpen)
    
    if (!isOpen) {
      setShow("flex")
    }
    else setShow("hidden")
  }

  return (
    <div>
      <div class="flex justify-between items-center z-30 shadow-xl p-4 h-16 lg:h-20 relative">

        <div className=" hidden lg:block mr-auto ">
          <Image src="/images/logo.png" width={"70"} height={"60"} />
        </div>
        <p className="lg:ml-auto">
          <span className=" font-bold font-serif text-xl lg:text-3xl" > Patrimoin </span> 
          <span className=" text-sm italic text-blue-500 font-serif lg:text-xl " > Casablanca </span>
        </p>

        <div className=" hidden ml-auto lg:flex lg:justify-center space-x-8 lg:mr-8" >
          <Link href={"/acceuil"}>
            <a className=" hover:border-b-4 hover:border-blue-600 hover:border-spacing-0"> Acceuil </a>
          </Link>
          <Link href={"/projets"}>
            <a className=" hover:border-b-4 hover:border-blue-600 hover:border-spacing-0"> Nos projets </a>
          </Link>
          <Link href={"/presse"}>
            <a className=" hover:border-b-4 hover:border-blue-600 hover:border-spacing-0"> Presse </a>
          </Link>
          <Link href={"/contact"}>
            <a className=" hover:border-b-4 hover:border-blue-600 hover:border-spacing-0"> Contact </a>
          </Link>
        </div>
        
        <div className=" lg:hidden">
          <Image src="/images/logo.png" width={"50"} height={"40"} />
        </div>
        <div onClick={showMobileNavbar} className="lg:hidden">
          { !isOpen?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        </div>
      </div>

      <div className={`w-full h-96 ${show} flex-col justify-center gap-4 bg-gray-600 lg:hidden absolute`} >
        <Link href={"/acceuil"}>
          <a className=" text-white px-[50%] font-semibold hover:bg-blue-600 py-4 hover:shadow-md hover:z-50 hover:shadow-white"> Acceuil </a>
        </Link>
        <Link href={"/projets"}>
          <a className=" text-white px-[50%] font-semibold hover:bg-blue-600 py-4 hover:shadow-md hover:z-50 hover:shadow-white"> <span className=" w-[200px] block" > Nos projets </span> </a>
        </Link>
        <Link href={"/presse"}>
          <a className=" text-white px-[50%] font-semibold hover:bg-blue-600 py-4 hover:shadow-md hover:z-50 hover:shadow-white"> Presse </a>
        </Link>
        <Link href={"/contact"}>
          <a className=" text-white px-[50%] font-semibold hover:bg-blue-600 py-4 hover:shadow-md hover:z-50 hover:shadow-white"> Contact </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar