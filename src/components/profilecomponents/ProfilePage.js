import { Fragment, useState , useContext} from "react";
import Login from "./profilePortal";
import UserLogedIn from "../store/user-context";
import { UserIsLoged } from "../store/user-context";
import LoginForm from "./loginForm";



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

            {!userLogCTX.isLogIn.state && <Login> <LoginForm show={useLogedIn}/> </Login>} 


        </Fragment>
    )
}

export default ProfilePage;