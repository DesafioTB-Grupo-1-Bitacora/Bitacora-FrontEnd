import Styled from "./styles";

import { Link } from "wouter";

import { useMemory } from "../../hooks/memories";
import { useSearch } from "wouter/use-location";
import Carousel from "../../components/Carousel";
import MapComponent from "../MapPage";

const Memory = () => {
  const search = useSearch();

  const searchParams = new URLSearchParams(search);

  const title = searchParams.get("title");

  const { memory } = useMemory(title);

  const date = new Date(memory?.data[0].date);
  const parsedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const imageAndVideo =
    memory?.multimedia.filter(
      (file) => file.tag === "image" || file.tag === "video"
    ) || null;
  const audios =
    memory?.multimedia.filter((file) => file.tag === "audio") || null;

  return (
    <>
      <MapComponent />
      <Styled.Container>
        <Styled.ImageWrapper>
          {imageAndVideo && <Carousel fileArray={imageAndVideo} />}
          <Styled.MemoryInfo>
            <p>{memory?.data[0].title}</p>
            <p>{parsedDate}</p>
            <p>{memory?.data[0].location}</p>
          </Styled.MemoryInfo>
        </Styled.ImageWrapper>
        <p>{memory?.data[0].description || "Descripción"} </p>
        {audios &&
          audios.map((audio) => (
            <Styled.Audio src={audio.url} controls={true} />
          ))}
        <Styled.MediaBox>
          <Styled.Box>
            <Styled.Logo>
              <img src="src/assets/Texto.png" alt="" />
            </Styled.Logo>
            <Styled.Title>Texto</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo>
              <img src="src/assets/Camera.png" alt="" />
            </Styled.Logo>
            <Styled.Title>Hacer foto</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo>
              <img src="src/assets/Audio.png" alt="" />
            </Styled.Logo>
            <Styled.Title>Audio</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo>
              <img src="src/assets/Gallery.png" alt="" />
            </Styled.Logo>
            <Styled.Title>Foto/Vídeo</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo>
              <img src="src/assets/Music.png" alt="" />
            </Styled.Logo>
            <Styled.Title>Música</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo>
              <img src="src/assets/Documento.png" alt="" />
            </Styled.Logo>
            <Styled.Title>Archivo</Styled.Title>
          </Styled.Box>
        </Styled.MediaBox>
      </Styled.Container>
    </>
  );
};

export default Memory;
