/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackToTop } from "./BackToTop";
import { Loading } from "./loading";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const EachCat = ({ myData, loading }) => {
  const params = useParams();
  const cat = params.id;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // const datas = myData.filter((item) => item.cat === parseInt(cat));

  const [eachData, setEachData] = useState([]);

  const getCat = () => {
    const myDatas = myData.filter((items) => {
      return items.cat.toUpperCase() === cat.toUpperCase();
    });

    setEachData(myDatas);
  };

  useEffect(() => {
    getCat();
  }, []);

  useEffect(() => {
    getCat();
  }, [myData, cat]);

  console.log(eachData);

  return (
    <div>
      {loading ? (<Loading/>) : <div className=" text-white">
        <Navbar/>
        <BackToTop />
        <h1 className="text-center font-bold text-4xl my-5 uppercase ">
          {cat}
        </h1>
        <div className="grid md:grid-cols-3 gap-5  mx-5">
          {eachData.map((story) => {
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
                <p className=" bg-gray-800 w-fit mt-3 py-1 px-3 rounded-full">
                  {story.cat}
                </p>
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
      </div>}
      <Footer/>
    </div>
  );
};
