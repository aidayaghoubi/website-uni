import { Fragment } from 'react';
import reactDom from 'react-dom'
import classes from './modal.module.scss';
import Container from '../Home/container';

// const Backdrop = () => {

//     return <div className={classes.backdrop} onClick={onclick}> </div>
// }

const ModalOverlay = (props) => {

    return <Container>
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    </Container>
}



const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return <Fragment>
        {/* {reactDom.createPortal(<Backdrop onclick={props.onClick} /> , portalElement)} */}
        {reactDom.createPortal(<ModalOverlay onclick={props.onClick}>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}



export default Modal;