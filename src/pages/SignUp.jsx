import React from 'react'

// Components
import { Header, Button, Footer } from "../components"


const SignIn = () => {
  return (
    <>
    <Header/>
    <main className="container signin-signup">
      <div className="hero-img"></div>
      <div className="content-wrapper">
        <h1>create<br />account</h1>
        <form>
          <input className="inputField" placeholder="your username" type="text" name="username"/>
          <input className="inputField" placeholder="your email" type="email" name="email"/>
          <input className="inputField" placeholder="your password" type="password" name="password" minLength="6"/>
          <input className="inputField" placeholder="confirm password" type="password" name="password" minLength="6"/>
          <Button text="Create Account"/>
        </form>
      </div>
      <Footer link="/" text="Sign In"/>
    </main>
    </>  
  )
}

export default SignIn
