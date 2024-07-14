import React, { useContext } from "react";
import "./feedTitle.css";
import { MyContext } from "../../../../context/MyContext";
import { capitalizeFirstLetter } from "../../../../test.mjs";
export const FeedTitle = ({title, subtitle}) => {
  const {text, setText} = useContext(MyContext);

  const handleChange =  (e) => {
    if (title === "Title") {
      setText({...text, title : e.target.value })
    } else if (title === "Mail" )  {
      const response  = capitalizeFirstLetter(e.target.value)
      setText({...text, username : response })

    }
  }
  return (
    <div className="feed-title">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
      <input type="text" className="input-title" onChange={handleChange}/>
    </div>
  );
};

