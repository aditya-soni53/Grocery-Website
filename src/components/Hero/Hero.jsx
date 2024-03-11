import React from "react";
import OrangeImg from "../../assets/orangebg.png";

const Hero = () => {
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[550px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}

          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[550px] ">
            {/* Text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-xl pl-6 md:pl-14">01____________</h1>
              <h1 className="text-3xl font-bold uppercase text-shadow">
                A healthy Fruit
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium atque provident soluta nostrum ullam?
              </p>
              <button className="primary-btn">Shop Now</button>
            </div>
            {/* image section */}
            <div>
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
        <h1 className="large-text">Orange</h1>

        {/* Sidebar section */}
      </section>
    </main>
  );
};

export default Hero;
