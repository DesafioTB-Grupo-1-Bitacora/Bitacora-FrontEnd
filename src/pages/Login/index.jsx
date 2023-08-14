import { useLocation } from "wouter";
import Form from "../../components/Form";
import { useLogin, useAuth } from "../../hooks";
import styled from 'styled-components';

const TitleView = styled.h1`
 font-size: 40px;
`;
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
            <TitleView>Login</TitleView>
            <Form onSubmit={login} fields={loginFields} button="Sign in" />
        </>
    )
}

export default Login;