import img from '.././../assets/Group 84.png';
import img_men1 from '.././../assets/boy1.png'
import img_men2 from '.././../assets/boy2.png'
import img_men3 from '../../assets/sail-black-dark-mocha.png';
import img_women1 from '.././../assets/university-blue-black-varsity-red.png';
import img_women2 from '.././../assets/university-red-university-red.png';
import img_women3 from '.././../assets/women1.png';
import img_kid1 from '.././../assets/kid1.png';
import img_kid2 from '.././../assets/kid2.png';
import img_kid3 from '.././../assets/kid3.png';
import React from 'react';


const Dummy_product = [
    {
        style_code: `m1`,
        collection: 'men',
        color:5,
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_men1,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m2`,
        collection: 'men',
        color:2,
        P_name: 'Air Jordan I Converse All Star College',
        price: 217,
        img_url: img_men2,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m3`,
        collection: 'men',
        color:3,
        P_name: 'Air Jordan I Converse All Star College',
        price: 55.9,
        img_url: img_men3,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m4`,
        collection: 'women',
        color:1,
        P_name: 'Air Jordan I Converse All Star College',
        price: 550,
        img_url: img_women1,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m5`,
        collection: 'women',
        color:4,
        P_name: 'Air Jordan I Converse All Star College',
        price: 515,
        img_url: img_women2,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m6`,
        color:2,
        collection: 'women',
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_women3,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m7`,
        color:2,
        collection: 'kid',
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_kid1,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m8`,
        color:2,
        collection: 'kid',
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_kid2,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m9`,
        color:2,
        collection: 'kid',
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_kid3,
        P_description: 'Converse All Star College'
    },
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