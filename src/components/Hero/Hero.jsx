import React from "react";
import Navbar from "../Navbar/Navbar";
import OrangeImg from "../../assets/orangebg.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidetbar] = React.useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[550px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidetbar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[550px] ">
            {/* Text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 data-aos="fade-up" className="text-xl pl-6 md:pl-14">
                01____________
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl font-bold uppercase text-shadow"
              >
                A healthy Fruit
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium atque provident soluta nostrum ullam?
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="0"
                className="secondary-btn"
              >
                Shop Now
              </button>
            </div>
            {/* image section */}
            <div data-aos="zoom-in">
              <img
                className="relative z-10 w-[300px] img-shadow"
                src={OrangeImg}
                alt=""
              />
            </div>
            {/* blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>
        {/* background large text */}
        <h1
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1800"
          className="large-text"
        >
          Orange
        </h1>

        {/* Sidebar section */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
