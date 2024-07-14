import React from 'react'
import './goback.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export const Goback = () => {
  return (
    <>
      <Link to = "/" style={{textDecoration : 'none'}} >
        <div className='goback' >
          <ArrowBackIcon />
          <span className='text'>Go back </span>

        </div>
      </Link>
    </>
  )
}
