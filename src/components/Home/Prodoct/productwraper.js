// import classes from './AboutUs.module.scss';
import { useContext, useEffect, useState } from 'react';
import MainComponent from '../../Mainomponent';
import classes from './productwraper.module.scss';
import { FunctionalContext } from '../../store/product-context';
import { Globaldata } from '../../store/availableProduct';
import { FavoriteContext } from '../../store/favorite-context';

const ProductWrap = ({ data }) => {

    const productCTX = useContext(FunctionalContext);
    const allProductCTX = useContext(Globaldata);


     const favCTX = useContext(FavoriteContext);


    const [isFavClicled, setIsFavClicled] = useState(false)

    const addItemTolist = (eve) => {

        productCTX.addItem({
            id: data.style_code,
            name: data.P_name,
            amount: 1,
            description: data.P_description,
            price: data.price,
            img_url: data.img_url,
            totalprice: data.price
        })

    }

    useEffect(() => {

        if (data.isFav) {
            setIsFavClicled(true);
        }

    }, [allProductCTX.isFav])



    const changePassColor = () => {


    }

    
    const onFavBtnClickHandker = () => {
        if (isFavClicled) {
            setIsFavClicled(false)
            allProductCTX.removFromFavorite({
                item: data
            })

        } else {
            setIsFavClicled(true);
            allProductCTX.addtoFavorite({
                item: data
            })
        }
    }


    return (
        <MainComponent>
            <div className={classes.item_wrapper}>
                <div className={classes.color_wrapper}>
                    {
                        data.color?.map((el, i) =>
                            <div className={classes.colors} style={{ backgroundColor: `${el}` }} key={i}></div>)
                    }
                </div>
                <button className={classes.add_btn} onClick={addItemTolist}>+</button>
                <div className={classes.image_back}>
                    <img className={classes._img} src={data.img_url} />
                </div>
                <p className={classes.lable}>Best Seller</p>
                <p className={classes._name}>{data.P_name}</p>
                <div className={classes.price_container}>
                    <p className={classes._price}>{data.price} <span>$</span></p>
                    <p className={classes._color}>{data.color.length} <span>colors</span></p>
                </div>

                <button className={!isFavClicled ? `${classes.favorite}` : `${classes.isfavorite}`} onClick={onFavBtnClickHandker}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25.345" height="23.793" viewBox="0 0 25.345 23.793">
                        <g id="Group_10674" data-name="Group 10674" transform="translate(-3888.395 -673.492)">
                            <path id="Path_5127" data-name="Path 5127" d="M3901.067,676.544a9.163,9.163,0,0,1,3.33-2.207,7.079,7.079,0,0,1,3.456-.265,6.959,6.959,0,0,1,5.575,7.139,5.775,5.775,0,0,1-1.184,3c-.951,1.637-2.767,2.951-4.98,5.7a65.865,65.865,0,0,1-6.2,6.675l-7.385-8.169a18.209,18.209,0,0,1-4.074-4.436,7.085,7.085,0,0,1-.679-4.255c.325-3.9,4.09-5.346,6.18-5.868a5.514,5.514,0,0,1,3.587.766A10.312,10.312,0,0,1,3901.067,676.544Z"
                                transform="translate(-0.087 0.199)" fill="none" stroke="#707070" strokeWidth="0.3" />
                            <path id="heart_1_" data-name="heart (1)" d="M25.224,5.121a7.241,7.241,0,0,0-10.241,0l-.31.337-.31-.337A7.242,7.242,0,0,0,4.121,15.362l.7.763.611.662,8.615,9.334.621.672.621-.673,8.615-9.334.611-.662.7-.763a7.241,7.241,0,0,0,0-10.24Zm-.493,9.455-.822.889-.612.661-8.625,9.324L6.048,16.125l-.612-.662-.822-.889a6.128,6.128,0,0,1,0-8.667l.293-.293a6.128,6.128,0,0,1,8.667,0l.477.515.621.672.621-.671.477-.515a6.128,6.128,0,0,1,8.667,0l.293.293a6.128,6.128,0,0,1,0,8.667Z"
                                transform="translate(3886.395 670.493)" fill="#fff" />
                        </g>
                    </svg>



                </button>
            </div>
        </MainComponent>
    )
}

export default ProductWrap;