import ProdoctTitle from "../ProdictTitle";
import MainComponent from "../../Mainomponent";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Globaldata } from "../../store/availableProduct";
import ProductWrap from "./productwraper";
import ProductDirectory from "./productdirectory";

const Wrapper = styled.div`
        width:100%;
        margin-top:80px;
    `

const ProdoctList = ({category}) => {

    const dataCTX = useContext(Globaldata);





    const P_list = dataCTX.filter(item => item.collection === category)

    const data = {
        name:category
    }


    return <Wrapper>
        <MainComponent>
            <ProdoctTitle data={data} />
            <ProductDirectory data={P_list} />
        </MainComponent>    
    </Wrapper>

}

export default ProdoctList;