import React from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios";

const Login = ({ setSubmit, submit, setUsername }) => {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => { 
    console.log("Login data", data)
    axios.post("http://localhost:8000/api/auth/login", data)
    .then(res => {
        console.log("Axios response", res.data);
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        setSubmit(!submit);
        setUsername(res.data.username);
    })
    .catch(err => console.log("Axios error", err));
    reset();
  }

  return (
    <div className = "login">
      <h2>Login</h2>
    <form onSubmit={handleSubmit(onSubmit)} className = "loginform">
      <input name="username" ref={register} placeholder = "Username" />
      <br/>
      <input name="password" ref={register({ required: true })} placeholder = "Password" type = "password" />
      <br/>
      <button type = "submit">Login</button>
    </form>
    </div>
  )
}

export default Login;