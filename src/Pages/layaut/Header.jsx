import React from 'react'
import classes from "./Header.module.css"

const Header = () => {

    const {titulo , nombre}= classes

  return (
    <div className={titulo}>
        <img src="https://masmetros.com.co/wp-content/uploads/2022/01/mas-metros-mudanzas-y-minibodegas.svg" 
        alt=""
        width="400" 
        height="100"  />

        <h1 className={nombre}> Pablo Galvis</h1>
    </div>
  )
}

export default Header