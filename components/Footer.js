import Link from "next/link";

const Footer = () => {
  const getYearDate = new Date();
  const getYear = getYearDate.getFullYear();
  return (
    <div className=" bg-gray-600 w-full h-[30vh] flex flex-col justify-between absolute left-0 bottom-[-100] mt-20" >
      <h1> Patrimoine Casablanca </h1>
      <div class="text-center p-1 bg-white m-1">
        © {getYear} Copyright:
        <Link  href="/">
          <a class=" text-gray-600 font-bold text-sm "> Patrimoine Casablanca </a>
        </Link>
        . All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer