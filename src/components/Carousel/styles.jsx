import { styled } from "styled-components";

const Container = styled.div`
    min-height: 60vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const ImageWrapper = styled.div`
    height: 70%;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    height: 200px;
    width: 300px;
`

const Video = styled.video`
    height: 200px;
    width: 300px;
`

const ThumbImg = styled.img`
    height: 60px;
    width: 90px;
`

const ThumbVideo = styled.video`
    height: 60px;
    width: 90px;
`

const CurrentItem = styled.p`
    color: darkgrey;
`

const Nav = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5%;
`

const Left = styled.img`
    height: 10px;
    width: 10px;
`

const Right = styled.img`
    height: 10px;
    width: 10px;
`

export default {
    Container,
    ImageWrapper,
    Image,
    Video,
    ThumbImg,
    ThumbVideo,
    Nav,
    CurrentItem,
    Left,
    Right
}