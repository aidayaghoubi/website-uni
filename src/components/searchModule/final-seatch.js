import styledComponents from "styled-components";

const SearchStyled = styledComponents.div`

width: 100%;
display: flex;
align-items: center;
justifyContent: center;
border-radius: 15px;
height: auto;


& .__searchBox{
    margin: auto;
    margin-top: 37px;
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    position:relative;
    align-items: center;
    justify-content: center;

    & input{
        height: 58px;
        width: 85%;
        border-radius: 12px;
        background-color: #1c1c25;
        border: none;
        padding: 0 25px;
        color: #fff;
        font-size: 18px;
        box-shadow: 1px 2px 9px #00000085;
    }
    & button{
        position: absolute;
        right: 50px;
        display: flex;
        align-items: center;
        background-color: transparent;
        justify-content: center
        height: 58px;
        width: 55px;
        margin: 0 21px;
        border-radius: 12px;
        border: sienna;
        padding: 16px;
        margin: 0 17px;
        cursor: pointer;
    }
    @keyframes moveFromDownh3 {

        0%{
           opacity: 0;
        }
            
        
        100%{
           opacity: 1;
            
        }
}
`


const SearchCard = ({word , setClose}) => {


    const InputHandler = ({target}) => {
        word(target.value)
    }

    const onCloseBtnHandler =() => {
        setClose(false)
    }

    return (
        <>
            <SearchStyled>
                <div className="__searchBox">
                    <input type="text" placeholder="search here..." onChange={(e)=>InputHandler(e)}></input>
                    <button onClick={onCloseBtnHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="23.73" viewBox="0 0 23.733 23.73">
                            <path id="close" d="M17.951,15.86l9.338-9.323a1.488,1.488,0,0,0-2.1-2.1L15.861,13.77,6.537,4.432a1.488,1.488,0,0,0-2.1,2.1l9.338,9.323L4.433,25.183a1.488,1.488,0,1,0,2.1,2.1l9.323-9.338,9.323,9.338a1.488,1.488,0,1,0,2.1-2.1Z" transform="translate(-3.994 -3.996)" fill="#747171" />
                        </svg>
                    </button>
                </div>
            </SearchStyled>
        </>
    )
}


export default SearchCard