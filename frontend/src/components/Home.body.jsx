import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../css/home.style.css";
import SquishyCard from './Carddesign'


function Homebody(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>       
         <div className="mx-auto w-[263PX] our_service_col display_none">
        <h1 className="text-6xl font_style font-extrabold display_none">
          Our <span className="text-primary_color_gold font_style">Services</span>
        </h1>
      </div>
      <br />
      <p className="text-xl mx-[298px] our_service_col_para display_none">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </p>
      <br />
      <div className="w-[100%] h-[350px] mx-auto grid grid-flow-col gap-10 content-center justify-center service_container">
        <div className="services w-[465px] display_none">
          <img
            src="./src/assets/dev.webp"
            className="w-[350px] h-[150px]"
            alt=""
          />
          <h2>Development</h2>
          <p>
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using
          </p>
          <button className="gold-button shine-button">Read More</button>
        </div>
        <div className="services w-[465px] display_none">
          <img
            src="./src/assets/ui.webp"
            className="w-[200px] h-[140px] bg-transparent"
            alt=""
          />
          <h2>Designing</h2>
          <p>
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using
          </p>
          <button className="gold-button shine-button">Read More</button>
        </div>
        <div className="services w-[465px] display_none">
          <img
            src="./src/assets/it.webp"
            className="w-[200px] h-[140px]"
            alt=""
          />
          <h2>IT & Software</h2>
          <p>
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using
          </p>
          <button className="gold-button shine-button">Read More</button>
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
      <div className="mx-auto w-[325px] font_style display_none">
        <h1 className="text-6xl font_style">
          Why <span className="text-primary_color_gold font_style">Choose</span> Us
        </h1>{" "}
        <br /><br />
      </div>
      <SquishyCard/>
      <div className="wrapper2 display_none border-2 rounded-2xl w-[1400px] mx-auto mt-[80px]">
        <h1 className="text-7xl mx-auto w-[243px] mt-8 font_style">
          Our <span className="text-primary_color_gold font_style">Team</span>
        </h1>
        <div className="team gap-4 mt-20">
          <div className="team_member rounded-xl" data-aos="flip-down" >
            <div className="team_img">
              <img src="./src/assets/team1.png" alt="Team_image" />
            </div>
            <h3>Paul Doe</h3>
            <p className="role">UI developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div className="team_member rounded-xl" data-aos="flip-down">
            <div className="team_img">
              <img src="./src/assets/team2.png" alt="Team_image" />
            </div>
            <h3>Rosie Meg</h3>
            <p className="role">Tester</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div className="team_member rounded-xl" data-aos="flip-down">
            <div className="team_img">
              <img src="./src/assets/team3.png" alt="Team_image" />
            </div>
            <h3>Alex Wood</h3>
            <p className="role">Support Lead</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div className="team_member rounded-xl" data-aos="flip-down">
            <div className="team_img">
              <img src="./src/assets/team2.png" alt="Team_image" />
            </div>
            <h3>Rosie Meg</h3>
            <p className="role">Tester</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
          <div className="team_member rounded-xl" data-aos="flip-down">
            <div className="team_img">
              <img src="./src/assets/team3.png" alt="Team_image" />
            </div>
            <h3>Alex Wood</h3>
            <p className="role">Support Lead</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
              nulla harum nemo distinctio quam blanditiis dignissimos.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br /><br />
      <div className="mx-auto w-[472px] display_none">
        <h1 className="text-6xl mb-10 font_style">
          Plans and{" "}
          <span className="text-primary_color_gold font_style">Subscription</span>
        </h1>
      </div>
      <div className="w-[1300px] mx-auto flex justify-between cards display_none">
        <div className="w-[600px] grid gap-y-7 display_none justify-center mx-auto">
          <div
            className="w-[500px] h-[350px] plans display_none "
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <h1>Personal Plan</h1>
            <p>Starting at ₹850 per month</p>
            <p>Billed monthly or annually. Cancel anytime.</p>
            <button className="gold-button shine-button">Start Subscribe</button>
            <ul>
              <li>Access to 11,000+ top courses</li>
              <li>Certification prep</li>
              <li>Goal-focused recommendations</li>
              <li>AI-powered coding exercises</li>
            </ul>
          </div>
          <div
            className="w-[500px] h-[350px] plans display_none"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <img
              className="w-[500px] h-[350px] "
              src="./src/assets/box1.webp"
              alt=""
            />
          </div>
          <div
            className="w-[500px] h-[350px] plans display_none"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <h1>Team Plan</h1>
            <p>Starting at ₹1850 per month</p>
            <p>Billed monthly or annually. Cancel anytime.</p>
            <button className="gold-button shine-button">Start Subscribe</button>
            <ul>
              <li>Access to 11,000+ top courses</li>
              <li>Certification prep</li>
              <li>Goal-focused recommendations</li>
              <li>AI-powered coding exercises</li>
              <li>Analytics and adoption reports</li>
            </ul>
          </div>
        </div>
        <div className="w-[600px] grid gap-y-7 justify-center mx-auto display_none">
          <div
            className="w-[500px] h-[350px] plans display_none"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img
              className="w-[500px] h-[350px]"
              src="./src/assets/box2.webp"
              alt=""
            />
          </div>
          <div
            className="w-[500px] h-[350px] plans display_none"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h1>Enterprise Plan</h1>
            <p>Conatact Sales For Pricing</p>
            <p>Billed monthly or annually. Cancel anytime.</p>
            <button className="gold-button shine-button">Start Subscribe</button>
            <ul>
              <li>Access to 11,000+ top courses</li>
              <li>Certification prep</li>
              <li>Goal-focused recommendations</li>
              <li>AI-powered coding exercises</li>
              <li>Advanced analytics and insights</li>
            </ul>
          </div>
          <div
            className="w-[500px] h-[350px] plans display_none"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img
              className="w-[500px] h-[350px]"
              src="./src/assets/box3.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />

        </>
    )
}

export default Homebody