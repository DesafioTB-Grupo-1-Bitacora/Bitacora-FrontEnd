import { useState } from "react";
import Styled from "./styles";
import { useSpringCarousel } from "react-spring-carousel";

const Carousel = ({ fileArray }) => {
    if(!fileArray) return <div>There's no multimedia provided</div>

    const [currentItem, setCurrentItem] = useState(0); 

    const { carouselFragment, thumbsFragment, slideToItem, useListenToCustomEvent, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        itemsPerSlide: 1,
        withThumbs: true,
        items: fileArray?.map((file, index) => ({
            id: index,
            renderItem: (file.tag === "image" ? 
                <Styled.Image src={file.url} alt="Image" style={currentItem !== index ? {display: "none"} : {display: "block"}} />
                :
                <Styled.Video src={file.url} autoPlay={true} controls={true} style={currentItem !== index ? {display: "none"} : {display: "block"}}>Video</Styled.Video>),
            renderThumb: (file.tag === "image" ? 
                <Styled.ThumbImg src={file.url} alt="Image" onClick={() => slideToItem(index)} />
                :
                <Styled.ThumbVideo src={file.url} onClick={() => slideToItem(index)}>Video</Styled.ThumbVideo>)
        }))
    })

    useListenToCustomEvent((event) => {
        if(event.eventName === "onSlideStartChange") {
            setCurrentItem(event.nextItem.id)
        }
    })

    return (
        <Styled.Container>
            <Styled.Nav>
                <Styled.Left onClick={slideToPrevItem} src="src/assets/angle-left.png" alt="left" />
                <Styled.CurrentItem>{currentItem + 1} / {fileArray.length}</Styled.CurrentItem>
                <Styled.Right onClick={slideToNextItem} src="src/assets/angle-right.png" alt="right" />
            </Styled.Nav>
            <Styled.ImageWrapper>
                {carouselFragment}
                <div style={{margin: "5%"}}>{thumbsFragment}</div>
            </Styled.ImageWrapper>           
        </Styled.Container>
    )
}

export default Carousel;