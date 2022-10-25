import Head from "next/head";
import Image from "next/image"

import TopNav from "../components/nav/TopNav";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";


const presse = () => {

    const presses = [
        { title: "la 6ème édition du Festival Patrimoine de Casablanca-", presse: "Machahid 24", lien : "https://machahid24.com/societe/192508.html", image_url : "/images/presse/6ème_édition_Festival_Machahid_24.jpg"},
        { title: "la 5ème édition du Festival Patrimoine de Casablanca-", presse: "Mamlaka Press", lien : "https://www.mamlakapress.com/%D8%AA%D8%B1%D8%A7%D8%AB%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1/", image_url : "/images/presse/5ème_édition_Festival_Mamlaka_Press.jpg"},
        { title: "la 6ème édition du Festival Patrimoine de Casablanca-", presse: "Casablanca City", lien: "https://www.casablancacity.ma/ar", image_url: "/images/presse/6ème_édition_Festival_Casablanca_City.jpg" },
        { title: "la 6ème édition du Festival Patrimoine de Casablanca-", presse: "Dakhla Today", lien: "http://dakhlatoday.ma/news.php?extend.70.3", image_url: "/images/presse/6ème_édition_Festival_Dakhla_Today.jpg" },
        { title: "la 7ème édition du Festival Patrimoine de Casablanca-", presse: "Casa 24", lien: "https://www.casa24.ma/citynews/12833.html", image_url: "/images/presse/7ème_édition_Festival_Casa_24.jpeg" },
        { title: "la 5ème édition du Festival Patrimoine de Casablanca-", presse: "Maghress", lien: "https://www.maghress.com/aljassour/113849", image_url: "/images/presse/5ème_édition_Festival_Maghress.jpg" },
        { title: "la 6ème édition du Festival Patrimoine de Casablanca-", presse: "Al 3omk", lien: "https://al3omk.com/169433.html", image_url: "/images/presse/6ème_édition_Festival_Al_3omk.png" },
        { title: "la 7ème édition du Festival Patrimoine de Casablanca-", presse: "Al Mounaataf", lien : "http://ww1.almounaataf.com/", image_url : "/images/presse/7ème_édition_Festival_Al_Mounaataf.jpg"},
    ];

  return (
    <div className="w-full flex flex-col min-h-[100vh]">
      <Head>
        <title> Patrimoine Casablanca </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div>
            <TopNav />    
            <Navbar />      
        </div>
        <main className="flex-1 md:m-10 lg:my-10 lg:mx-20">
            <h1 className=" text-3xl text-center font-semibold mx-4 mt-6 mb-10 tracking-widest leading-4 bg-blue-500 p-4 text-white md:text-4xl rounded-md "> Presse </h1>      
            <div className=" max-w-7xl grid grid-cols-1 gap-6 justify-center md:grid-cols-2 lg:grid-cols-3">
                  {presses.map((press, index) => (
                    <div className="z-10 shadow-md flex flex-col justify-center w-72 my-4 mx-auto border border-gray-50" key={index}>
                        <h2 className=" font-semibold text-gray-600 text-center mb-4 px-4"> {press.title} </h2>
                          <a href={press.lien} target={"_blank"} rel="noreferrer">
                            <Image src={press.image_url} width={"300px"} height={"300px"} alt={press.title} className="" />  
                          </a>
                        <span className=" w-full text-lg font-semibold text-green-600 text-center mt-3 mb-4 "> { press.presse }</span>  
                    </div>
                    )) }
            </div>   
        </main>
        <Footer />
    </div>
  )
}

export default presse