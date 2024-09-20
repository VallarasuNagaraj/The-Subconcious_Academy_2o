import "../css/home.style.css";
import Footer from "./footer";
import Slider from "./slider";

function About(){
    return(
        <>
        <Slider/> <br /><br /><br />

        <h1 className="text-center text-6xl font_style">About <span className="text-primary_color_gold font_style">Us</span></h1><br />
            <p className="text-center font-serif text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> <br /><br /><br />

          <div className="mx-auto h-[600px] sm:h-[1200px] sm:mt-[-70px] w-[80%] shadow rounded-[20px] bg-bg_color sm:bg-transparent sm:border-0"><br />
            <div className='w-full h-[600px] sm:grid sm:mx-auto gap-10 sm:justify-items-center flex justify-center'>
                <img src="../src/assets/about.webp" className="w-[450px] sm:w-[300px] sm:h-[300px] rounded-[20px] h-[460px] mt-12 ml-2 " alt="" />

                <div className="items-center font-serif sm:w-[340px]">
                <p className="text-justify mt-12 text-lg mr-[10px] sm:text-center sm:mr-[0px]"><span className="ml-[190px] sm:ml-[0px] text-3xl">We Are Subconsious Academy</span><br /><br />
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationbr
                 in some  form, by injected humour, or randomised words which dont look even slightly <br />
                 believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All
                Molestiae odio earum non qui cumque provident <br /> voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                 </p><br />
                 <button className="gold-button shine-button w-32 h-12 mx-72 sm:mx-28" >Read More</button>
                </div>
            </div>
          </div> <br /><br /><br />

      <Footer/>
        </>
    )
}



export default About