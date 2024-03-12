import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <div data-aos="fade-up" className="space-y-6 ">
            <h1 className="text-3xl font-bold">Orange Mint</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              earum delectus libero. Beatae, illo! Nisi voluptatum laudantium in
              tempora natus fugit deserunt dolorum, magnam earum?
            </p>
          </div>
          {/* NavLink section */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column links */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Search Fruits</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* second column links */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Search Fruits</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* social links section */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div>
              <p>+1 (123) 585-2563</p>
              <p>Jaipur , Rajasthan</p>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
        {/* copyright section */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">Copyright &copy; aditya .All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
