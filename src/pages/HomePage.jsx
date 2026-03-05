import Header from "../components/header/Head";
import About from "../components/about/About";
import System from "../components/system/System";
import Gallery from "../components/gallery/Gallery";
import Statistics from "../components/statistics/Statistics";
import Register from "../components/contact/Registes";
import { Phone } from "lucide-react";



function HomePage() {
  return (
    <>
      <Header />
      <About />
      <System />
      <Gallery />
      <Statistics />
      <Register />
    </>
  );
}

export default HomePage;
