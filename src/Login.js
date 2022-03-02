import React, { useState } from 'react';
import Signup from './Signup';
import { Routes, Route, NavLink } from "react-router-dom"
import { createUserWithEmailAndPassword,
         onAuthStateChanged, 
         signInWithEmailAndPassword, 
         signOut } 
         from 'firebase/auth';
import { auth } from './firebase-config';

export default function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //state of currently logged in user
  const [user, setUser] = useState({});

  //calls function when firebase detects change currently logged
  //think of it as a useEffect
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });

    //const equal to asynchronous anonomous function that uses try
    //catch method to a constant equal to a promise that creates email
    //and password using the values from the login email and login 
    //password field values
    const login = async () => {
        try {
            //returns promise function that creates user and auto logsin
            const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
        setLoginEmail('')
        setLoginPassword('')
    }

    const logout = async () => {
        //call function called signout
        await signOut(auth);
        setLoginEmail('')
        setLoginPassword('')
    }
  return(
  <>
    <div className='form-wrapper'>
      <div className='form-container'>
      <h3 className='form-header-text'>Log in to your account</h3>
      <div className='signup-form'>
        <p className='form-p-text'>No Account?
          <NavLink to="/signup" className="form-link">Signup!
          </NavLink>
        </p>
    </div>
        <input 
        className='form-input-field'
        placeholder='Email'
        value={loginEmail}
        onChange={(event) => {
        setLoginEmail(event.target.value)
        }}
        />
        <br />
        <input 
        className='form-input-field'
        placeholder='Password'
        value={loginPassword}
        onChange={(event) => {
        setLoginPassword(event.target.value)
        }}
        />
        <br />
        <button className="enter-button" onClick={login}>Login</button>
       <h4>User Logged In:</h4>
      <p>Welcome, {user?.email} is logged in.</p>
      <button onClick={logout}> Sign Out </button>
    <br />
      </div>
    </div>
  </>
  )
}