import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => { 
    setIsOpen(!isOpen)
  }
  return (
    <div className=" bg-white" >
      <div className="max-w-7xl h-[6vh] shadow-md mx-auto" >

        {/* Mobile version */}
        <div className="h-full flex justify-between items-center mx-4 ">
          <Link href={"/"} passHref >
            <div className=" cursor-pointer">
              <span className="text-sm font-bold text-gray-700 patrimoine_casablanca"> Patrimoine </span>
              <span className=" text-xs patrimoine_casablanca text-blue-500 font-bold ml-[-4px] " > Casablanca </span>
            </div>
          </Link>

          {!isOpen ? 
          <svg onClick={openMobileMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
            :
          <svg onClick={openMobileMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        }

        </div>
      </div>
    </div>
  )
}

export default Navbar