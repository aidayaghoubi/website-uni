import { useContext } from "react";
import { FunctionalContext } from "../product-context";
import MainComponent from "../../Mainomponent";
import ProductInCart from "./CrtProduct";
import styledComponents from "styled-components";

const Wrapeer = styledComponents.div`

    display:  flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction:column;
    margin-top: 115px;
    margin-bottom: 25px;
    
`


const CartProduct = () => {

    const productCtx = useContext(FunctionalContext)
    const product = productCtx.items.map(item => item)

    return (
        <MainComponent>
            <Wrapeer>
                {product.map(item => {
                    return <ProductInCart value={item} key={item.id}/>
                })}
            </Wrapeer>
        </MainComponent>
    )

}

export default CartProduct;