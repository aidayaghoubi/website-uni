import ProdoctTitle from "../ProdictTitle";
import MainComponent from "../../Mainomponent";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Globaldata } from "../../store/availableProduct";
import ProductWrap from "./productwraper";
import ProductDirectory from "./productdirectory";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
        width:100%;
        margin-top:80px;

        & .more_btn{
            position: relative;
            margin-left: 48%;
            font-size: 18px;
            color: #979797;
            text-decoration: none;
            border-bottom: 1px solid;
            border-color: #fff;
            transition: 0.5s;
/* 
            &::after{
                content:'';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 2px;
                background-color: #979797;
            } */

            &:hover {
                transform: translate(47px);
                color: #fff
            }
        }
    `

const ProdoctList = ({ category }) => {

    const dataCTX = useContext(Globaldata);
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const P_list = dataCTX.items.filter(item => item.collection === category).slice(0, 3)

    const data = {
        name: category
    }


    return <Wrapper>
        <MainComponent>
            <ProdoctTitle data={data} />
            <ProductDirectory data={P_list} />
            <Link to={`/${category}`} className="more_btn">MORE +</Link>
        </MainComponent>
    </Wrapper>

}

export default ProdoctList;