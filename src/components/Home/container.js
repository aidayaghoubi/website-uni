import styled from "styled-components";

const Inner = styled.div`
    
max-width: 1200px !important;
width: 100%;
margin: auto;
display: flex;
align-self: center;

`
const Container = (props) => {



    return (
        <Inner>
            {props.children}
        </Inner>
    );
}

export default Container;