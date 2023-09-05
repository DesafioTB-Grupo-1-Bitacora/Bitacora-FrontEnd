import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { useState } from "react";
import MapComponent from "./MapPage";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  ZoomControl,
} from "react-leaflet";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: auto;

  @media (min-width: 768px) {
    padding: 32px 200px;
  }
  input[type="file"] {
    display: none;
  }
`;
const BoxSetBasicData = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Box1 = styled.div`
  height: auto;
  width: auto;
`;
const BoxSetImage = styled.div`
  border-radius: 10px;
  background: url(""), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
const BoxFirstBtns = styled.div`
  flex-direction: row;
  display: flex;
  height: 24px;
`;
const NotebookTitle = styled.input`
  margin-right: 20px;
  font-family: kumbh sans;
  font-size: 10px;
  outline: none;
  background-color: transparent;
  border: 0px solid;
`;
const DateOpt = styled.input`
  font-size: 10px;
  font-family: kumbh sans;
  margin-right: 20px;
  outline: none;
`;
const Ubication = styled.input`
  font-size: 10px;
  outline: none;
  background-color: transparent;
  border: 0px solid;
`;

const Box2 = styled.div`

width: 213px
height: 30px;
padding: 0px 11px;



button {
	margin-top: 24px;

	background-color: var(--gris-oscuro, #616163);
color: white;
border: none;
padding: 12px 24px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
width: 340px;
}



`;
const MemoryTitle = styled.input`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  outline: none;
  border: 0px solid;
  margin-bottom: 24px;
`;
const Description = styled.input`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  background-color: transparent;
  border: 0px solid;
  margin-bottom: 24px;
  margin-left: 10px;
  @media (min-width: 768px) {
    margin-left: 0px;
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
const TextLogo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const Title = styled.h1`
  font-size: 12px;
`;
const CamaraLogo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const AudioLogo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const GalleryLogo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const MusicLogo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
const DocumentLogo = styled.div`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const NewMemory = () => {
  const [location, navigate] = useLocation();
  const [position, setPosition] = useState([]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Acciones adicionales, como navegar a una nueva página con los datos del formulario
    // navigate('/nueva-ruta?' + new URLSearchParams(data).toString());
  };

  return (
    <>
      <MapComponent />

      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <BoxSetBasicData>
          <Box1>
            <BoxSetImage>Imagen de portada</BoxSetImage>
            <BoxFirstBtns>
              <NotebookTitle
                placeholder="Titulo del cuaderno"
                type="text"
                minLength="3"
                maxLength="20"
                size="16"
              />
              <DateOpt type="date" size="10" />
              <Ubication
                type="text"
                placeholder="Ubicación"
                minLength="3"
                maxLength="20"
                size="11"
              />
            </BoxFirstBtns>
          </Box1>
          <Box2>
            <MemoryTitle
              type="text"
              placeholder="Título del Memory"
              minLength="3"
              maxLength="20"
              size="26"
            />

            <Description
              type="text"
              placeholder="Añadir al memory"
              minLength="3"
              maxLength="20"
              size="26"
            />
            <MediaBox>
              <Box>
                <TextLogo>
                  <img src="src/assets/Texto.png" />
                </TextLogo>

                <Title>Texto</Title>
              </Box>
              <Box>
                <CamaraLogo>
                  <img src="src/assets/Camera.png" />
                </CamaraLogo>
                <Title>Hacer Foto</Title>
              </Box>
              <Box>
                <label htmlFor="recorder">
                  <input type="file" accept="audio/*" capture id="recorder" />

                  <AudioLogo>
                    <img src="src/assets/Audio.png" />
                  </AudioLogo>
                </label>
                <Title>Audio</Title>
              </Box>
              <Box>
                <label htmlFor="file-upload">
                  <GalleryLogo>
                    <img src="src/assets/Gallery.png" />
                    <input id="file-upload" type="file" />
                  </GalleryLogo>
                </label>
                <Title>Foto/Video</Title>
              </Box>
              <Box>
                <MusicLogo>
                  <img src="src/assets/Music.png" />
                </MusicLogo>
                <Title>Música</Title>
              </Box>
              <Box>
                <label htmlFor="file-upload">
                  <DocumentLogo>
                    <img src="src/assets/Documento.png" />
                    <input id="file-upload" type="file" />
                  </DocumentLogo>
                </label>
                <Title>Archivo</Title>
              </Box>
            </MediaBox>
            <button type="submit">Confirmar</button>
          </Box2>
        </BoxSetBasicData>
      </Wrapper>
    </>
  );
};

export default NewMemory;
