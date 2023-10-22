/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { supabase } from "../../supabase/client";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const getComments = async () => {
    const { data, error } = await supabase
      .from("comment")
      .select()
      .eq("id", id);

    if (error) {
      console.log(error);
    } else {
      setComments(data);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);

  return (
    <div>
      {comments.length === 0 ? (
        <p className="text-center my-5">There are no comments</p>
      ) : (
        ""
      )}

      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p className="text-gray-600 text-sm font-bold">{comment.name}</p>
              <p className="text-gray-600 text-sm font-bold">
                {comment.comment}
              </p>
              {/*  <p className="text-gray-600 text-sm font-bold">
                {comment.comment}
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
