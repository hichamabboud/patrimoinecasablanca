const Footer = () => {
    return (
        <footer className="border-2 m-2 p-12">
            <div>
                <a href="#">
                    <img src="images/logo.png" className="footer_logo" />
                    <span className="footer_patrimoine">Patrimoine Casablanca</span>
                </a>

                <div className="flex justify-between ">
                    <a href="tel:+212660277332" className=" relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline"> <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" /> </svg>
                        <span className=" text-sm font-semibold"> Phone </span>
                        <span className=" m-2 absolute bg-white border rounded-lg px-2 top-0 left-18 hover:hidden">123456789</span>
                    </a>
                    <a href="mailto:sarhane.taoufik@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>
                        <span className="text-sm font-semibold">  Email </span>
                    </a>
                    {/* <a>
                        <span> Location </span> 
                        <span>
                            Centre de la jeunesse Moulay Rachid, Boulevard BOUKAMAA ABOU SAID CASABLANCA MAROC
                        </span>
                    </a> */}
                </div>
            </div>
        </footer>        
  )
}

export default Footer