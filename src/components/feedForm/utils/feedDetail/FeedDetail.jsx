import React, { useContext } from 'react'
import './feedDetaul.css'
import { MyContext } from '../../../../context/MyContext'
export const FeedDetail = () => {
  const {text, setText} = useContext(MyContext);
  
  const handleChange =(event) => {
    setText({...text, details : event.target.value })
    
  }
  return (
    <div className='feed-detail'>
      <span className="title">Plus de détails</span>
      <span className="subtitle">Ajoutez plus de détail dans cette case </span>
      <textarea id="w3review" name="w3review" rows="4" cols="50" className='input-detail' onChange={handleChange}>{text.details}</textarea>
    </div>
  )
}
