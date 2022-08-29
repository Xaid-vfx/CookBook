import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebase";

export const Context = createContext()

const ContextProviderfunc=({children})=>{
    const use={
        "mail":'history'
    }

    const [user,setuser]=useState({});
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            // console.log(currentUser);
            setuser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}

export default ContextProviderfunc
