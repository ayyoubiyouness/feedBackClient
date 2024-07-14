import React, { useState } from "react";
import "./feedCategory.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SelectCategory } from "../selectCategory/SelectCategory";
export const FeedCategory = () => {
  const [category, setCategory] = useState("Bug")
  
  return (
    <div className="feed-category">
      <h1 className="category-title">Catégorie</h1>
      <span className="category-subtitle">Choisir une catégorie parmi les suivantes :</span>
      
      <div >
        <SelectCategory />
      </div>
      

    </div>
  );
};
