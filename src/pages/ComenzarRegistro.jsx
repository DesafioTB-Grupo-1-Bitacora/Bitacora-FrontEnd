import styled from "styled-components";
import { Link, useLocation } from "wouter";

const ComenzarRegistro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 32px 180px;
  }
`;
const TitleRegistro = styled.h1`
  color: var(--negro, #0c0c0f);

  font-family: Kumbh Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 100px;
  padding-bottom: 24px;
`;

const RegButton = styled.button`
  background-color: #00917f;
  color: white;
  border: none;
  padding: 12px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  width: auto;
`;

const BotonRegistro = () => {
  return (
    <>
      <ComenzarRegistro>
        <TitleRegistro> ¿Aún no te decides?</TitleRegistro>
        <Link to={"/"}>
          <RegButton>Lea porqué TripMemories</RegButton>
        </Link>
      </ComenzarRegistro>
    </>
  );
};

export default BotonRegistro;
