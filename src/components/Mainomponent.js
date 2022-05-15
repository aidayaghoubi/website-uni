import styled from "styled-components";
import Container from "./Home/container";
import InnerCountainer from "./Home/InnerContainer";


const Div = styled.div`
    
background-color:transparent;
background-size: cover;
overflow: hidden;


`
const MainComponent = (props) => {

    console.log(props.bg)

    return (
        <Div>
            <Container>
                <InnerCountainer>
                    {props.children}
                </InnerCountainer>
            </Container>
        </Div>
    );
}

export default MainComponent;