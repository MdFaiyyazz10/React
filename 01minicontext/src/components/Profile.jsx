import React , {useContext} from 'react'
import userContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(userContext)
    const {name} = useContext(userContext)

    if(!user) return <div>Please Login</div>
    if(!name) return <div>Enter Your Email Id</div>

  return (
    <>
  <div> Welcome {user.username}</div>
  <div> User Password {user.password}</div>
  <div> Welcome {name.userId}</div>
  <div> Your Email {name.emailId}</div>
  </>
  )
  
  
}

export default Profile
