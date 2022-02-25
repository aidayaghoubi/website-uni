import React, { useState } from "react";

export const FunctionalContext = React.createContext();



const FunctionalProvider = ({ children }) => {

    const [state, setState] = useState(
        {
            items: [],
            totalAmount: 0
        }
    )
    const addItem = (item) => {

        if (state.items.find(product => product.id === item.id)) {
           let itemIndex = state.items.findIndex(product => product.id === item.id)
           state.items[itemIndex].amount +=1;
           state.totalAmount +=1;
           state.items[itemIndex].totalprice =(state.items[itemIndex].price * state.items[itemIndex].amount);
        //  let currentItems = JSON.parse(JSON.stringify(state.items));
            setState(state => ({...state , totalAmount:state.totalAmount}))
                

        } else {
            let currentItems = JSON.parse(JSON.stringify(state.items));
            state.totalAmount +=1;
            currentItems = [...currentItems, item];
            setState(state => ({ ...state, items: currentItems }));
        
        }

    }

    

    const removeItem = (item) => {

        if (state.items.find(product => product.id === item.id)) {
            let itemIndex = state.items.findIndex(product => product.id === item.id)
            state.items[itemIndex].amount -=1;
            state.totalAmount -=1;
            let currentItems = JSON.parse(JSON.stringify(state.items));
            setState(state => ({ ...state, items: currentItems }));
            if(state.items[itemIndex].amount === 0){
                let newp = state.items.filter(item => item.id !== state.items[itemIndex].id)
                let currentItems = JSON.parse(JSON.stringify(newp));
                setState(state => ({ ...state, items: currentItems }));
            }
         }
    }
    const addtoFavorite = (item) => {
      
    }

    

    return (
        <FunctionalContext.Provider value={{ items: state.items, totalAmount: state.totalAmount, addItem, removeItem ,addtoFavorite }}>
            {children}
        </FunctionalContext.Provider>
    )

}

export default FunctionalProvider;