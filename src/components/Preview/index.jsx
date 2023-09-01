import { useLocation } from "wouter";
import Styled from "./styles";

const Preview = ({ image, title, date, memoryLocation, ...props }) => {
    const [location, setLocation] = useLocation();

    return (
        <Styled.Container onClick={() => {
            setLocation(`/memory?title=${title}`);
        }}>
            <Styled.Image src={image} />
            <Styled.TextWrapper>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Info>{`${date} · ${location}`}</Styled.Info>
            </Styled.TextWrapper>
        </Styled.Container>
    )
}

export default Preview;