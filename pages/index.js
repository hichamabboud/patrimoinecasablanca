import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNavBar from "../components/TopNavBar";

export default function Home() {
  return (
    <div className="relative">
      <TopNavBar/>
      <Navbar />
      <h1> created by warrior trading </h1>

      <Footer />
    </div>
  )
}
