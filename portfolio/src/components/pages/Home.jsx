import React from "react";
import { MapPin } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import pic from "./../../assets/propic.png";
import wave from "./../../assets/512.gif";

export const Home = () => {
  return (
    <div id="home">
      <div
        className=" flex justify-between items-center pt-20 md:pt-40 mx-7 flex-wrap gap-5"
        data-aos="fade-in"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold flex items-center gap-3">
            Hi, i'm Benjamin{" "}
            <span>
              <img src={wave} className="w-14" alt="" />
            </span>
          </h1>

          <p className=" max-w-3xl mt-5 text-xl">
            I'm a front end web developer (React.js) with the focus on creating
            (and occasionally designing) expectional digital experiences that
            are fast, accessible, visually appealing, and responsive. Highly
            aspiring to work in a challenging competitive working environment
            where I can utilize my knowledge and skill efficiently to contribute
            to the overall organization goals and objective through
            determination, communication, dedication and hard work.
          </p>

          <p className="mt-5 flex gap-1 items-center">
            <MapPin size={30} />
            Lagos, Nigeria
          </p>
        </div>

        <div>
          <img src={pic} alt="" className="w-72" />
        </div>
      </div>
    </div>
  );
};
