import styled from "styled-components";
import Container from "./Home/container";
import InnerCountainer from "./Home/InnerContainer";

const MainNav = (props) => {


    const Div = styled.div`
    position: fixed;
    width: 100%;
    background-color: #1c1c25;
    background-size: cover;
    
    z-index:999

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

export default MainNav;