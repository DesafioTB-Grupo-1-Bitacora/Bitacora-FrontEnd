import { useLocation } from "wouter";
import Form from "../../components/Form";
import { useLogin, useAuth } from "../../hooks";

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
            <h1>Register</h1>
            <Form onSubmit={register} fields={registerFields} button="Sign up" />
        </>
    )
}

export default Register;