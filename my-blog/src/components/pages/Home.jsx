/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useNavigate } from "react-router-dom";
import { BackToTop } from "../ui/BackToTop";
import { Loading } from "../ui/loading";
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";

export const Home = ({ myData, loading }) => {
  const [show, setShow] = useState(false);
  const firstSixItems = myData.slice(0, 7);
  const navigate = useNavigate();



  return (
    <div>
      
      {loading ? (
        <Loading />
      ) : (
        <div className=" text-white mx-5">
          <Navbar/>
          <BackToTop />
          <div className=" mt-10">
            <hr />
            <p className=" my-3 text-xl">
              Get started with our <b>best stories</b>
            </p>
            <hr />
          </div>

          <div>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              // autoplay
              freeMode
              fadeEffect={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="mt-10"
            >
              {firstSixItems.map((story) => {
                return (
                  <SwiperSlide key={story.id}>
                    <div className=" overflow-hidden">
                      <img
                        src={story.img}
                        style={{
                          width: "600px",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        className=" hover:scale-150 duration-500 rounded-xl"
                        alt=""
                      />
                    </div>
                    <h1 className="text-sm font-bold mt-3">
                      {" "}
                      {show ? story.content : story.title.substring(0, 60)}
                    </h1>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="m-5">
            <p className="font-bold text-2xl mt-20">Latest Posts</p>
            <p className=" text-orange-400 text-3xl font-semibold mt-4">
              From All Sections
            </p>

            <div className="grid md:grid-cols-3 gap-5  ">
              {myData.map((story) => {
                return (
                  <div className="mt-5" key={story.id}>
                    <div className="overflow-hidden">
                      <img
                        src={story.img}
                        style={{
                          width: "400px",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        className=" hover:scale-150 duration-500 rounded-xl"
                        alt=""
                      />
                    </div>
                      <p className=" bg-gray-800 w-fit mt-3 py-1 px-3 rounded-full">{story.cat}</p>
                    <h1
                      className="text-sm font-bold mt-3 hover:underline hover:cursor-pointer hover:text-orange-600"
                      onClick={() => {
                        navigate("/overview/" + story.id);
                      }}
                    >
                      {story.title}
                    </h1>
                    <p className="mt-3">
                      {show ? story.content : story.content.substring(0, 100)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};
