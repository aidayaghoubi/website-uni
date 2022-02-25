import { useContext } from "react";
import { FunctionalContext } from "../product-context";
import styledComponents from "styled-components";
import styled from "styled-components";

const Wrapper = styledComponents.div`

    display: -webkit-box;
    background-color: #3c403f;
    border-radius: 15px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: left;
    -ms-flex-pack: justify;
    justify-content: space-around;
    margin: 15px 0;
    height:320px;
    margin-top: 42px;
  
            & img{
                padding: 25px 0;
                width: 477px;
            }
            & .item-wrapper{

                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: center;
               
            }
            & .ttile{
                font-size: 26px;
                font-weight: 900;
                color:#fff;
            }
            & .description{
                margin: 15px 0;
                font-size: 20px;
                color:#bdbdbd;
            }
            & .flex{

                display:flex;
                justify-content: space-between;
                align-items: center;
                margin: 9px 0;

                & .price{
                    font-size: 21px;
                    font-weight: 800;
                    color: #fd583e;
                }
                & .btn-control{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;

                    & .amount{
                        padding: 3px 11px;
                        /* background-color: #1c1c25; */
                        margin: 0 6px;
                        border-radius: 7px;
                        color: #fff;
                    }
                    & button{
                        transition: all 0.3s ease-in-out;
                        background-color: #FD583E;
                        color: #fff;
                        font-weight: bold;
                        font-size: 18px;
                        border: none;
                        border-radius: 5px;
                        width: 28px;
                        border-radius: 5px;
                     
                        height: 27px;
                        cursor: pointer;
                    }
                }
            }
`


const ProductInCart = ({ value }) => {

    const productCtx = useContext(FunctionalContext)
    const product = productCtx.items.map(item => item)
    console.log(value)

    const onAddHandler = () => {
        productCtx.addItem(value);
        console.log('treu')
    }
    const onreduceHandler = () => {
        productCtx.removeItem(value);
        console.log('treu')
    }
    return (
        <Wrapper>
            <img src={value.img_url} />

            <div className="item-wrapper">
                <p className="ttile">{value.name}</p>
                <p className="description">{value.description}</p>
                <div className="flex">
                    <div className="btn-control">
                        <button onClick={onreduceHandler}>-</button>
                        <p className="amount">{value.amount}</p>
                        <button onClick={onAddHandler}>+</button>
                    </div>
                    <p className="price">Total Price : $ {value.totalprice}</p>
                </div>
            </div>



        </Wrapper>
    )

}
export default ProductInCart;