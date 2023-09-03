import Styled from "./styles";
import Map from "../../components/Map";
import { Link } from "wouter";

import { useMemory } from "../../hooks/memories";
import { useSearch } from "wouter/use-location";
import MapComponent from "../MapPage";

const Memory = () => {
  const search = useSearch();

  const searchParams = new URLSearchParams(search);

  const title = searchParams.get("title");

  const { memory } = useMemory(title);

  console.log("Memory:", memory);

  return (
    <>
      <MapComponent />
      <Styled.Container>
        <Styled.Image src={memory?.multimedia[0]} />
        <Styled.MemoryInfo>
          <p>{memory?.data[0].title}</p>
          <p>{memory?.data[0].date}</p>
          <p>{memory?.data[0].location}</p>
        </Styled.MemoryInfo>
        <p>{memory?.data[0].description || "Descripción"} </p>
        <Styled.MediaBox>
          <Styled.Box>
            <Styled.Logo src="/assets/Texto.png" />
            <Styled.Title>Texto</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo src="/assets/Camera.png" />
            <Styled.Title>Hacer foto</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo src="/assets/Audio.png" />
            <Styled.Title>Audio</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo src="/assets/Gallery.png" />
            <Styled.Title>Foto/Vídeo</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo src="/assets/Music.png" />
            <Styled.Title>Música</Styled.Title>
          </Styled.Box>
          <Styled.Box>
            <Styled.Logo src="/assets/Documento.png" />
            <Styled.Title>Archivo</Styled.Title>
          </Styled.Box>
        </Styled.MediaBox>
      </Styled.Container>
    </>
  );
};

export default Memory;
