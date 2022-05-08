import styled from "styled-components";


const Wrapper = styled.div`
display: block;
 -webkit-box-sizing: border-box;
 box-sizing: border-box;
 width: 100%;
max-width: 1200px;

 `

const InnerCountainer = (props) => {


 
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default InnerCountainer;