import Head from "next/head";
import Footer from "../components/Footer";

import Navbar from "../components/nav/Navbar";
import TopNav from "../components/nav/TopNav";
import ProjetPage from "../components/ProjetPage";


const projet = () => {
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
        <ProjetPage />
        <Footer />
    </div>
  )
}

export default projet