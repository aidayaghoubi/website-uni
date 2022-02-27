// import React, { useState } from "react";

// export const FavoriteContext = React.createContext();

// const generateId = function(){
//     return Date.now().toString(36) + Math.random().toString(36).substr(2);
// }


// const FavoriteContextProvider = ({ children }) => {

//     const [state, setState] = useState(
//         {
//             items: [],
            
//         }
//     )

    
//     const addtoFavorite = (item) => {
//         // if(state.items.some(el => el?.id === item.id)) {
//         //     setState(prev => ({
//         //         ...prev ,
//         //         items : prev.items.map(el => el.id === item.id ? ({ ...el , amount : el.amount + 1 }) : el)
//         //     }))
//         // }else {
//         //    setState(prev => ({
//         //        ...prev ,
//         //        items : [...prev.items , item]
//         //    })) 
//         // }
//         console.log(item)

//         setState(prev => ({
//             items:[...prev.items , item]
//         }))
      

//     }
//     const removFromFavorite = (item) => {
      
//         // setState(prev => ({
//         //     ...prev ,
//         //     items : state.items.find(el => el.id === id).amount === 1 
//         //         ? state.items.filter(el => el.id !== id) 
//         //         : state.items.map(el => el.id === state.items.find(el => el.id === id).id 
//         //             ? ({ ...el , amount : el.amount - 1 }) 
//         //             : el) ,

//         // }))
//         setState(prev => ({
//             ...prev ,
//             items : state.items.filter(el => el.id !== item.id)
//         }))
//         console.log(item)
//     }

// console.log(state.items)
    

//     return (
//         <FavoriteContext.Provider 
//         value={{ items: state.items ,addtoFavorite , removFromFavorite }}>
//             {children}
//         </FavoriteContext.Provider>
//     )

// }

// export default FavoriteContextProvider;