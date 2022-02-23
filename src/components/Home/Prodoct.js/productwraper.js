// import classes from './AboutUs.module.scss';
import MainComponent from '../../Mainomponent';
import classes from './productwraper.module.scss'

const ProductWrap = ({ data }) => {

    const colorAmount = data.color;

    console.log(colorAmount)
    const whatIsIt = (eve) => {

    }

    return (
        <MainComponent>
            <div className={classes.item_wrapper}>
                <div className={classes.color_wrapper}>
                    {new Array(colorAmount).fill('1').map((item, i) => { return (<div className={classes.colors}>p</div>) })}
                </div>
                <button className={classes.add_btn} onClick={whatIsIt}>+</button>
                <div className={classes.image_back}>
                    <img className={classes._img} src={data.img_url}></img>
                </div>
                <p className={classes.lable}>Best Seller</p>
                <p className={classes._name}>{data.P_name}</p>
                <div className={classes.price_container}>
                    <p className={classes._price}>{data.price} <span>$</span></p>
                    <p className={classes._color}>{data.color} <span>colors</span></p>
                </div>

            </div>
        </MainComponent>
    )
}

export default ProductWrap;