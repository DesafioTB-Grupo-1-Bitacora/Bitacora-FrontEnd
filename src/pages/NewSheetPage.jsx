import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'

import styled from 'styled-components'

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: space-between;
	padding: 50px 40px;
	div {
		padding: 26px;
	}
`

const NewSheet = () => {
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
			<Wrapper onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Título:</label>
					<input type="text" {...register('title', { required: true })} />
				</div>

				<div>
					<label>Descripción:</label>
					<input
						type="text"
						{...register('description', { required: 'error message' })}
					/>
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

				<div>
					freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Sed commodo ultrices eros, vitae tincidunt quam varius id. Nam
					tincidunt, magna porttitor congue blandit, nulla mi sagittis mi, quis
					mollis libero metus in libero. Fusce eget porta ex, vel posuere nulla.
					Aenean dictum, erat a convallis ultrices, velit purus efficitur
					tellus, eu elementum mauris tellus at tellus. Proin in velit erat.
					Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					per inceptos himenaeos. Mauris in tristique nibh, ac condimentum
					mauris. Proin consequat lobortis mollis. Mauris quis tellus eu nunc
					vulputate posuere ut a tellus. Pellentesque eleifend dapibus euismod.
					Mauris sed metus nunc. Praesent efficitur efficitur tristique. Duis
					cursus dignissim auctor. Aliquam vitae massa euismod, aliquam leo eu,
					porttitor odio. Duis venenatis justo quis nulla pulvinar ultrices in
					ac velit. Nunc sit amet massa mattis, faucibus orci non, hendrerit
					metus. Cras sed tempus turpis, nec consectetur libero. Nulla euismod
					felis id urna venenatis molestie. In finibus efficitur dui quis
					vulputate. Donec scelerisque, leo eget vehicula ullamcorper, est
					mauris dictum nisi, ac tincidunt massa leo sit amet ante. Nam ut neque
					id enim dictum posuere. In consequat a leo eu luctus. Aenean hendrerit
					auctor rutrum. Vestibulum vel lectus consequat, faucibus diam ac,
					iaculis lectus. Ut at vulputate sem. Pellentesque diam ex, fringilla
					vel bibendum eget, aliquam vitae felis. Integer vel justo ut nunc
					malesuada posuere. Aenean rhoncus euismod orci, ut malesuada eros
					fringilla ut. Morbi ac ante id velit facilisis egestas ac sit amet
					neque. Vestibulum facilisis elementum suscipit. Mauris neque purus,
					semper et tempor ac, faucibus id eros. Nam vitae tellus id nisi
					convallis sagittis vel at ligula. Donec at nulla eget lacus finibus
					vehicula eget vel dolor. Donec diam dui, porttitor quis fermentum ac,
					scelerisque eu nisl. Donec non luctus enim. Maecenas non lorem massa.
					Donec lobortis felis ullamcorper arcu varius cursus. Fusce mi nulla,
					venenatis non arcu quis, efficitur placerat leo. Maecenas porttitor
					erat orci, nec mattis erat lobortis eget. Donec nunc justo, rhoncus
					sit amet laoreet vel, feugiat in erat. Donec condimentum lectus lorem,
					vel commodo erat porta eget. Vivamus dictum orci et lorem dapibus,
					vitae porta nunc volutpat. Suspendisse pulvinar quam magna, lobortis
					blandit metus blandit quis. Curabitur id elit a leo varius fringilla.
					Integer elementum sem ac nulla mollis dapibus. Ut ut nisl felis.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Donec porttitor tempor mattis. Etiam sed
					sodales eros. Integer porttitor est molestie, hendrerit diam eu,
					tincidunt ante. Sed sit amet facilisis purus. Cras blandit, arcu sed
					euismod scelerisque, lectus dolor rutrum tellus, ullamcorper vulputate
					arcu justo ut lorem. Nam porta egestas odio, at dictum ante varius
					eget. Proin fringilla, mauris sit amet fermentum pellentesque, lectus
					dolor mattis ante, rhoncus finibus enim elit eget dolor. Integer ut
					ipsum sit amet nibh condimentum posuere eget lobortis dolor. In a
					metus sed ex rutrum venenatis eu sed nunc. Donec ipsum enim, auctor ut
					fermentum eu, gravida ut odio. Aliquam eu placerat arcu. Nullam nec
					purus sit amet arcu fringilla mattis.{' '}
				</div>

				<button type="submit">Publicar</button>
			</Wrapper>
		</>
	)
}

export default NewSheet
