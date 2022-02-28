import MainComponent from "./Mainomponent";
import { Globaldata } from "./store/availableProduct";
import Database from "./store/availableProduct";
import { useContext, useState } from "react";
import ProductWrap from "./Home/Prodoct/productwraper";
import ProdoctList from "./Home/Prodoct/Prodoct";
import ProductDirectory from "./Home/Prodoct/productdirectory";
import ProdoctTitle from "./Home/ProdictTitle";


const ProductPage = (props) => {

    // const [favProduct, setfavProduct] = useState(null);
    const products = useContext(Globaldata);

    // if (props.colection === 'favorite') {

    //     const relatedProductfav = products.filter(el => {
    //         return el.collection === props.colection
    //     })
    //     setfavProduct(relatedProductfav)
    // } else {
    //     const relatedProduct = products.filter(el => {
    //         return el.collection === props.colection
    //     })
    //     setfavProduct(relatedProduct)
    // }
    const relatedProduct = products.filter(el => {
               return el.collection === props.colection
             })
    

    const data = props.colection;

    return (
        <Database>
            <MainComponent>
                <ProdoctTitle data={data} />
                <ProductDirectory data={relatedProduct} />
            </MainComponent>
        </Database>
    )
}

export default ProductPage;