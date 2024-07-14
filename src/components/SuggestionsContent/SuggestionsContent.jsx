import React, { useEffect, useState } from "react";
import "./suggestionContent.css";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";
import db from "../appwrite/database";
export const SuggestionsContent = () => {
  const [totalSugges, setTotalSugges ] = useState("")
  const [suggestion, setSuggestion] = useState([])


  useEffect(() => {
    const init = async () => {
      try {
        const response = await db.Bug.list()
        setSuggestion(response.documents)
        setTotalSugges(response.total)
      } catch (error) {
        console.log(error)
        
      }
    }
    init()
  }, [])


  // useEffect(()=> {
  //   const fetchData = async() => {
  //     try {
  //       const res = await axios.get("http://localhost:8801/count")
  //       setTotalSugges(res.data)
  //       console.log(res.data)


  //     } catch (error) {
  //       console.log(error)
        
  //     }
  //   }
  //   fetchData()
  // }, [])

  // useEffect(()=> {
  //   const fetchData = async() => {
  //     try {
  //       const res = await axios.get("http://localhost:8801/allbugs")
  //       setSuggestion(res.data)
  //       console.log(res.data)

  //     } catch (error) {
  //       console.log(error)
        
  //     }
  //   }
  //   fetchData()
  // }, [])
  return (
    <div className="suggestion-content">
      <div className="suggestion-container">
        <div className="suggestion-top">
          <div className="top-left">
            <TipsAndUpdatesIcon sx={{ color: "white", fontSize: 40 }} />
            <span className="number-suggestion">{totalSugges} suggestions</span>
          </div>
          <div className="top-right">
            <Link to="/add-feedback">
              <button className="addButton">+ Ajoutez une remarque</button>
            </Link>
          </div>
        </div>

        {suggestion.map((sug, i) => (
          <div className="suggestion-bottom" key={sug.$id}>
            <div className="suggestion-bottom_container">
              <div className="hello">
                <div className="suggestion_left">
                  <ArrowDropUpIcon sx={{ color: "white", fontSize: "27px" }} />
                  <span className="numberlikes"> 22 </span>
                </div>
              </div>
              <div className="suggestion_center">
                <Link to={`single/${sug.$id}`} style={{textDecoration : 'none'}}>
                  <span className="suggestion_center-title"> {sug.title} </span>
                </Link>
                <span className="suggestion_center-subtitle">
                  
                  {sug.details}
                </span>
                <button className="suggestion_center-type">
                  
                  {sug.category}
                </button>
              </div>
              <div className="suggestion_right">
                <div className="suggestion_right-container">
                  <MessageIcon sx={{ fontSize: 40, color: "gray" }} />
                  <span className="numberComment"> 5 </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
