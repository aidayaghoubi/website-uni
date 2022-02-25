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
            id: data.style_code,
            name: data.P_name,
            amount: 1,
            description: data.P_description,
            price: data.price,
            img_url: data.img_url,
            totalprice: data.price
        })

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
                <button className={classes.favorite}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.668" height="25.352" viewBox="0 0 28.668 25.352">
                        <path id="Path_47" dataName="Path 47" d="M3687.977,1159.855a8.752,8.752,0,0,1,6.2-4.262c2.063-.267,8.811,1.062,7.546,8.693-.624,4.774-8.281,10.591-13.751,15.467a62.927,62.927,0,0,1-10.2-9.183c-2.474-2.924-3.741-6.2-3.514-8.156.566-4.882,4.276-6.554,7.728-6.554S3687.977,1159.855,3687.977,1159.855Z" 
                        transform="translate(-3673.724 -1155.038)" fill="none" stroke="#FD583E" strokeWidth="1" />
                    </svg>

                </button>
            </div>
        </MainComponent>
    )
}

export default ProductWrap;