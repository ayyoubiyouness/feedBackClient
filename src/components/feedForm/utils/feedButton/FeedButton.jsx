import React, { useContext } from "react";
import "./feedButton.css";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../../../context/MyContext";

import db from "../../../appwrite/database";
export const FeedButton = () => {
  const navigate = useNavigate();
  const {text, setText} = useContext(MyContext);
  const handleClick = async () => {
    try {
      const response = await db.Bug.create(text)
      navigate("/");
    } catch (error) {
      console.log(error)
      
    }
  }

  



  return (
    <div className="feed-button">
      <Link to='/'>
        <button className="cancel" > Cancel</button>
      </Link>
      <button className="add" onClick={handleClick}> Add feedback</button>
    </div>
  );
};
