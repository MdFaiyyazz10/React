import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext';

const Signup = () => {
    const [userId , setUserId] = useState();
    const [emailId , SetEmailId] = useState();

    const {setName} = useContext(userContext)

    const submitHandler = (e) => {
        e.preventDefault();
        setName({userId , emailId})
    }

  return (
    <div>
      <input type="text" placeholder='username' value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input type="text" placeholder='email' value={emailId} onChange={(e) => SetEmailId(e.target.value) } />
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Signup
