import React, { useEffect, useState } from "react";

export const FunctionalContext = React.createContext();

const PRODUCT_STORAGE_KEY = "product";

const generateId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const FunctionalProvider = ({ children }) => {

    const [state, setState] = useState(() => {
        const productInLocalStorage = localStorage.getItem(PRODUCT_STORAGE_KEY)

        return {
            items : productInLocalStorage ? JSON.parse(productInLocalStorage) :  [],
            totalAmount : 0
        }

        // if(productInLocalStorage) {
        //     return productInLocalStorage
        // }else return {
        //     items: [],
        //     totalAmount: 0
        // }

    })

    console.log(state);

    // let hardHeavyCalculation = document;
    // const [first, setFirst] = useState(() => {
    //     return localStorage.getItem("product");
    // })
    const addItem = (item) => {

        // if (state.items.find(product => product.id === item.id)) {
        //    let itemIndex = state.items.findIndex(product => product.id === item.id)
        //    state.items[itemIndex].amount +=1;
        //    state.totalAmount +=1;
        //    state.items[itemIndex].totalprice =(state.items[itemIndex].price * state.items[itemIndex].amount);
        //    let currentItems = JSON.parse(JSON.stringify(state.items));

        //     setState(state => ({...state , items: currentItems ,totalAmount:state.totalAmount}))

        // } else {
        //     let currentItems = JSON.parse(JSON.stringify(state.items));
        //     state.totalAmount +=1;
        //     currentItems = [...currentItems, item];
        //     setState(state => ({ ...state, items: currentItems }));
        // }

        if (state.items.some(el => el?.id === item.id)) {
            setState(prev => ({
                ...prev,
                items: prev.items.map(el => el.id === item.id ? ({ ...el, amount: el.amount + 1 }) : el)
            }))
        } else {
            setState(prev => ({
                ...prev,
                items: [...prev.items, item]
            }))
        }
        addToLocal();
        // localStor;age.setItem('product' , state.items)




    }
    const removeItem = (id) => {

        // if (state.items.find(product => product.id === item.id)) {
        //     let itemIndex = state.items.findIndex(product => product.id === item.id)
        //     state.items[itemIndex].amount -=1;
        //     state.totalAmount -=1;
        //     state.items[itemIndex].totalprice =(state.items[itemIndex].price * state.items[itemIndex].amount);
        //     let currentItems = JSON.parse(JSON.stringify(state.items));
        //     setState(state => ({ ...state, items: currentItems }));
        //     if(state.items[itemIndex].amount === 0){
        //         let newp = state.items.filter(item => item.id !== state.items[itemIndex].id)
        //         let currentItems = JSON.parse(JSON.stringify(newp));
        //         setState(state => ({ ...state, items: currentItems }));
        //     }
        //  }

        setState(prev => ({
            ...prev,
            items: state.items.find(el => el.id === id).amount === 1
                ? state.items.filter(el => el.id !== id)
                : state.items.map(el => el.id === state.items.find(el => el.id === id).id
                    ? ({ ...el, amount: el.amount - 1 })
                    : el),

        }))
        addToLocal()
    }

    const addToLocal = () => {

        const storedDate = state.items.map(el => el);

        // localStorage.setItem('product', JSON.stringify(storedDate));
        // const itemss = localStorage.getItem('product');
        // console.log(JSON.parse(itemss))
    }
    // const storedDate = state.items.map(el => el);

    //   localStorage.setItem('product' , JSON.stringify(storedDate));
    //   const itemss = localStorage.getItem('product');
    //   console.log(JSON.parse(itemss))


    // useEffect(() => {
    //     setState(localStorage.getItem("product"));
    // } , []);

    // useEffect(() => {
    //     if(state.items.length) {
    //         localStorage.setItem(PRODUCT_STORAGE_KEY , JSON.stringify(state.items));
    //     }
    // } , [state]);

    return (
        <FunctionalContext.Provider
            value={{
                items: state.items, totalAmount: state.totalAmount,
                addItem, removeItem
            }}>
            {children}
        </FunctionalContext.Provider>
    )

}

export default FunctionalProvider;