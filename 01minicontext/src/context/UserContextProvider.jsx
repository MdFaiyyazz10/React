import React, { useState } from "react";
import userContext from "./UserContext";


const UserContextProvider = ({children})=>{
    const [user , setUser] = useState(null)
    const [name , setName] = useState(null)
    return (
        <userContext.Provider value={{user , setUser , name , setName}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;