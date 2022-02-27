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
    const product = productCtx.items.map(item => item);
    // const totalPrice = productCtx.items.totalPrice.reduce((acc, curr) => {
    //     acc = acc + curr
    // })
    // let totalprice = 0;

    // product.map(item => {
    //     totalprice = totalprice + item.totalprice
    // });

    const totalPrice = product.reduce((acc , curr) =>  acc + curr.totalprice * curr.amount , 0);
    const totalAmount = product.reduce((acc , curr) =>  acc + curr.amount , 0);
    console.log(totalPrice , totalAmount)

    const prop = { 
        name:'ida',
        addres:{
            blv:'',
            
        }
    }

    return (
        <MainComponent >
            <Wrapeer>
                {product.map(item => {
                    return <ProductInCart {...item} age='18' lastname='alde' ff={prop} />
                    // value={item} key={item.id}
                    
                })}
            </Wrapeer>
        </MainComponent>
    )

}

export default CartProduct;