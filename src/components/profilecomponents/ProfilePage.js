import { Fragment, useState } from "react";
import Login from "./profilePortal";
import LoginForm from "./loginForm";



const ProfilePage = () => {

    const [userConfirm, setUserConfirm] = useState(false)



    return (
        <Fragment>

            {!userConfirm && <Login> <LoginForm /> </Login>} 


        </Fragment>
    )
}

export default ProfilePage;