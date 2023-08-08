import { styled } from "styled-components";

const Form = styled.form`
    height: 50%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Input = styled.input`
    width: 50%;
    height: 30px;
    border-radius: 3%;
`

const Button = styled.button`
    border-radius: 3%;
`

export default {
    Form,
    Input,
    Button
}