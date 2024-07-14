import React, { useState } from "react";
import { Goback } from "../../components/goBack/Goback";
import { FeedForm } from "../../components/feedForm/FeedForm";
import { MyContext } from "../../context/MyContext";

export const AddFeed = () => {
  const [text, setText] = useState({
    username : "",
    category : "",
    filename : "",
    filepath : "",
    details : "",
    title : "",
    details : "",
    image : ""
  })
  console.log(text)
  return (
    <div className="addfeed">
      <MyContext.Provider value={{ text, setText }}>
        <Goback />
        <FeedForm />
      </MyContext.Provider>
    </div>
  );
};
