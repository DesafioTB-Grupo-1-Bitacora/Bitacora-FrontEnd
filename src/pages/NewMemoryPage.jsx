import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import MapComponent from './MapPage'
import styled from 'styled-components'

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	padding: 32px 24px;


	@media (min-width: 768px) {
	  padding: 32px 315px;
	}
	div {
		padding: 26px;
	}
`

const NewMemory = () => {
	const [location, navigate] = useLocation()
/* 	console.log(location.search) */

	const { register, handleSubmit, errors } = useForm()

	const onSubmit = (data) => {
		console.log(data)
		// Acciones adicionales, como navegar a una nueva página con los datos del formulario
		// navigate('/nueva-ruta?' + new URLSearchParams(data).toString());
	}

	return (
		<>
		<MapComponent/>
			<Wrapper onSubmit={handleSubmit(onSubmit)}>

				<div>IMAGEN SIN CARGAR</div>
				<div>Ubicación</div> 	<div>Fecha</div> <div>botón editar</div>
			
				<div>
					
			

					<label>Título del Memory:</label>
					<input type="text" {...register('title', { required: true })} />
				</div>

				<div>
					<label>(Escribe lo que quieras)Descripción:</label>
					<input
						type="text"
						{...register('description', { required: 'error message' })}
					/>
				</div>
				<div>ICONOS MEDIA</div>


			{/* 	<div>
					<label>Día y hora:</label>
					<input
						type="datetime-local"
						{...register('dateTime', { required: true })}
						min="2022-06-07T00:00"
						max="2024-06-14T00:00"
					/>
				</div> */}

				<button type="submit">Publicar</button>
			</Wrapper>
		</>
	)
}

export default NewMemory
