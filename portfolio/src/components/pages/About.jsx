import {
  GithubLogo,
  InstagramLogo,
  MapPin,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import React from "react";
import pic from "./../../assets/pic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const About = () => {
  return (
    <div className=" mt-20 mx-7 pb-5 overflow-x-hidden" id="about">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        About Me
      </p>
      <div className="flex justify-evenly items-center mt-5 flex-wrap gap-5">
        <img
          src={pic}
          alt=""
          className="w-96 object-cover object-top"
          data-aos="fade-right"
        />

        <div className="max-w-2xl" data-aos="fade-left">
          <h1 className="text-3xl font-bold">
            Want to know more about me? Here you have it:
          </h1>

          <p className="mt-5">
            I'm a react developer dedicated to providing advanced web solution
            using ReactJs technology. I am very passionate about improving my
            coding skills & developing applications & websites.
          </p>

          <p className="mt-5">
            I began my journey as a front end developer in 2023, and since then,
            i've continued to grow and evolve as a developer, taking on new
            challenges and learning latest technologies along the way. I build
            web applications using modern technologies such as React, Tailwind,
            Bootstrap, supabase e.t.c.
          </p>

          <p className="mt-5">
            I'm always looking for opportunities to contribute to open source
            projects, and i'm always looking for opportunities to learn new
            technologies.
          </p>

          <p className="mt-5">Finally, more about me </p>
          <ul className=" list-disc">
            <li>B.sc in Business Administration</li>
            <li>Certified React Developer</li>
          </ul>

          <p className="mt-5">
            One last thing, i'm available for work, so feel free to reach out to
            me on any of the social media platforms below.
          </p>

          <div className="flex justify-center mt-5 gap-5">
            <a
              href="https://github.com/Benjamin-chidera"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <GithubLogo size={30} />
            </a>
            <a
              href="https://twitter.com/BenjaminChide14"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <TwitterLogo size={30} />
            </a>
            <a
              href="https://wa.me/09048401533"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <WhatsappLogo size={30} />
            </a>
            <a
              href="https://instagram.com/benjamin_c.dev?igshid=MzMyNGUyNmU2YQ=="
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <InstagramLogo size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
