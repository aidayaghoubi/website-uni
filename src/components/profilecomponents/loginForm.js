import styledComponents from "styled-components";
import { Link, Prompt } from "react-router-dom";
import { useRef, useState } from "react";
import { useContext } from "react";
import { LoginData } from "../store/login-context";

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
                    left: 0px;
                    top: 19px;
                    transition: 0.3s;
                    background-color: #a29e9e;
                    color: #fff;
                    padding: 0 5px !important;
                    font-size: 14px;
                    }
                    
                    & .active{
                        & + label {
                            left: 4px !important;
                            background-color: #a29e9e !important;
                             padding: 0 5px !important;
                            top: -8px !important;
                        }
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

                    
                        &:focus {
                            & + label {
                
                                background-color: #a29e9e;
                                // padding: 0 11px;
                                top: -8px;
                            }
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
            color: #fff !important;
        
            font-size: 14px !important;
            background-color: #a29e9e;
            padding: 0 11px;
            top: -8px;
        
            }
      
`

const INPUT_LIST = [
    {
        label: 'Email',
        key: 'email'
    },
    {
        label: 'pass',
        key: 'pass'
    }, {
        label: 'passConfirm',
        key: 'passConfirm'
    },
]

const LoginForm = ({ show }) => {


    const loginCTX = useContext(LoginData);
    
     const emailRef = useRef();
     const passwordRef = useRef();
     const confirmPasswordRef = useRef();
     const [inputFocused, setInputFocused] = useState(false);

    const [inputValues, setInputValues] = useState({});
    const [termsIsChecked, setTermsIsChecked] = useState(true);

   
    const inputOnChangeHandler = ({ target: { value } }, key) => {
        setInputValues(prev => ({
            ...prev,
            [key]: value
        }))

    }
    const formSubmitHandler = (e) => {

        e.preventDefault();
        const checkbox = document.getElementById('termsCheck');
        if (!checkbox.checked) {
            setTermsIsChecked(false);
            alert('You should acceept terms of policy')
            console.log('fe')
        }else{
 
            show(inputValues);
            loginCTX.addToLocal(inputValues)
           
        }

    }
    // const labelFocusClass = inputFocused ? "focused" : '';
    return (
        <FormWrapper>
            <form onSubmit={formSubmitHandler}>
                <div style={{ disple: 'flex', width: '91%' }}>
                    <p className="Main_header">Sign up with your email</p>
                    <div className="sub_header">
                        <p>Already have an account? </p>
                        <Link to='/home'>Sign in</Link>
                    </div>
                </div>
                {

                    INPUT_LIST.map((el, i) => (
                        <div className="input_wrapper" key={i}>
                            <input className={inputValues[el.key] && 'active'} type='text' onChange={e => inputOnChangeHandler(e, el.key)} />
                            <label>{el.label}</label>
                        </div>
                    ))
                }

                <div className="terms_of_policy">
                    <label>I agree to the Terms of Service and Privacy Policy</label>
                    <input type='checkbox' id="termsCheck" />
                </div>
                {!termsIsChecked && <Prompt message={'you should accept the Terms of Service and Privacy Policy '}></Prompt>}
                <div className="button_wrapper">

                    <button>SUBMIT</button>
                </div>
            </form>
        </FormWrapper>
    )

}
export default LoginForm;