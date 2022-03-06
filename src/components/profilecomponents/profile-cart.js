
import styledComponents from "styled-components"


const Item_wrapper_in_cart = styledComponents.div`

margin-top: 110px;
background-color: #fff;
height: 152px;
display: flex;
border-radius: 10px;
align-items: center;
justify-content: center;


`

const ProfileCart = () => {

    console.log('hi')

    return (<Item_wrapper_in_cart>
        <p style={{color:'#000'}}>
            helow welcome to your app
        </p>
    </Item_wrapper_in_cart>)
}

export default ProfileCart
