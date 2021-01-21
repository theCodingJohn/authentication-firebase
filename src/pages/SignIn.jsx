import React from 'react'

// Components
import { Header, Button, Footer } from "../components"


const SignIn = () => {
  return (
    <>
    <Header/>
    <main className="container signin">
      <div className="hero-img"></div>
      <div className="content-wrapper">
        <h1>log in to <br />your account</h1>
        <form>
          <input className="inputField" placeholder="your username" type="text" name="username"/>
          <input className="inputField" placeholder="your password" type="password" name="password" minLength="6"/>
          <Button text="sign in"/>
        </form>
      </div>
      <Footer link="/signup" text="Create Account"/>
    </main>
    </>  
  )
}

export default SignIn
