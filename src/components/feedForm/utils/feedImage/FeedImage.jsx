import React, { useContext, useState } from "react";
import "./feedImage.css";
import axios from "axios";
import { MyContext } from "../../../../context/MyContext";
export const FeedImage = () => {
  const {text, setText} = useContext(MyContext);
  
  
  const handleImageUpload = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "upload");
    try {
      console.log("hi")
      const res = await axios.post('https://api.cloudinary.com/v1_1/ds9embh9b/image/upload', data);
      const file = res.data;
      console.log("hi")
      const result = file.secure_url
      setText({...text, image : file.secure_url})
      console.log(text)
    } catch (error) {
      console.log(error)
    }
    
    // try {
    //   const uploadRes = await axios.post(
    //     "https://api.cloudinary.com/v1_1/ds9embh9b/image/upload",
    //     data
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="feed-image">
        <span className="image-title">Choisir une image</span>
      <input type="file" onChange={handleImageUpload} className="input-image"/>
      
    </div>
  );
};
