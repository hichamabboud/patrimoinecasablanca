import Head from "next/head";

import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/nav/Navbar";
import TopNav from "../components/nav/TopNav";

const Home = () => {
  return (
    <div className=" w-full flex flex-col min-h-[100vh]">
      <Head>
        <title> Patrimoine Casablanca </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div>
            <TopNav />    
            <Navbar />      
        </div>
        <Main />
        <Footer />
    </div>
  )
}

export default Home;