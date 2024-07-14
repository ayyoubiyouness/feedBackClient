import React, { useEffect, useState } from "react";
import "./single.css";
import { Goback } from "../../components/goBack/Goback";
import MessageIcon from "@mui/icons-material/Message";
import { comment } from "../../db.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from "../../components/appwrite/database.js";
export const Single = () => {
  const [suggestion, setSuggestion] = useState([]);
  const commentaire = comment[0].comment;
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const init = async () => {
      try {

        const response = await db.Bug.list();
        console.log(response.total);
        let suggest;
        for (let i = 0; i < response.total; i++) {
          if (response.documents[i].$id === id) {
            console.log(i);
            suggest = response.documents[i];
            setSuggestion(suggest);
          }
        }
      } catch (error) {
        console.log(error);
      }

    };
    init();
  }, []);
  const handleDelete = async () => {
    db.Bug.delete(suggestion.$id);
    navigate("/")
    console.log('item has been deleted')
    
  };
  console.log(suggestion)


  return (
    <div className="single">
      <Goback />

      <button className="edit-feedback" onClick={handleDelete}>
        Delete
      </button>

      <div className="suggestion-bottom">
        <div className="suggestion-bottom_container">
          <div className="hello">
            <div className="suggestion_left thisthing">
              { suggestion.image &&
               <img src={suggestion.image} alt="" />
              }
            </div>
          </div>
          <div className="suggestion_center single-center">
            <span className="username"> {suggestion.username ? suggestion.username : "" } </span>
            <span className="suggestion_center-title ">
              
              {suggestion.title}
            </span>
            <span className="suggestion_center-subtitle">
              Description : {suggestion.details}{" "}
            </span>
            <span className="suggestion_center-subtitle">
              Chemin vers le fichier : {suggestion.filepath}
            </span>
            <span className="suggestion_center-subtitle">
              Nom du fichier : {suggestion.filename}
            </span>
            <button className="suggestion_center-type">
              {" "}
              {suggestion.category}{" "}
            </button>
          </div>
          <div className="suggestion_right">
            <div className="suggestion_right-container">
              <MessageIcon sx={{ fontSize: 40, color: "gray" }} />
              <span className="numberComment"> 3 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="singelComment">
        <span className="totalComment">1 Comments </span>
        {commentaire.map((comment) => (
          <div className="singleComment-container" key={comment.id}>
            <div className="singleComment-top">
              <img
                src="https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png"
                alt="this is an image"
                className="imageAuthor"
              />
              <span className="commentAuthor"> {comment.user.name} </span>
            </div>
            <div className="singleCommentBottom">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
