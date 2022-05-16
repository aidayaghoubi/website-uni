import MainComponent from "./Mainomponent";
import styledComponents from "styled-components";

const FooterStyled = styledComponents.div`
margin-top: 100px;

height: auto;
margin-bottom: 25px;
display: flex;
flex-direction: column;
align-items: flex-start;

& .witeLabel{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top:25px;
    border-top:1px solid #fff; 
    padding-top: 15px;
    color: #a7a7a7;
    font-size: 14px;
}

& .info{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 35px;

    & .conect-us{

        & form{
            position: relative;
        }
        & p{
            color: #a7a7a7;
            font-size: 14px;
            margin-bottom: 10px;
        }
        & input{
            padding: 4px 12px;
            border-radius: 5px;
            border: none;
            background-color: transparent;
            border: 1px solid #a7a7a7;
            color: #fff;
            width: 223px;
            height: 27px;
        
        }
        & button{
            position: absolute;
            right: 4px;
            top: 30px;
            padding: 8px 6px;
            background-color: #FD583E;
            border: none;
            border-radius: 5px;
            transition: 0.5s;
         
            &:hover{
                background-color: #f27f6d;
            }
        }
    }

    & .information{
        width: 60%;
        display: flex;
        justify-content: space-between;

        & div{
            display: flex;
            flex-direction: column;

            & p{
                margin-bottom: 7px;
                color: #a7a7a7;
                font-size: 14px;
                
            }
            & span{
                
                color: #fff;
                margin: 3px 0;
                font-size: 14px;
            }
        }
    }
}

`

const Footer = () => {

    return (
        <MainComponent>
            <FooterStyled>
                <div className="logo">
                    <a href="/home">
                        <svg id="Group_23" data-name="Group 23" xmlns="http://www.w3.org/2000/svg" width="94.518" height="88.463" viewBox="0 0 94.518 88.463">
                            <path id="jordan" d="M53.31,9.612v-.3a5.672,5.672,0,0,1,1.329-3.692A4.2,4.2,0,0,1,58.036,4a5.672,5.672,0,0,1,3.692,1.329A4.786,4.786,0,0,1,63.5,8.874a4.55,4.55,0,0,1-1.329,3.692,4.834,4.834,0,0,1-3.544,1.477l-.886.3.3.443-.3,1.625-.591,4.726a.851.851,0,0,1,.3.591l-.591,2.954a3.436,3.436,0,0,1-.591.886l-.3,1.181q-.591,2.363-1.034,3.84T54.2,32.946v.591q-.3,1.477-.443,2.363a15.256,15.256,0,0,1-1.034,2.954,6.168,6.168,0,0,0,0,3.84l.3.3a4.062,4.062,0,0,0,.738,2.068,4.062,4.062,0,0,1,.738,2.068,31.237,31.237,0,0,1-.886,10.043l.591,1.772q3.544,1.772,2.068,3.84l1.477.591a23.94,23.94,0,0,1,5.021,3.1q1.477,1.329,2.954,2.806a3.745,3.745,0,0,1,1.772.886l.886.3A92.531,92.531,0,0,1,80.779,80.5l1.181.886v.3l-.3.591.886.591h.3a3.045,3.045,0,0,0,1.181.591h.3a.851.851,0,0,0,.591-.3l.591-.3a4.628,4.628,0,0,1,1.181-.886h1.181q.3,0,0,.3l-1.181.591L85.21,84.635h2.068l2.068.3a11.46,11.46,0,0,0,1.477-.591l1.477-.886a1.684,1.684,0,0,1,1.772.591h.3q.3.3-.3.886L90.526,88.18a7.313,7.313,0,0,1-2.658,1.477l-3.84,2.658a.369.369,0,0,1-.591,0l-.886-1.181-.591-1.181-.738-1.034-.886-1.181-.738-.886-.591-.738-1.181-.886a2.621,2.621,0,0,1-1.181-.3L72.8,81.977a3.646,3.646,0,0,1-2.068-.886,57.433,57.433,0,0,0-5.907-4.726l-1.772-1.181-3.544-.591a18.1,18.1,0,0,1-4.726-1.772l-2.363-1.181a9.291,9.291,0,0,0-3.249-1.181l-1.181-.591a9.154,9.154,0,0,1-1.772-.591l-.591-.591a2.622,2.622,0,0,0-1.181.3l-5.907,2.954-7.384,3.249a40.9,40.9,0,0,1-5.612,3.84L22.3,80.5l-5.021,3.544a.738.738,0,0,1-1.181,0l-.591.591a4.834,4.834,0,0,1-1.181.3l-1.181.591v.591h-.591L11.958,87q-.591,1.181-1.181,1.329a1.06,1.06,0,0,0-.738.443,1.718,1.718,0,0,1-.3.443l-.591.591-.886.591-1.329-.148-1.772.3-1.181.3A2.694,2.694,0,0,1,1.62,90.4,5.452,5.452,0,0,1,.144,88.18q-.591-.886.591-1.477l.3-.3a1.2,1.2,0,0,1,.886-.3H3.688l2.363-.886,1.181-.3a1.2,1.2,0,0,1,.3-.886,1.2,1.2,0,0,1,.886-.3v-.3a2.622,2.622,0,0,1-.3-1.181,1.049,1.049,0,0,1-.148-.886q.148-.3.3-.3h.148l.3.886q.3,1.477.886.886l.3-.591a.946.946,0,0,1,.886-.591l.591.591.591-.591-.3-.3a.261.261,0,0,1,.3-.3L13.14,79.91a18.8,18.8,0,0,1,3.544-3.249,33.1,33.1,0,0,1,8.861-5.021,4.516,4.516,0,0,1,3.249-1.477,21.744,21.744,0,0,1,3.544-4.431q2.068-1.477,2.954-2.068.591-1.181,1.477-1.181h.3l.591-.591a3.436,3.436,0,0,0,.886-.591V59.825a7.683,7.683,0,0,1,.3-2.363,1.365,1.365,0,0,1,1.477-.886L41.5,55.394a5.862,5.862,0,0,1-.591-2.658h-.3a3.176,3.176,0,0,1-.591-1.772A12.946,12.946,0,0,1,38.837,48.6h-.886a1.878,1.878,0,0,1-1.477,1.181l-.3.591a20.842,20.842,0,0,1-2.068,3.1,14.864,14.864,0,0,1-3.249,2.511,8.29,8.29,0,0,0-2.068,3.249,2.732,2.732,0,0,0,0,1.772l-.3.591h.3q0,.591.3.591h.3q.591.3.591.738t-.886.3a2.386,2.386,0,0,1-1.329-.591,1.21,1.21,0,0,0-.738-.443l-.886.886q-.591.886-1.181.738t-.3-.443l.3-.3q.3-.591,0-.591l-2.363.591q-.3.3-.738,0T22,62.483l1.477-.591a.261.261,0,0,0-.3-.3,3.333,3.333,0,0,1-2.363.3l-1.477-.3-.3-.3a.261.261,0,0,1,.3-.3,5.39,5.39,0,0,0,2.954-.3l2.068-.886,2.363-2.658.3-.591a35.072,35.072,0,0,1,2.511-4.283,14.492,14.492,0,0,1,2.806-3.1l.3-1.181a19.311,19.311,0,0,1,1.181-2.068q.591-.886,1.477-2.363l.886-1.181a3.284,3.284,0,0,1,2.658-1.772l.886-.886a1.2,1.2,0,0,0,.3-.886l.591-.591-.3-.3q-1.772-1.477-1.772-2.658a3.823,3.823,0,0,1,1.329-3.544,4.257,4.257,0,0,1,3.249-1.329,3.925,3.925,0,0,1,2.511,1.034l.591.591a.261.261,0,0,1,.3.3l1.181.591v.886q.591.591.591.886a14.319,14.319,0,0,1,1.772-2.068l1.477-4.726a5.243,5.243,0,0,1,.591-2.363l.591-.886v-.591l.886-3.544H54.2L55.082,17a3.674,3.674,0,0,0,0-2.068L53.9,11.975Z" transform="translate(0.053 -4)" fill="#fd583e" />
                        </svg>
                    </a>
                </div>
                <div className="info">
                    <div className="information">
                        <div>
                            <p>Product</p>
                            <span>men shoes</span>
                            <span>women shoes</span>
                            <span>kids shoes</span>
                        </div>
                        <div>
                            <p>Company</p>
                            <span>Nike.com</span>
                            <span>Adidas.com</span>
                            <span>Puma.com</span>
                        </div>
                        <div>
                            <p>JORDAN</p>
                            <span>About</span>
                            <span>Join Us</span>
                            <span>Blog</span>
                        </div>
                        <div>
                            <p>Help</p>
                            <span>Talk To Support</span>
                            <span>Support Docs</span>
                            <span>System Map</span>
                        </div>
                    </div>
                    <div className="conect-us">
                        <form>
                            <p>Join To Our Blog</p>
                            <div>
                                <input type="email" placeholder="Enter Your Email" />
                                <button type="submit"> Get Started </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="witeLabel">
                    <p>@2022 Jordan, all rights reserved</p>
                    <p>terms and conditions, privacy policy</p>
                </div>
            </FooterStyled>
        </MainComponent>
    )

}
export default Footer;