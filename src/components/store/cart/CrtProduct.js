import { useContext, useEffect , useState } from "react";
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
    align-items: center;
    width: 66%;
    -webkit-box-pack: justify;
    -webkit-justify-content: left;
    -ms-flex-pack: justify;
    justify-content: space-around;
    margin: 15px 0;
    height:240px;
    
  
            & img{
                padding: 25px 0;
                height: 143px;
            }
            & .item-wrapper{

                display: flex;
                flex-direction: column;
                align-items: left;
                justify-content: center;
                width: 45%;
               
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
                // flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin: 9px 0;
                margin-top: 23px;
            

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



            .boucing span{
                animation: bumoi 500ms ease-out;
              }
              @keyframes bumoi{
                0% {
                    color: #fff;
                }
                40% {
                    color: #fd583e;
                }
                80% {
                    color: #fff;
                }
                100% {
                    color: #fd583e;
                }
               
              }
              

`


const ProductInCart = (item) => {


    const productCtx = useContext(FunctionalContext)

    const onAddHandler = () => {
        productCtx.addItem(item);
    }
    const onreduceHandler = () => {
        productCtx.removeItem(item.id);
    }

 
    return (
        <Wrapper>
            <img src={item.img_url} />

            <div className="item-wrapper">
                <p className="ttile">{item.name}</p>
                <p className="description">{item.description}</p>
                <div className="flex">
                    <div className="btn-control">
                        <button onClick={onreduceHandler}>-</button>
                        <p className="amount">{item.amount}</p>
                        <button onClick={onAddHandler}>+</button>
                    </div>
                    <p className='price'>Total Price : <span>$ {Math.round(item.totalprice) * item.amount}</span></p>
                </div>
            </div>



        </Wrapper>
    )

}
export default ProductInCart;