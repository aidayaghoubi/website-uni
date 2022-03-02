import img from '.././../assets/Group 84.png';
import img_men1 from '.././../assets/boy1.png'
import img_men2 from '.././../assets/boy2.png'
import img_men3 from '../../assets/sail-black-dark-mocha.png';
import img_men4 from '../../assets/man10.png';
import img_men5 from '../../assets/man11.png';
import img_men6 from '../../assets/man12.png';
import img_men7 from '../../assets/man13.png';
import img_men8 from '../../assets/man14.png';
import img_men9 from '../../assets/man15.png';
import img_men10 from '../../assets/man16.png';
import img_women1 from '.././../assets/university-blue-black-varsity-red.png';
import img_women2 from '.././../assets/university-red-university-red.png';
import img_women3 from '.././../assets/women1.png';
import img_women4 from '.././../assets/Group 79.png';
import img_women5 from '.././../assets/Group 78.png';
import img_women6 from '.././../assets/woman12.png';
import img_women7 from '.././../assets/woman13.png';
import img_women8 from '.././../assets/woman14.png';
import img_women9 from '.././../assets/woman15.png';
import img_women10 from '.././../assets/woman16.png';
import img_women11 from '.././../assets/woman17.png';
import img_women12 from '.././../assets/man10.png';
import img_kid1 from '.././../assets/kid1.png';
import img_kid2 from '.././../assets/kid2.png';
import img_kid3 from '.././../assets/kid3.png';
import img_kid4 from '.././../assets/kid10.png';
import img_kid5 from '.././../assets/kid11.png';
import img_kid6 from '.././../assets/kid12.png';
import img_kid7 from '.././../assets/kid13.png';
import img_kid8 from '.././../assets/kid14.png';
import React, { useState } from 'react';


const Dummy_product = [
    {
        style_code: `m1`,
        collection: 'men',
        color: ['red', 'blue', 'purple'],
        P_name: 'Midnight Navy / Metallic Gold — Sail',
        price: 119,
        img_url: img_men1,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m2`,
        collection: 'men',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Black / Metallic Silver',
        price: 217,
        img_url: img_men2,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {

        style_code: `m3`,
        collection: 'men',
        color: ['crismon', 'black', 'pink'],
        P_name: 'Black / Black — Gum Light Brown',
        price: 55.9,
        img_url: img_men3,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m4`,
        collection: 'men',
        color: ['red', 'blue', 'purple'],
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_men4,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m5`,
        collection: 'men',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Black / Varsity Blue — White',
        price: 217,
        img_url: img_men5,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m6`,
        collection: 'men',
        color: ['crismon', 'black', 'pink'],
        P_name: 'Black / Metallic Silver',
        price: 55.9,
        img_url: img_men6,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m30`,
        collection: 'men',
        color: ['red', 'blue', 'purple'],
        P_name: 'Midnight Navy / Metallic Gold — Sail',
        price: 119,
        img_url: img_men7,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `28`,
        collection: 'men',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Black / Black — Gum Light Brown',
        price: 217,
        img_url: img_men8,

        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `29`,
        collection: 'men',
        color: ['crismon', 'black', 'pink'],
        P_name: 'Light Crimson / Midnight Navy ',
        price: 55.9,
        img_url: img_men9,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `30`,
        collection: 'men',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Navy / Obsidian — White — Metallic Red Bronze',
        price: 217,
        img_url: img_men10,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m7`,
        color: ['gray', 'red', 'yellow'],
        collection: 'women',
        P_name: 'Black / Black — White',
        price: 119,
        img_url: img_women11,
        P_description: 'Converse All Star College'
    },
    {
        style_code: `m26`,
        collection: 'women',
        color: ['blue', 'pink', 'yellow'],
        P_name: 'Turbo Green / Sail — White',
        price: 550,
        img_url: img_women1,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m27`,
        collection: 'women',
        color: ['blue', 'pink', 'yellow'],
        P_name: 'Sail / Black — Phantom — Gym Red',
        price: 550,
        img_url: img_women12,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m8`,
        collection: 'women',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Black / Crimson Tint — White',
        price: 515,
        img_url: img_women2,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m9`,
        color: ['gray', 'red', 'yellow'],
        collection: 'women',
        P_name: 'Light Bone / Black — Hyper Pink',
        price: 119,
        img_url: img_women3,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m10`,
        collection: 'women',
        color: ['blue', 'pink', 'yellow'],
        P_name: 'Black / Dark Mocha — University Red',
        price: 550,
        img_url: img_women4,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m11`,
        collection: 'women',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Muslin / Varsity Red — Royal',
        price: 515,
        img_url: img_women5,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m12`,
        color: ['gray', 'red', 'yellow'],
        collection: 'women',
        P_name: 'Pale Vanilla / Cinnamon — Psychic Blue',
        price: 119,
        img_url: img_women6,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m22`,
        collection: 'women',
        color: ['blue', 'pink', 'yellow'],
        P_name: 'Black / Gym Red — White',
        price: 550,
        img_url: img_women7,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m23`,
        collection: 'women',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Mint Foam / White — Metallic Gold',
        price: 515,
        img_url: img_women8,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m24`,
        color: ['gray', 'red', 'yellow'],
        collection: 'women',
        P_name: 'Light Aqua / White — Metallic Gold',
        price: 119,
        img_url: img_women9,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m25`,
        collection: 'women',
        color: ['grean', 'orange', 'yellow'],
        P_name: 'Barely Grape / White — Metallic Gold',
        price: 515,
        img_url: img_women10,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m13`,
        color: ['grean', 'orange', 'brown'],
        collection: 'kid',
        P_name: 'Medium Grey / Cool Grey — Court Purple',
        price: 119,
        img_url: img_kid1,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m14`,
        color: ['red', 'blue', 'purple', 'gray'],
        collection: 'kid',
        P_name: 'new category',
        price: 119,
        img_url: img_kid2,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m15`,
        color: ['red', 'white', 'green', 'purple'],
        collection: 'kid',
        P_name: 'Silt Red / White — Metallic Gold',
        price: 119,
        img_url: img_kid4,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m16`,
        color: ['blue'],
        collection: 'kid',
        P_name: 'Black / Black — Metallic Rose',
        price: 119,
        img_url: img_kid5,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m17`,
        color: ['blue'],
        collection: 'kid',
        P_name: 'Medium Grey / Cool Grey — Court Purple',
        price: 119,
        img_url: img_kid6,
        P_description: 'Converse All Star College'
        , isFav: false
    }, {
        style_code: `m18`,
        color: ['red', 'blue', 'purple', 'gray', 'yellow'],
        collection: 'kid',
        P_name: 'Gym Red / White — Black ',
        price: 119,
        img_url: img_kid3,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m19`,
        color: ['red'],
        collection: 'kid',
        P_name: 'Medium Grey / Cool Grey — Court Purple',
        price: 119,
        img_url: img_kid6,
        P_description: 'Converse All Star College'
        , isFav: false
    },
    {
        style_code: `m20`,
        color: ['red', 'blue'],
        collection: 'kid',
        P_name: 'Air Jordan I Converse All Star College',
        price: 119,
        img_url: img_kid7,
        P_description: 'Converse All Star College'
        , isFav: false
    }, {
        style_code: `m21`,
        color: ['red', 'purple', 'gray'],
        collection: 'kid',
        P_name: 'Gym Red / White — Black ',
        price: 119,
        img_url: img_kid8,
        P_description: 'Converse All Star College'
        , isFav: false
    },

];



export const Globaldata = React.createContext(Dummy_product);

const Database = ({ children }) => {

    const [state, setState] = useState({ item: Dummy_product })



    const addtoFavorite = (item) => {

     

        setState({
            //  items:[...prev.item , item]
            item: state.item.map(el => el.id === item.id ? {...el , isFav : true } : el)
        })
        console.log('true')

    }
    const removFromFavorite = (item) => {

        setState(({
            item: state.item.map(el => el.id === item.id ? {...el , isFav : false } : el)
        }))
     
        console.log('false')
    }



    return (
        <Globaldata.Provider value={{ items: state.item, removFromFavorite, addtoFavorite }}>
            {children}
        </Globaldata.Provider>

    )

}


export default Database;