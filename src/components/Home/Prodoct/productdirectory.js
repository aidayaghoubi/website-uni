import ProductWrap from "./productwraper";
import classes from './productList.module.scss'

const ProductDirectory = ({ data }) => {
    return (
        <div className={classes.product_container}>
            {data.map(item => {
                return <ProductWrap data={item} key={item.style_code}/>
            })}
        </div>
    )
}

export default ProductDirectory;