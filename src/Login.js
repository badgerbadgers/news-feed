import React from 'react';

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('submit')
  }
  return(
    <>
      <form>
        <h3>Please Login</h3>
        <label for='email'>Email:</label><br />
        <input type='text' placeholder='email'></input><br />
        <label for='password'>Password:</label><br />
        <input type='text' placeholder='password'></input><br />
        <button type='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Login;