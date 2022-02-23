import ProdoctTitle from "../ProdictTitle";
import MainComponent from "../../Mainomponent";
import styled from "styled-components";
import { useContext } from "react";
import { Globaldata } from "../../store/availableProduct";
import ProductWrap from "./productwraper";
import ProductList from "./productList";

const MenProdoctList = () => {

    const dataCTX = useContext(Globaldata)

    const MenList = dataCTX.filter(item => item.collection == 'men')

    const data = {
        name: 'Men'
    }

    const Wrapper = styled.div`
    
    width:100%;
    margin-top:80px;
    `

    return <Wrapper>
        <MainComponent>
            <ProdoctTitle data={data} />
            <ProductList data={MenList} />
        </MainComponent>
    </Wrapper>

}

export default MenProdoctList;