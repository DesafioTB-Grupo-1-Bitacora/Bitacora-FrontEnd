import { useLocation } from "wouter";
import Form from "../../components/Form";
import { useLogin, useAuth } from "../../hooks";
import styled from 'styled-components';

const TitleView = styled.h1`
 font-size: 40px;
`;
const Register = () => {
    const { data } = useLogin();
    const { register } = useAuth();
    const [ , setLocation] = useLocation();

    data?.success && setLocation("/");

    const registerFields = [
        {   name: "username",
            placeholder: "Your username..." },
        {   name: "email",
            placeholder: "email@domain.com..." },
        {   name: "password",
            placeholder: "********",
            type: "password" }        
    ]

    return (
        <>
            <TitleView>Register</TitleView>

            <Form onSubmit={register} fields={registerFields} button="Sign up" />
        </>
    )
}

export default Register;