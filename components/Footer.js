import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-[25vh]">
      <hr className=" max-w-md lg:max-w-7xl border-1 border-gray-400 mx-auto " />
      <div className=" w-full px-6 py-8 flex flex-col justify-between items-start gap-6 " >
        <div className=" w-full flex flex-col justify-center items-center gap-2 " >
          <Image src="/images/logo.png" width={"60px"} height={"60px"} alt="patrimoine casablanca" />
          <p className=" text-sm lg:text-md tracking-wider text-[#4b5563] "> Organiser de concerts et de festivals culturels et artistiques par des jeunes.</p>
        </div>
        <div className=" w-full flex justify-center gap-6 md:gap-14">
            <Link href={"/projet"} passHr py-8ef>
              <button className=" text-[#4b5563]">
                Projets
              </button>
            </Link>

            <Link href={"/presse"} passHr py-8ef>
              <button className=" text-[#4b5563]">
                Presse
              </button>
            </Link>

            <Link href={"/contact"} passHref>
              <button className=" text-[#4b5563]">
                Contact
              </button>
            </Link>
        </div>
      </div>

      <div className=" bg-black py-6 flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-6 w-[100%] lg:px-32 ">
        <div className="flex justify-center gap-8">
          {/* Facebook link */}
          <a href="https://www.facebook.com/patrimoinecasablanca" target={"_blank"} rel={"noreferrer"}>
            <svg
            class="w-5 h-5 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
            </svg>
          </a>

          {/* Twitter Link */}
          <a href="https://twitter.com/PatrimoineCasa1" target={"_blank"} rel={"noreferrer"}>
            <svg
              class="w-5 h-5 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>

          {/* Instagram Link  */}
          <a href="https://www.instagram.com/patrimoine.casablanca/" target={"_blank"} rel={"noreferrer"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 text-[]#c13584"><path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          
          {/* Youtube Link  */}
          <a href="https://www.youtube.com/channel/UCBwFcCGjQ5ZjSyUgYzOlE6g" target={"_blank"} rel={"noreferrer"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 text-white "><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </svg>
          </a>

        </div>
        <span className=" border border-white w-80 md:w-[700px] lg:hidden"></span>
        <span className=" text-sm text-white" > © ${year} Patrimoine Casablanca. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer