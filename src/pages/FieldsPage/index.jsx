import { Form } from '../../components'

import formData from './formData'

const Fields = () => {
	return (
		<>
			<Form
				title="Este es el form de prueba"
				buttonLabel="Enviar"
				onSubmit={(data) => console.log(data)}
				formData={formData}
			/>
		</>
	)
}

export default Fields
