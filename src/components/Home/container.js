import styled from "styled-components";

const Container = (props) => {


    const Countainer = styled.div`
    
    max-width: 1200px !important;
    width: 100%;
    margin: auto;
    display: flex;
    align-self: center;

    `
    return (
       <Countainer>
           {props.children}
       </Countainer>
    );
}

export default Container;