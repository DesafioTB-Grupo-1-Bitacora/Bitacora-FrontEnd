import { Form } from "../../components";
import { useLocation } from "wouter";
import { useLogin, useAuth } from "../../hooks";
import styled from "styled-components";

import formData from "./formData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: auto;

  @media (min-width: 768px) {
    padding: 32px 200px;
  }
  input[type="file"] {
    display: none;
  }
`;
const Login = () => {
  const { data } = useLogin();

  const [, setLocation] = useLocation();

  data?.success && setLocation("/");

  const { login } = useAuth();

  return (
    <>
      <Wrapper>
        <Form
          title="Login"
          onSubmit={login}
          formData={formData}
          buttonLabel="Entrar"
        />
      </Wrapper>
    </>
  );
};

export default Login;
