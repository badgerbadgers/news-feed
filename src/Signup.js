import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import { createUserWithEmailAndPassword,
         onAuthStateChanged, 
         signInWithEmailAndPassword, 
         signOut } 
         from 'firebase/auth';
import { auth } from './firebase-config';

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  //state of currently logged in user
  const [user, setUser] = useState({});

  //calls function when firebase detects change currently logged
  //think of it as a useEffect
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });

    const register = async () => {
        try {
            //returns promise function that creates user and auto logsin
            const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
            );
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
        setRegisterEmail('')
        setRegisterPassword('')
    };

  return(
  <>
    <div className='form-wrapper'>
    <div className='form-container'>
    <h3 className='form-header-text'>Create your account</h3>
    <p className='form-p-text'>Have An Account?
          <NavLink to="/login" className="form-link">Login
          </NavLink>
        </p>
    <input placeholder='Email'
      className='form-input-field'
      value={registerEmail} 
      onChange={(event) => {
      setRegisterEmail(event.target.value)
      }} 
    />
    <br />
    <input placeholder='Password' 
      className='form-input-field'
      value={registerPassword}
      onChange={(event) => {
      setRegisterPassword(event.target.value)
      }}
    />
    <br />
   <button className="enter-button"onClick={register}>Create User</button>
   </div>
   </div>
  </>
  )
}