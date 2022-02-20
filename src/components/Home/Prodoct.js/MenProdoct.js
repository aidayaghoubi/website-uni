import ProdoctTitle from "../ProdictTitle";
import MainComponent from "../../Mainomponent";
import styled from "styled-components";

const MenProdoctList = () => {

    const data = {
        name: 'KID'
    }

    const Wrapper = styled.div`
    
    width:100%;
    margin-top:80px;
    `

    return <Wrapper>
        <MainComponent>
        <ProdoctTitle data={data} />
            
        </MainComponent>
    </Wrapper>

}

export default MenProdoctList;