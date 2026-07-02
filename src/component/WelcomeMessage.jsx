import React from 'react'
import style from "./WelcomeMessage.module.css"
const WelcomeMessage = ({todoItems}) => {
  return (todoItems.length==0 && <p className={style.welcome}>Enjoy your day</p>

  )
}

export default WelcomeMessage