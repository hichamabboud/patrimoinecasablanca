import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState("hidden"); 
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div>
          <nav className="w-full shadow-md h-14 z-10 items-center flex justify-between px-3 relative " >
              <a href="/" >
                  <span className=" font-semibold font-serif text-xl " > Patrimoine </span>
                  <span className=" text-blue-500 font-mono font-semibold italic " > Casablanca </span>
              </a>
              <Image src="/images/logo.png" height={"40"} width={"50"} className="h-12 ml-[-5rem] " alt="patrimoine casablanca logo" />
              
              <div>
          {!isOpen ?
                  <svg onClick={() => {setIsOpen(!isOpen), setShow("flex")}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"   stroke="currentColor" className="w-7 h-7 bg-blue-500 text-white rounded-sm hover:outline-blue-500 hover:outline hover:outline-1 hover:outline-offset-2 hover:bg-blue-600 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                    :
                  <svg onClick={() => {setIsOpen(!isOpen), setShow("hidden")}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 bg-blue-500 text-white rounded-sm hover:outline-blue-500 hover:outline hover:outline-1 hover:outline-offset-2 hover:bg-blue-600 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  }
              </div>
          </nav>   

          <div className={`${show} flex-col items-center bg-gray-50 text-gray-600 mt-0  h-96 gap-8 py-10 absolute w-full z-40`}>
            <Link href="#" passHref>
                <a className=" w-full px-[30%] hover:text-white hover:bg-blue-700 hover:py-3 hover:duration-500 "> Acceuil </a>
            </Link>
            <Link href="#" passHref>
                <a className=" w-full px-[30%] hover:text-white hover:bg-blue-700 hover:py-3 hover:duration-500 "> Nos projets </a>
            </Link>
            <Link href="#" passHref>
                <a className=" w-full px-[30%] hover:text-white hover:bg-blue-700 hover:py-3 hover:duration-500 "> Presse </a>
            </Link>
            <Link href="#" passHref>
                <a className=" w-full px-[30%] hover:text-white hover:bg-blue-700 hover:py-3 hover:duration-500 "> Contact </a>
            </Link>
          
          </div>   
    </div>
  )
}

export default Navbar