import styled from "styled-components";
import Container from "./Home/container";
import InnerCountainer from "./Home/InnerContainer";

const MainComponent = (props) => {


    const Div = styled.div`
    
    backgroundColor:transparent;
    background-size: cover;

    `
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