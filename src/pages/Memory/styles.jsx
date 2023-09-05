import { styled } from "styled-components";

const Container = styled.section`
  min-height: 80vh;
  width: auto;
  gap: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Audio = styled.audio``;

const MemoryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
`;

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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
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
  ImageWrapper,
  Audio,
  MemoryInfo,
  BoxNotebookAndMemories,
  MediaBox,
  Box,
  Logo,
  Title,
};
