import React from "react";
import "./feedForm.css";
import { FeedTitle } from "./utils/feedTitle/FeedTitle";
import { FeedCategory } from "./utils/feedCategory/FeedCategory";
import { FeedDetail } from "./utils/feedDetail/FeedDetail";
import { FeedButton } from "./utils/feedButton/FeedButton";
import AddIcon from '@mui/icons-material/Add';
import { FeedImage } from "./utils/feedImage/FeedImage";
export const FeedForm = () => {
  return (
    <div className="hi">
      <div className="feedform">
        <div className="plus-icon">
          <AddIcon  sx={{ fontSize: 50 }}/>
        </div>
        <h1 className="title_form">Créer un nouveau retour </h1>
        <FeedTitle title="Title" subtitle = "Ajoutez un titre pour vôtre retour"/>
        <FeedTitle title="Mail" subtitle = "Ajoutez votre mail"/>
        <FeedCategory />
        <FeedDetail />
        <FeedImage />
        <FeedButton />
      </div>
    </div>
  );
};
