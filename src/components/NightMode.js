import React, {useContext, useState} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const NightMode = () => {

  const { theme, dispatch } = useContext(ThemeContext);

  const handleSubmit = () => {
    if(!theme.theme.night){
      dispatch({type: 'CHANGE_THEME', payload: { night: true }}); 
    } else{
      dispatch({type: 'CHANGE_THEME', payload: { night: false }}); 
    }
  }
  return (
    <div className="night-mode" onClick={handleSubmit}>
      Night
    </div>
  )
}

export default NightMode