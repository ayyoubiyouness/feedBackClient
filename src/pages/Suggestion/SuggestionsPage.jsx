import React, { useEffect } from 'react'
import { SuggestionsAside } from '../../components/SuggestionsAside/SuggestionsAside'
import { SuggestionsContent } from '../../components/SuggestionsContent/SuggestionsContent'
import './suggestionPage.css'
import db from '../../components/appwrite/database'
export const SuggestionsPage = () => {
  useEffect(() => {
    const init = async() => {
      try {
        const response = await db.Bug.list()
        console.log(response)
      } catch (error) {
        console.log(error)
        
      }
    }
    init()
    
  }, [])
  return (
    <div className='suggestions'>
      <SuggestionsAside />
      <SuggestionsContent />
    </div>
  )
}
