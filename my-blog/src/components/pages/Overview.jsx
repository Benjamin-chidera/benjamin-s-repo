/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/client";
import { BackToTop } from "../ui/BackToTop";
import { Comments } from "../ui/Comments";
import { AddComments } from "../ui/AddComments";
import { ErrorUi } from "../ui/ErrorUi";
import { Loading } from "../ui/loading";
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";

export const Overview = ({loading}) => {
  const { id } = useParams();
  
  const [show, setShow] = useState([]);
  const [comment, setComment] = useState([]);

    const [myData, setMyData] = useState([]);
    const navigate = useNavigate()
    const [x, setX] = useState(false)
   
    const list = myData.slice(0, 9)
    


    const getData = async () => {
      const { data, error } = await supabase.from("stories").select();

      if (error) {
        <ErrorUi />;
      } else {
        setMyData(data);
      }
    };

    useEffect(() => {
      getData();
    }, []);

  const getDat = async () => {
    const { data, error } = await supabase
      .from("stories")
      .select()
      .eq("id", id);

    if (error) {
      console.log(error);
    } else {
      setShow(data);
    }
  };

  useEffect(() => {
    getDat();
  }, []);

  return (
    <div>
     {loading ? (<Loading/>) : <div className="text-white">
      <Navbar/>
        <BackToTop />
        <div className="text-white text-center my-5">
          {show.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center items-center flex-col gap-5"
              >
                <h1 className=" text-2xl font-bold">{item.title}</h1>
                <img src={item.img} className="rounded-2xl w-96" alt="" />
                <p className="mx-3 text-xl font-semibold">{item.content}</p>
              </div>
            );
          })}
        </div>

        {/* <hr className="mx-5 mt-12" /> */}
        <div className="mx-5 my-6">
        {/* <p className="text-xl">Comments</p> */}

        {/* <Comments /> */}
      </div> 

      <div className="pt-5">
        <hr className="mx-5"/>
      </div>
          {/* <AddComments/> */}

        <div className="mx-5 my-10">
          <h1 className="font-semibold text-xl">You may also like</h1>

          <div className="grid md:grid-cols-3 gap-5  ">
            {list.map((story) => {
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
                    {x ? story.content : story.content.substring(0, 100)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>}
      <Footer/>
    </div>
  );
};
