import { useLocation } from "wouter";
import Form from "../../components/Form";
import { useLogin, useAuth } from "../../hooks";

const Login = () => {
    const { data } = useLogin();
    const { login } = useAuth();
    const [ , setLocation] = useLocation();

    data?.success && setLocation("/");

    const loginFields = [
        {   name: "email",
            placeholder: "email@domain.com..." },
        {   name: "password",
            placeholder: "********",
            type: "password" }        
    ]

    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={login} fields={loginFields} button="Sign in" />
        </>
    )
}

export default Login;