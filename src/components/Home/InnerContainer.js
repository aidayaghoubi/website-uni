import styled from "styled-components";

const InnerCountainer = (props) => {


    const InnerCountainer = styled.div`
   display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;

    `
    return (
        <InnerCountainer>
            {props.children}
        </InnerCountainer>
    );
}

export default InnerCountainer;