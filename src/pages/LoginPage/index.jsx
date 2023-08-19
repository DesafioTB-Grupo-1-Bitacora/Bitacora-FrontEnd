import { Form } from '../../components'
import { useLocation } from 'wouter'
import { useLogin, useAuth } from '../../hooks'

import formData from './formData'

const Login = () => {
	const { data } = useLogin()

	const [, setLocation] = useLocation()

	data?.success && setLocation('/')

	const { login } = useAuth()

	return (
		<>
			<Form
				title="Login"
				onSubmit={login}
				formData={formData}
				buttonLabel="Entrar"
			/>
		</>
	)
}

export default Login
