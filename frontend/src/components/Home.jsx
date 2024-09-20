import Homebody from "../components/Home.body";
import Slider from "./slider";
import "../css/home.style.css";
import Footer from "./footer";


function Home() {

  return (
    <>    
     <Slider/><br /> <br /><br />
     <Homebody/>
      <Footer/>
    </>
  );
}

export default Home;
