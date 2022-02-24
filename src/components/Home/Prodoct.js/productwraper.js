// import classes from './AboutUs.module.scss';
import { useContext } from 'react';
import MainComponent from '../../Mainomponent';
import { Globaldata } from '../../store/availableProduct';
import classes from './productwraper.module.scss';
import FunctionalProvider, { FunctionalContext } from '../../store/product-context';

const ProductWrap = ({ data }) => {

    const productCTX = useContext(FunctionalContext);
   
    const addItemTolist = (eve) => {

        productCTX.addItem({
            id:data.style_code,
            name:data.P_name,
            amount:1,
            description:data.P_description,
            price:data.price,
            img_url:data.img_url,
            totalprice:0
        } )

    }

    const changePassColor = () => {


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

            </div>
        </MainComponent>
    )
}

export default ProductWrap;