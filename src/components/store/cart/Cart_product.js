import { useContext, useState } from "react";
import { FunctionalContext } from "../product-context";
import MainComponent from "../../Mainomponent";
import ProductInCart from "./CrtProduct";
import styledComponents from "styled-components";
import CartOrder from "./CartOrder";
import CartEmpty from "./CartEmpty";

const Wrapeer = styledComponents.div`

    display:  flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction:column;
     margin-top: 73px;
    margin-bottom: 25px;
    
`


const CartProduct = () => {

    const productCtx = useContext(FunctionalContext)
    const product = productCtx.items.map(item => item);
   
    const totalPrice = product.reduce((acc, curr) => acc + curr.totalprice * curr.amount, 0);
    const totalAmount = product.reduce((acc, curr) => acc + curr.amount, 0);
  
    
    const prop = {
        name: 'ida',
        addres: {
            blv: '',

        }
    }

    return (
        <MainComponent >
            
            {!(totalAmount == 0) &&  < CartOrder totalPrice={totalPrice} totalAmount={totalAmount} />}
           
           {(totalAmount == 0) && <CartEmpty /> }
            
            <Wrapeer>
                {/* <CartEmpty />  */}
                {product.map(item => {
                    return <ProductInCart {...item} />
                    // value={item} key={item.id}

                })}
            </Wrapeer>
        </MainComponent>
    )

}

export default CartProduct;