import { useForm } from 'react-hook-form'

import { resolver, getDefaultValues, getFields } from './helpers'

import Styled from './styles'
import InputFields from './fields'

const Form = ({ title, onSubmit, buttonLabel, formData = [] }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: getDefaultValues(formData),
		resolver: resolver(formData),
	})

	const fields = getFields(formData)

	return (
		<Styled.Form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Styled.FormTitle>{title}</Styled.FormTitle>

			{fields.map(({ name, type = 'text', ...propsRest }) => {
				const { ref: inputRef, ...rest } = {
					type,
					...register(name),
					...propsRest,
				}

				const Input = InputFields[type] || InputFields.input

				return (
					<Input
						key={name}
						{...rest}
						errors={errors[name]}
						inputRef={inputRef}
					/>
				)
			})}

			<Styled.FormButton type="submit">{buttonLabel}</Styled.FormButton>
		</Styled.Form>
	)
}

export default Form
