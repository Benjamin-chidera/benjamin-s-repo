/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { supabase } from "../../supabase/client";
import { BackToTop } from "../ui/BackToTop";
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";


export const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [cat, setCat] = useState("");
  // const [visible, setVisible] = useState(false);
  // const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !img || !cat) {
      console.log("pls fill the form correctly");
      return;
    }

    const { data, error } = await supabase
      .from("stories")
      .insert([{ title, content, img, cat }]);

 

    if (error) {
      console.log("Error adding data:", error);
    } else {
      console.log("Data added successfully:", data);

      setTitle("");
      setContent("");
      setImg("");
      setCat("");
    }
  };

  const handleSelect = (e) => {
    const selectValue = e.target.value;
    setCat(selectValue);
  };

 

  return (
    <div className=" text-white">
      <Navbar/>
      <BackToTop/>
      <div className=" m-10">
        <form onSubmit={handleSubmit}>
          <section className=" md:flex justify-between  gap-5 ">
            <div>
              <input
                type="text"
                placeholder="Post title"
                className=" w-96 p-2 max-w-full text-black outline-none rounded-br-2xl"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <textarea
                name=""
                id=""
                placeholder="Post content"
                className="mt-5 w-96 p-3 text-black outline-none rounded-tr-2xl max-w-full"
                rows="10"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>

            <div>
              <input
                type="text"
                className="mt-5 w-96 p-2 text-black outline-none rounded-br-2xl max-w-full"
                placeholder="Image url"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
                name=""
                id=""
              />
              <br />
              {/* <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                name=""
                id=""
              /> */}

              <br />

              <select
                name=""
                id=""
                className="bg-black mt-5"
                value={cat}
                onChange={handleSelect}
              >
                <option value="" hidden>
                  Categories
                </option>
                <option value="politics">Politics</option>
                <option value="sport">Sport</option>
                <option value="music">Music</option>
                <option value="romance">Romance</option>
              </select>
            </div>
          </section>
          <div className="text-center">
            {/* <input
              type="submit"
              value="Submit"
              className="  p-2 font-semibold border-2 w-fit py-2 px-8 mt-5  hover:bg-gradient-to-bl from-black to-white rounded-tl-3xl rounded-br-2xl"
            /> */}

            <button
              type="submit"
              // disabled={vis}
              // disabled={uploading}
              className="  p-2 font-semibold border-2 w-fit py-2 px-8 mt-5  hover:bg-gradient-to-bl from-black to-white rounded-tl-3xl rounded-br-2xl"
            >
              {/* {uploading ? "uploading..." : "Submit"} */}
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
