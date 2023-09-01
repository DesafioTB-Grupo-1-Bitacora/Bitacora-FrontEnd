import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Image = styled.img`
    width: 20px;
    height: 20px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.p`

`;

const Info = styled.p`

`;

export default {
    Container,
    Image,
    TextWrapper,
    Title,
    Info
}