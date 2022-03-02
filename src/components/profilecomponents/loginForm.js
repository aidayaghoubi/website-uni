import styledComponents from "styled-components";


const FormWrapper = styledComponents.div`

width: 437px;
height: 540px;
background-color: #a29e9e;
margin: 113px auto;
border-radius: 22px;

`

const LoginForm = () => {

    return (
        <FormWrapper>
            <form>
                <p></p>
                <label>enter your Email or Phone Number</label>
                <input type='text' />
                <label>enter your Password</label>
                <input type='text' />
            </form>
        </FormWrapper>
    )

}
export default LoginForm;