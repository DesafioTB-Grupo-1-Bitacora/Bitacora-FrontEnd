import { styled } from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space around;
    align-items: center;
`;

const Image = styled.img`
    height: 200px;
    width: 350px;
`

const MemoryInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const BoxNotebookAndMemories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 48px;
  height: 80px;

  @media (min-width: 768px) {
    padding: 32px 315px;
  }
`;

const MediaBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Box = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
`;

const Logo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 12px;
`;

export default {
    Container,
    Image,
    MemoryInfo,
    BoxNotebookAndMemories,
    MediaBox,  
    Box,
    Logo,
    Title
};