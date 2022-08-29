import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../Context";


const Protected= ({children})=> {
    const user=useContext(Context);

    if(!user){
        console.log(user);
        return <Navigate to='/'/>
    }
    else{
        // console.log('user');
    }
  return children
}

export default Protected