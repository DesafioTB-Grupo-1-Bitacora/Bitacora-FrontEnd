import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'wouter';
import styled from 'styled-components';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    padding: 50px 40px;
    div{
        padding: 26px;
    }
`;

const NewSheet = () => {
    const [location, navigate] = useLocation();
    console.log(location.search);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Acciones adicionales, como navegar a una nueva página con los datos del formulario
        // navigate('/nueva-ruta?' + new URLSearchParams(data).toString());
    };

    return (
        <>
            <Wrapper onSubmit={handleSubmit(onSubmit)}>
       

                <div >
                    <label>Título:</label>
                    <input type="text" {...register('title', { required: true })} />
        
                 
                </div>

                <div >
                    <label>Descripción:</label>
                    <input type="text" {...register('description', { required: 'error message' })} />
                   
                </div>

                <div>
                    <label>Día y hora:</label>
                    <input
                        type="datetime-local"
                        {...register('dateTime', { required: true })}
                        min="2022-06-07T00:00"
                        max="2024-06-14T00:00"
                    />
                </div>

                <div>
                        <button>Abrir Cámara</button>
                        <button>Subir imagenes</button>
                        <button>Audio</button>
                        <button>API de SPotify</button>
                 

                </div>
              
                <button type="submit">Publicar</button>
            </Wrapper>
        </>
    );
};

export default NewSheet;
