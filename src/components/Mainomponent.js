import styled from "styled-components";
import Container from "./Home/container";
import InnerCountainer from "./Home/InnerContainer";


const Div = styled.div`
    
backgroundColor:transparent;
background-size: cover;
overflow: hidden;


`
const MainComponent = (props) => {

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