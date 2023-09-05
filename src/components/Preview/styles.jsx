import { styled } from "styled-components";

const Container = styled.div`
  margin-bottom: 5vh;
  height: 15vh;
  width: 90vw;
  display: flex;
  align-items: center;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 5%;
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Info = styled.p`
  color: darkslategrey;
`;

export default {
  Container,
  Image,
  TextWrapper,
  Title,
  Info,
};
