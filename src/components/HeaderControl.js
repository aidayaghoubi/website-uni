import { Fragment, useContext, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './HeaderControl.module.scss';
import { FunctionalContext } from "./store/product-context";
import { Globaldata } from "./store/availableProduct";
import { useEffect } from "react";
import SearchCart from "./searchModule/searchCart";

const HeaderControl = ({ serachHanlder }) => {

    const productCTX = useContext(FunctionalContext);
    const availbalePCTX = useContext(Globaldata);

    useEffect(() => {
        setSearchIsClicked(false);
        setSearchModalShow(false);
        searchInputRef.current.value = '';
        console.log('de', serachHanlder)

    }, [serachHanlder])

    const searchInputRef = useRef('');

    const [btnBouncing, setBtnBouncing] = useState(false);

    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [searchModalShow, setSearchModalShow] = useState(false);
    const [searchedrezult, setSearchedrezult] = useState(null)

    const inputOncanegHandler = () => {

        // const enteredName = ;
        const searchedDate = availbalePCTX.filter((item) => item.P_name.toLowerCase().includes(searchInputRef.current.value.toLowerCase()))
        setSearchedrezult(searchedDate)
        setSearchModalShow(true)


    }

    const searhClickHandler = () => {
        setSearchIsClicked(true)
    }

    const closeInputHandler = () => {
        setSearchIsClicked(false);
        setSearchModalShow(false);
        searchInputRef.current.value = '';
    }

    // const onBlurInputHandler = () => {
    //     setSearchIsClicked(false)
    // }

    // const dataShouldShow = (item) => {

    // }

    let amount = 0;

    useEffect(() => {

        setBtnBouncing(true)
        const timer = setTimeout(() => {
            setBtnBouncing(false)
        }, 500)

        return () => {
            clearTimeout(timer);
        }
    }, [productCTX.items])


    useLayoutEffect(() => {
        if (searchModalShow) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [searchModalShow]);

    if (productCTX.items.length > 0) {
        amount = productCTX.items.reduce((acc, cur) => acc + cur.amount, 0)
    }

    const btnclass = `${classes.buybasket}  ${btnBouncing ? classes.boucing : ''}`;

    return (
        <Fragment>
            <div className={classes['header-control']}>
                <ul className={classes.nav}>
                    {!searchIsClicked ? <li style={{ cursor: 'pointer' }}> <a to='/home' onClick={searhClickHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                            <g id="Group_81" data-name="Group 81" transform="translate(-1625 -1410)">
                                <g id="find" transform="translate(1630.752 1415.726)">
                                    <path id="Path_6" data-name="Path 6" d="M-11.5-201.3a10.315,10.315,0,0,1-10.3-10.3,10.315,10.315,0,0,1,10.3-10.3A10.281,10.281,0,0,1-1.2-211.6a10.349,10.349,0,0,1-10.3,10.3Zm0-19.072a8.838,8.838,0,0,0-8.823,8.823,8.838,8.838,0,0,0,8.823,8.823,8.838,8.838,0,0,0,8.823-8.823,8.907,8.907,0,0,0-8.823-8.823Z" transform="translate(21.8 221.9)" fill="#fff" />
                                    <path id="Path_7" data-name="Path 7" d="M17.285-181.606,10.1-188.738l1.162-1.162,7.132,7.185-1.109,1.109" transform="translate(6.753 206.806)" fill="#fff" />
                                </g>
                                <rect id="Rectangle_29" data-name="Rectangle 29" width="37" height="37" transform="translate(1625 1410)" fill="none" />
                            </g>
                        </svg>
                    </a>
                    </li> : ''}

                    {/* {searchIsClicked ? <li className={classes.inputCntrol}>
                            <input autoFocus ref={searchInputRef} onChange={inputOncanegHandler}></input>
                        <button onClick={closeInputHandler}>x</button> */}
                    {<div className={searchIsClicked ? `${classes.show}` : `${classes.hide}`}>
                        <li className={classes.inputCntrol}>
                            <input autoFocus ref={searchInputRef} onChange={inputOncanegHandler}></input>
                            <button onClick={closeInputHandler}>x</button>

                        </li>
                    </div>}



                    {<li onClick={closeInputHandler}>
                        <NavLink to='/favorite'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                <g id="Group_83" data-name="Group 83" transform="translate(-1628 -1453)">
                                    <g id="Group_78" data-name="Group 78" transform="translate(1633.966 1460.54)">
                                        <path id="favorite" d="M-157.366-196.979l-.419-.367c-9.544-7.761-12.114-10.488-12.114-14.946a6.614,6.614,0,0,1,6.608-6.608,7.574,7.574,0,0,1,5.926,3.042,7.574,7.574,0,0,1,5.926-3.042,6.614,6.614,0,0,1,6.608,6.608c0,4.458-2.57,7.185-12.114,14.946l-.42.367Zm-5.926-20.557a5.26,5.26,0,0,0-5.244,5.244c0,3.828,2.412,6.345,11.17,13.53,8.758-7.185,11.17-9.7,11.17-13.53a5.26,5.26,0,0,0-5.244-5.244c-2.622,0-4.038,1.573-5.139,2.832l-.787.892-.787-.892c-1.1-1.259-2.517-2.832-5.139-2.832Z" transform="translate(169.9 218.9)" fill="#fff" />
                                    </g>
                                    <g id="Group_82" data-name="Group 82" transform="translate(3 43)">
                                        <rect id="Rectangle_29" data-name="Rectangle 29" width="37" height="37" transform="translate(1625 1410)" fill="none" />
                                    </g>
                                </g>
                            </svg>

                        </NavLink>
                    </li>}
                    <li className={btnclass} onClick={closeInputHandler} >
                        <NavLink to='/cart' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                <g id="Group_81" data-name="Group 81" transform="translate(-1625 -1410)">
                                    <rect id="Rectangle_29" data-name="Rectangle 29" width="37" height="37" transform="translate(1625 1410)" fill="none" />
                                    <g id="cart" transform="translate(1631.473 1417.141)">
                                        <path id="Path_1" data-name="Path 1" d="M-46.893-449.749H-62.466a.59.59,0,0,1-.565-.308.632.632,0,0,1-.051-.668l1.336-3.392-1.336-12.644H-67.4V-468.2h4.934a.721.721,0,0,1,.72.617l1.439,13.414a1,1,0,0,1-.051.36l-1.028,2.57h14.494v1.491" transform="translate(67.4 468.2)" fill="#fff" />
                                        <path id="Path_2" data-name="Path 2" d="M-59.512-450.573l-.308-1.388,16.4-3.392v-5.808H-60.385V-462.6h17.68a.7.7,0,0,1,.72.72v7.093a.669.669,0,0,1-.565.668l-16.961,3.546m14.7,7.812a2.852,2.852,0,0,1-2.827-2.827,2.852,2.852,0,0,1,2.827-2.827,2.852,2.852,0,0,1,2.827,2.827,2.852,2.852,0,0,1-2.827,2.827Zm0-4.266a1.437,1.437,0,0,0-1.439,1.439,1.405,1.405,0,0,0,1.439,1.439,1.405,1.405,0,0,0,1.439-1.439,1.437,1.437,0,0,0-1.439-1.439Zm-16.961,4.266a2.852,2.852,0,0,1-2.827-2.827,2.852,2.852,0,0,1,2.827-2.827,2.852,2.852,0,0,1,2.827,2.827,2.852,2.852,0,0,1-2.827,2.827Zm0-4.266a1.437,1.437,0,0,0-1.439,1.439,1.405,1.405,0,0,0,1.439,1.439,1.405,1.405,0,0,0,1.439-1.439,1.437,1.437,0,0,0-1.439-1.439Z" transform="translate(66.039 465.478)" fill="#fff" />
                                    </g>
                                </g>
                            </svg>
                            <span>{amount}</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink to='/profile' className={classes.profileBtn} onClick={closeInputHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.797" height="26.945" viewBox="0 0 26.797 26.945">
                        <g id="Group_77" data-name="Group 77" transform="translate(-1709.864 -77.808)">
                            <g id="Group_4" data-name="Group 4" transform="translate(1702.286 69.265)">
                                <path id="account" d="M20.438,16.423a8.079,8.079,0,1,0-9.991,0A13.465,13.465,0,0,0,2.072,27.437a1.355,1.355,0,1,0,2.693.3,10.772,10.772,0,0,1,21.409,0,1.346,1.346,0,0,0,1.346,1.2h.148a1.346,1.346,0,0,0,1.185-1.481,13.465,13.465,0,0,0-8.415-11.028Zm-5-.956a5.386,5.386,0,1,1,5.386-5.386A5.386,5.386,0,0,1,15.443,15.467Z" transform="translate(5.514 6.548)" fill="#fff" />
                            </g>
                        </g>
                    </svg>
                </NavLink>
            </div>
            {searchModalShow && <SearchCart serachedItem={searchedrezult} />}
        </Fragment>
    )
}

export default HeaderControl;