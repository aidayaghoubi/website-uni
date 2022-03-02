import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../store/favorite-context";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styledComponents.div`

    background-color: #3c403f;
    border-radius: 15px;
    width: 55%;
    margin: 15px auto;
    margin-top:75px;
    height:220px;
    display: flex;
    justify-content: center;
    animation: moveFromDownh3 700ms ease-in-out;
    align-items: center;
    
    & .item__wraper{

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

         & .emty_part_title{
            font-size: 27px;
            font-weight: bold;
            color: #cac8c8;
            margin: 11px 0;
         }

         & .empty_part_subTile{
            font-size: 16px;
            margin: 14px 0;
            color: #a59e9e;
         }

         & .links_wraper{
            display: flex;
            justify-content: space-between;
            align-items: center;
             
            & a{
                text-decoration: none;
                color: #fd583e;
                font-size: 16px;
                border-bottom: 1px solid transparent;
             padding-bottom: 5px;
             position: relative;

             &::after{
                 content: '';
                 content: '';
                    width: 0;
                    height: 2px;
                    position: absolute;
                    background-color: #9898ba;
                    /* left: 41px; */
                    left: 0;
                    top: 26px;
                    transition: all 0.4s
                
                }

                &:hover::after{
                    // border-bottom: 1px solid;
                    //  padding-bottom: 5px;
                     width: 100%;
                }
            }
            }
         }
    }
    @keyframes moveFromDownh3 {

        0%{
            transform: translate(0,150% );
            
        
        100%{
            transform: translate(0 ,0 );
            
        }
        
    }
`


const SearchEmpty = () => {


    return (
        <Wrapper>
            <div className="item__wraper">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120.447" height="121.095" viewBox="0 0 120.447 121.095">
                        <g id="Group_10738" data-name="Group 10738" transform="translate(-223.584 -221.769)">
                            <path id="Path_1687" data-name="Path 1687" d="M340.126,301.148A33.549,33.549,0,1,0,373.677,334.7,33.55,33.55,0,0,0,340.126,301.148Zm-15.892,45.947a2.267,2.267,0,0,1-1.778-3.679l23.436-29.478a2.267,2.267,0,0,1,3.551,2.82l-23.433,29.48A2.258,2.258,0,0,1,324.234,347.095Zm35.037-20.508-23.437,29.48a2.268,2.268,0,1,1-3.551-2.821l23.437-29.48a2.268,2.268,0,0,1,3.551,2.822Z" transform="translate(-68.179 -65.211)" fill="none" />
                            <path id="Path_1688" data-name="Path 1688" d="M816.715,806.319l-.506-.508-12.245,12.244.3.3,3.247,3.242c2.08,2.085,6.508,1.031,9.892-2.347s4.433-7.813,2.353-9.892l-3.034-3.034Z" transform="translate(-476.791 -479.8)" fill="#616e7d" />
                            <path id="Path_1689" data-name="Path 1689" d="M799.421,789.313l-12.245,12.236,3,2.953,12.245-12.244-.35-.35-.01.005Z" transform="translate(-463 -466.246)" fill="#fd583e" />
                            <path id="Path_1690" data-name="Path 1690" d="M271.294,221.769a47.715,47.715,0,1,0,26.4,87.452L324.176,335.3l12.245-12.236-26.3-25.908a47.663,47.663,0,0,0-38.822-75.389Zm.653,81.267A33.549,33.549,0,1,1,305.5,269.486,33.55,33.55,0,0,1,271.947,303.036Z" transform="translate(0)" fill="#616e7d" />
                            <path id="Path_1691" data-name="Path 1691" d="M416.73,368.876l-23.436,29.478a2.269,2.269,0,0,0,3.554,2.822l23.433-29.48a2.267,2.267,0,0,0-3.551-2.82Z" transform="translate(-139.018 -120.149)" fill="#fd583e" />
                            <path id="Path_1692" data-name="Path 1692" d="M471.783,423.924,448.346,453.4a2.268,2.268,0,0,0,3.551,2.821l23.437-29.48a2.268,2.268,0,1,0-3.551-2.821Z" transform="translate(-184.241 -165.37)" fill="#fd583e" />
                        </g>
                    </svg>

                </div>
                <div>
                    <p className="emty_part_title">No Results Found!</p>
                   
                </div>

            </div>
        </Wrapper>
    )

}
export default SearchEmpty;