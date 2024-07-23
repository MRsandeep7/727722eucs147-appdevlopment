import React, { useEffect, useState } from 'react'
import '../Asserts/css/Login.css'

const Login = () => {
  useEffect(() => {
    console.log(user);
  }, [])
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [auth, setauth] = useState(true);
  const handlec = () => {
    setauth(!auth);
  }
  const validate = () =>{
    if(user.name===""||user.email===""||user.password==="")
    {
      alert("fill all the feilds");
    }

  }
  if (auth) {

    return (
      <div className='bg'>

        <div className='Log'>
          <h1>Signup</h1>
          <label>
            Name
          </label>
          <input type='text' onChange={(e) => { setUser({ ...user, name: e.target.value }) }}></input>
          <label>
            Email
          </label>
          <input type='email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
          <label>
            Password
          </label>
          <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>
          <button onClick={validate}>Signup</button>
          existing user?<a onClick={handlec}>Login</a>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='bg'>

        <div className='Log'>
          <h1>Login</h1>

          <label>
            Email:
          </label>
          <input type='email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
          <label>
            Password:
          </label>
          <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></input>
          <button >Login</button>
          new user?<a onClick={handlec}>Signup</a>
        </div>
      </div>
    )

  }
}

export default Login