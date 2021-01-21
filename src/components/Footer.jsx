import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({text, link}) => {
  return (
    <footer className="footer">
      <Link to={`${link}`}>{text}</Link>
    </footer>
  )
}

export default Footer
