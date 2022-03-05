import styledComponents from 'styled-components'
import img from '../.././../assets/Group 10625.png'
import { useEffect , useState , useContext } from 'react'
import { FunctionalContext } from '../product-context'

const Div = styledComponents.div`

margin-top: 90px;
background-color: #cac8c8;
position: fixed;
width: 290px;
right: 13%;
border-radius: 25px;
height: calc(100vh - 15%);

    & img{
        margin-top: 39px; 
    }
    & .__item-waper{
        display: flex;
    flex-direction: column;
    justify-content:space-between;
    height:100%;
    align-items: center;

    & .information-wrapper{
        height:60%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        & .__wraper{
            display: flex;
            flex-direction: column;
            align-items: center;

            & .main{
                font-size: 41px;
                font-weight: bolder;
                margin: 12px 0;
                color:#000;
            }
        }
        & .__product_amount {
            font-size:22px;
            font-weight: 800;
            color: #414747;

         
        }
        & .__product_price{
            font-size:22px;
            font-weight: 800;
            color: #414747;
        }
    }

    & .btn_wrapper{
        width: 100%;
        display: flex;
        justify-content: center;

        & button{
            border:none;
            width: 80%;
            border: none;
            cursor: pointer;
            height: 45px;
            margin: 24px 0px;
            background-color: #fd583e;
            color: #fff;
            border-radius: 8px;
            font-size: 18px;

                &:disabled{

                    background-color: #cd9a92;
                    color: #d9b8b3; 
                    cursor: auto;
                }
        }

    }
    .boucing{
        animation: bumoi 500ms ease-out;
      }
      @keyframes bumoi{
        0% {
            color: #000;
        }
        
        50% {
             color: #fd583e;
         }
        100% {
            color: #000;
        }
       
      }
}

   

`

const CartOrder = ({ totalPrice, totalAmount }) => {

    const [btnBouncing ,setBtnBouncing] = useState(false)
    const productCtx = useContext(FunctionalContext)
    
    useEffect(()=>{
        setBtnBouncing(true)
        const timer = setTimeout(() => {
            setBtnBouncing(false)
        }, 500)

        return () => {
            clearTimeout(timer);
        }

    } , [productCtx.items])
    const bouncclass = `main  ${btnBouncing ? 'boucing' : ''}`;

    return (
        <Div>
            <div className='__item-waper'>
                <img src={img} />
                <div className='information-wrapper'>
                    <div className='__wraper'>
                        <p className='__product_amount'>TOTAL AMOUNT </p>
                        <p className={bouncclass}>{totalAmount}</p>
                    </div>
                    <div className='__wraper'>
                        <p className='__product_price'>PRICE </p>
                        <p className={bouncclass}>{totalPrice}$</p>
                    </div>
                </div>
                <div className='btn_wrapper'>
                    <button disabled={totalAmount == 0 ? true : false}>ORDER</button>
                </div>
            </div>

        </Div>
    )


}

export default CartOrder;