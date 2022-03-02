import { Fragment } from 'react';
import reactDom from 'react-dom'
import styledComponents from 'styled-components';

const BackDrop = styledComponents.div`

    background-color: rgba(27, 27, 25,0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 999;
    
    left: 0;

`

const LoginPortal = (props) => {

    return <BackDrop >
       {props.children}
    </BackDrop>
}



const portalElement = document.getElementById('login');

const Login = (props) => {

    return <Fragment>
        {/* {reactDom.createPortal(<Backdrop onclick={props.onClick} /> , portalElement)} */}
        {reactDom.createPortal(<LoginPortal onclick={props.onClick}>{props.children}</LoginPortal>, portalElement)}
    </Fragment>
}



export default Login;