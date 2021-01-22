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
    <main className="container signin-signup">
      <div className="hero-img" loading="lazy"></div>
      <div className="content-wrapper">
        <h1>log in to <br />your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register({ required: true })} required className="inputField" placeholder="your username" type="text" name="username"/>
          <input ref={register({ required: true })} required className="inputField" placeholder="your password" type="password" name="password" minLength="6" />
          <Button text="sign in"/>
        </form>
      </div>
      <Footer link="/signup" text="Create Account"/>
    </main>
    </>  
  )
}

export default SignIn
