import img from '.././../assets/Group 84.png';
import React from 'react';


const Dummy_product = [
    {
        style_code: `m1`,
        collection: 'men',
        P_name: 'Air Jordan I Converse All Star College',
        price: 5,
        img_url: img,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m2`,
        collection: 'men',
        P_name: 'Air Jordan I Converse All Star College',
        price: 5,
        img_url: img,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m3`,
        collection: 'women',
        P_name: 'Air Jordan I Converse All Star College',
        price: 5,
        img_url: img,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m4`,
        collection: 'women',
        P_name: 'Air Jordan I Converse All Star College',
        price: 5,
        img_url: img,
        P_description: 'Converse All Star College'
    }
];


export const Globaldata = React.createContext(Dummy_product);

const Database = ({ children }) => {

    return(
    <Globaldata.Provider value={Dummy_product}>
        {children}
    </Globaldata.Provider>

    )

}


export default Database;