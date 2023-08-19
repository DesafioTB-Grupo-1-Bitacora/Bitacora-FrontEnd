import { Form } from '../../components'
import { useLocation } from 'wouter'
import { useLogin, useAuth } from '../../hooks'

import formData from './formData'

const Register = () => {
	const { data } = useLogin()
	const { register } = useAuth()
	const [, setLocation] = useLocation()

	data?.success && setLocation('/')

	return (
		<>
			<Form
				title="Register"
				onSubmit={register}
				formData={formData}
				buttonLabel="Registrar"
			/>
		</>
	)
}

export default Register
