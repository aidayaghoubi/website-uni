import React, { useState, useEffect } from "react";


export const UserIsLoged = React.createContext();

const UserLogedIn = (props) => {

    const [isLogIn , setisLogIn ] = useState({
        logindata:'',
        state:false
    });

    const logIn = () =>{
        setisLogIn(prev => ({
            ...prev ,
            state:true
        }))
    }
    const logout = () =>{
        setisLogIn(prev => ({
            ...prev ,
            state:false
        }))
    }
    
    const setLogState = (item) => {
        setisLogIn(prev => ({
            ...prev ,
            logindata:item
        }))
    }

    return (
        <UserIsLoged.Provider value={{isLogIn , logIn , logout , setLogState}}>
            {props.children}
        </UserIsLoged.Provider>
    )
}

export default UserLogedIn;