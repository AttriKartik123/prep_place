import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const name="harleen"
const [user,setUser]=useState(null)
    return(
    <>
    <UserContext.Provider value={{user,setUser,name}}>
 {children}
    </UserContext.Provider> 
    </>
)
}
export default UserContextProvider