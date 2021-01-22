import React from 'react'
import { useForm } from "react-hook-form";

// Components
import { Header, Button, Footer } from "../components"


const SignIn = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <>
    <Header/>
    <main onSubmit={handleSubmit(onSubmit)} className="container signin-signup">
      <div className="hero-img"></div>
      <div className="content-wrapper">
        <h1>create<br />account</h1>
        <form>
          <input className="inputField" ref={register({ required: true })} required placeholder="your username" type="text" name="username"/>
          <input className="inputField" ref={register({ required: true })} required placeholder="your email" type="email" name="email"/>
          <input className="inputField" ref={register({ required: true })} required placeholder="your password" type="password" name="password" minLength="6"/>
          <input className="inputField" ref={register({ required: true })} required placeholder="confirm password" type="password" name="password" minLength="6"/>
          <Button text="Create Account"/>
        </form>
      </div>
      <Footer link="/" text="Sign In"/>
    </main>
    </>  
  )
}

export default SignIn
