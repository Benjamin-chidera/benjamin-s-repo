import { ArrowSquareOut, CopySimple, Envelope, PhoneCall,  } from '@phosphor-icons/react';
import React, { useState } from 'react'
import {
  GithubLogo,
  InstagramLogo,

  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export const GetInTouch = () => {

  const mail = "benjaminchidera72@gmail.com"
  const phone = "+234 9048401433"
  const [copy, setCopy] = useState("")
  const [num, setNum] = useState("")

  
  return (
    <div className=" mt-20 mx-7 pb-5" id="contact">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        Get in touch
      </p>
      <div className="flex items-center gap-3 mt-5">
        <Envelope size={30} /> {mail}{" "}
        <button
          onClick={() => {
            navigator.clipboard.writeText(mail);
            setCopy("copied");

            setTimeout(() => {
              setCopy("");
            }, 2000);
          }}
        >
          <CopySimple size={20} />
        </button>
        {copy}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <PhoneCall size={30} /> {phone}{" "}
        <button
          onClick={() => {
            navigator.clipboard.writeText(phone);
            setNum("copied");

            setTimeout(() => {
              setNum("");
            }, 2000);
          }}
        >
          <CopySimple />
        </button>
        {num}
      </div>
      <h1 className="font-bold text-2xl mt-5">Get In Touch</h1>
      <p className="mt-3 max-w-xl text-left text-lg">
        If you have any questions or comments, feel free to contact me. I'd love
        to hear from you!
      </p>
      <p className="mt-5">
        <a href="mailto:<EMAIL>" target="_blank" rel="noopener noreferrer">
          <ArrowSquareOut size={40} color="gray" />
        </a>
      </p>

      <div className="mt-10">
        <p className="text-center font-semibold">
          You may also find me on these platforms!
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
  );
}
