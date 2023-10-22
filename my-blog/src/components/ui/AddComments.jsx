import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../../supabase/client";

export const AddComments = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !comment) {
      console.log("pls fill the form correctly");
      return;
    }

    const { data, error } = await supabase
      .from("comment")
      .insert([{ comment, name }]);

    if (error) {
      console.log(error);
    } else {
      setName("");
      setComment("");
      return;
    }
  };

  return (
    <div>
      {" "}
      <div className="mt-10 mx-5">
        <p className="text-xl font-semibold">Add New Commemt</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className=" mb-5 max-w-full px-3 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Your name"
            style={{ width: "800px" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <textarea
            name=""
            id=""
            className="mb-5 max-w-full px-3 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Add Comment"
            style={{ width: "800px" }}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
          <br />
          <button
            // onClick={submitComment}
            type="submit"
            className="w-fit px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 hover:translate-x-7 duration-700 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
