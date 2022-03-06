import { Fragment, useState, useContext } from "react";
import Login from "./profilePortal";
import UserLogedIn from "../store/user-context";
import { UserIsLoged } from "../store/user-context";
import LoginForm from "./loginForm";
import ProfileCart from "./profile-cart";
import MainComponent from "../Mainomponent";



const ProfilePage = () => {

    const [userConfirm, setUserConfirm] = useState();
    const userLogCTX = useContext(UserIsLoged)

    const useLogedIn = (props) => {
        setUserConfirm(true)
        userLogCTX.logIn();
        userLogCTX.setLogState(props)
    }

    return (
        <Fragment>
            <MainComponent>

                {userLogCTX.isLogIn.state && <ProfileCart />}

            </MainComponent>

            {!userLogCTX.isLogIn.state && <Login> <LoginForm show={useLogedIn} /> </Login>}

        </Fragment>
    )
}

export default ProfilePage;