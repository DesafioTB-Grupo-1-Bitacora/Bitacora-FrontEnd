import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {
  useMutateMemory,
  useMemories,
  useUserMemories,
  useMemory,
} from "../hooks/memories";
import MapComponent from "./MapPage";
import styled from "styled-components";
import { useSearch } from "wouter/use-location";
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

  @media (min-width: 768px) {
    padding: 32px 200px;
  }
  input[type="file"] {
    display: none;
  }
`;
const BoxSetBasicData = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Box1 = styled.div`
  height: auto;
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
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
  width: 100%;
  height: 30px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 11px;

  button {
    margin-top: 24px;

    background-color: #00917f;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 80%;
    margin-left: 10%;
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
  justify-content: space-between;
  width: 100%;
`;
const Box = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  text-align: center;
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
  margin-bottom: 0px;
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
const BoxTitleAndMemory = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewMemory = () => {
  const { data } = useLogin();
  const { createMemory } = useMutateMemory();

  // const {allMemories, isLoading} = useMemories();

  // const {allUserMemories, isLoading} = useUserMemories();
  // const {memory, isLoading} = useMemory("DOS PALABRAS"); NO ENCUENTRA RECURSO POR ESPACIOS AL ENVIA DOS%PALABRAS

  /* const { memory, isLoading } = useMemory("Test"); */
  /*   console.log(memory); */
  const [location, navigate] = useLocation();
  const [position, setPosition] = useState([]);

  const search = useSearch();
  const searchParams = new URLSearchParams(search);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    const formData = new FormData();
    console.log(data);
    for (let field in form) {
      if (form[field] instanceof FileList) {
        const fields = Array.from(form[field]);

        fields.forEach((file) => {
          formData.append("image[]", file, file.name);
        });

        const title = form.title.split(" ").join("_");

        formData.append(field, data.data + "/" + title);
      } else if (form[field] instanceof Object) {
        formData.append(field, JSON.stringify(form[field]));
      } else if (form[field] instanceof Array) {
        form[field].forEach((element) => {
          formData.append(field + "[]", element);
        });
      } else {
        formData.append(field, form[field]);
      }
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    formData.append("latitude", searchParams.get("latitude"));
    formData.append("longitude", searchParams.get("longitude"));

    console.log(formData.values());
    createMemory(formData);

    // // Primitives

    // formData.append("notebook", data.notebook);

    // // arrays

    // data.notes.forEach(note => {
    //   formData.append("notes[]", note);

    // })

    // // Files

    // formData.append("file", data.multimedia_url[0], data.multimedia_url[0]);

    //   // Object

    //   formData.append("notebook", JSON.stringify(data.location));

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
                {...register("notebook")}
              />
              <DateOpt type="date" size="10" {...register("date")} />
              <Ubication
                type="text"
                placeholder="Ubicación"
                minLength="3"
                maxLength="20"
                size="11"
                {...register("location")}
              />
            </BoxFirstBtns>
          </Box1>
          <Box2>
            <BoxTitleAndMemory>
              <MemoryTitle
                type="text"
                placeholder="Título del Memory"
                minLength="3"
                maxLength="20"
                size="26"
                {...register("title")}
              />

              <Description
                type="text"
                placeholder="Añadir al memory"
                minLength="3"
                maxLength="20"
                size="26"
                {...register("description")}
              />
            </BoxTitleAndMemory>
            <MediaBox>
              <Box>
                <TextLogo>
                  <img src="/assets/Texto.png" />
                </TextLogo>

                <Title>Texto</Title>
              </Box>
              <Box>
                <CamaraLogo>
                  <img src="/assets/Camera.png" />
                </CamaraLogo>
                <Title>Hacer Foto</Title>
              </Box>
              <Box>
                <label htmlFor="recorder">
                  <input type="file" accept="audio/*" capture id="recorder" />

                  <AudioLogo>
                    <img src="/assets/Audio.png" />
                  </AudioLogo>
                </label>
                <Title>Audio</Title>
              </Box>
              <Box>
                <label htmlFor="file-upload">
                  <GalleryLogo>
                    <img src="/assets/Gallery.png" />
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      {...register("multimedia_url")}
                    />
                  </GalleryLogo>
                </label>
                <Title>Foto/Video</Title>
              </Box>
              <Box>
                <MusicLogo>
                  <img src="/assets/Music.png" />
                </MusicLogo>
                <Title>Música</Title>
              </Box>
              <Box>
                <DocumentLogo>
                  <img src="/assets/Documento.png" />
                </DocumentLogo>

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
