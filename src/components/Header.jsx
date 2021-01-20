import React from 'react'

// images
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <header className="container header">
      <img className="logo" src={logo} alt="logo" loading="lazy"/>
    </header>
  )
}

export default Header
