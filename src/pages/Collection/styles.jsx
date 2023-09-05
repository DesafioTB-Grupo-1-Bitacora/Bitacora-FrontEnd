import { styled } from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
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

const PreviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default {
    Container,
    BoxNotebookAndMemories,
    PreviewsContainer
}