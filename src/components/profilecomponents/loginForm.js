import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";


const FormWrapper = styledComponents.div`

    width: 377px;
    height: 485px;
    background-color: #a29e9e;
    margin: 113px auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;

        & form{
            width: 100%;
                height: 92%;
             margin: 15px 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
        
            & .Main_header{
                font-size: 24px;
                margin-top: 12px;
                font-weight: bold;
            }
            & .sub_header{
                font-size:14px;
                display: flex;
                justify-content: flex-start;;
                margin-top: 14px;
                
                & p{
                    margin-right: 4px;
                }
                & a{
                    text-decoration:none; 
                }

                

            }

            & .input_wrapper{

                
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 92%;
                position: relative ; 

                    & label{
                    position: absolute;
                    left: 15px;
                    transition: all 0.5s ;
                    color: #fff;
                    font-size: 14px;
                    }

                   
                 & input{
                        height: 50px;
                        width: 100%;
                        border-radius: 3px;
                        border: none;
                        border: 1px solid #fff;
                        background-color: transparent;
                        color: #000;
                        padding-left: 15px;
                        padding-top: 5px;

                        &:focus{

                                
                          
                        }
                       
                    }
                
            }
        }

        & .terms_of_policy{
            
            width: 90%;
            margin-top: -15px;
            direction: rtl;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            & label{
                font-size: 14px;
            }
            & input{
                margin-right: 7px;
                color:red;
                border: none;
                border-radius: 15px;
            }
        
        }

        & .button_wrapper{
            display: 'flex';
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            width: 92%;
            & button{
                width: 100%;
                height: 50px;
                border-radius: 5px;
                border:none;
                background-color:#FD583E;
                color: #fff; 
            }
        
        }

        .focused{
            position: absolute;
            left: 15px !important;
            transition: all 0.5s !important;
            color: #000 !important;
            font-size: 12px !important;
            top: -8px;
            }
      
`

const LoginForm = () => {

    const [inputFocused ,setInputFocused ] = useState(false)

    const inputOnFocusHandler = () => {
        setInputFocused(true);
        console.log('in focus')
    }
    const inputOnBlurHandler = () => {
        setInputFocused(false);
        console.log('in focus')
    }
    const labelFocusClass = inputFocused ? "focused" : '';
    return (
        <FormWrapper>
            <form>
                <div style={{ disple: 'flex' , width:'91%'}}>
                    <p className="Main_header">Sign up with your email</p>
                    <div className="sub_header">
                        <p>Already have an account? </p>
                        <Link to='/home'>Sign in</Link>
                    </div>
                </div>
                <div className="input_wrapper">
                    <label className={labelFocusClass}>Email</label>
                    <input type='text' onFocus={inputOnFocusHandler} onBlur={inputOnBlurHandler}/>
                </div>
                <div className="input_wrapper">
                    <label className={labelFocusClass}>Password</label>
                    <input type='text' onFocus={inputOnFocusHandler} onBlur={inputOnBlurHandler}/>
                </div>
                <div className="input_wrapper">
                    <label className={labelFocusClass}>Confirm your Password</label>
                    <input type='text' onFocus={inputOnFocusHandler} onBlur={inputOnBlurHandler}/>
                </div>
                <div className="terms_of_policy">
                    <label>I agree to the Terms of Service and Privacy Policy</label>
                    <input type='checkbox' />
                </div>
                <div className="button_wrapper">

                    <button>SUBMIT</button>
                </div>
            </form>
        </FormWrapper>
    )

}
export default LoginForm;