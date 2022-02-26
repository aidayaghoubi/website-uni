import { Fragment } from 'react';
import reactDom from 'react-dom'
import classes from './modal.module.scss';

// const Backdrop = () => {

//     return <div className={classes.backdrop} onClick={onclick}> </div>
// }

const ModalOverlay = (props) => {

    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}



const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return <Fragment>
        {/* {reactDom.createPortal(<Backdrop onclick={props.onClick} /> , portalElement)} */}
        {reactDom.createPortal(<ModalOverlay onclick={props.onClick}>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}



export default Modal;