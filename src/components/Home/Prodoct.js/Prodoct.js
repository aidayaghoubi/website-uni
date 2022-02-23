import ProdoctTitle from "../ProdictTitle";
import MainComponent from "../../Mainomponent";
import styled from "styled-components";
import { useContext } from "react";
import { Globaldata } from "../../store/availableProduct";
import ProductWrap from "./productwraper";
import ProductList from "./productList";

const ProdoctList = ({category}) => {

    const dataCTX = useContext(Globaldata)

    const P_list = dataCTX.filter(item => item.collection == category)

    const data = {
        name:category
    }

    const Wrapper = styled.div`
    
    width:100%;
    margin-top:80px;
    `

    return <Wrapper>
        <MainComponent>
            <ProdoctTitle data={data} />
            <ProductList data={P_list} />
            
        </MainComponent>
    </Wrapper>

}

export default ProdoctList;