import React, { useState, useEffect } from "react";


export const LoginData = React.createContext();


const LOGED_IN_USERS = 'users';

const LoginPriveder = (props) => {

    const [logedInUser, setlogedInUser] = useState(() => {
        const productInLocalStorage = localStorage.getItem(LOGED_IN_USERS);
        
        return {
            items: productInLocalStorage ? JSON.parse(productInLocalStorage) : [],

        }
    })

    const addToLocal = (item) => {
        
        setlogedInUser( prev => ({
          
             items:[...prev.items , item]
          }));
          console.log(logedInUser)
        }

    useEffect(() => {

        localStorage.setItem(LOGED_IN_USERS, JSON.stringify(logedInUser.items))

    }, [logedInUser])


    return (
        <LoginData.Provider value={{ addToLocal, logedInUser }}>
            {props.children}
        </LoginData.Provider>
    )
}

export default LoginPriveder;