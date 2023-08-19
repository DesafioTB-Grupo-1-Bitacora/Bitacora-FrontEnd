import Styled from './styles'

const input = ({ name, label, errors, inputRef, ...rest }) => {
	return (
		<>
			<Styled.FieldLabel htmlFor={name}>{label}</Styled.FieldLabel>
			<Styled.FieldInput
				name={name}
				id={name}
				{...rest}
				ref={inputRef}
				$isInvalid={errors}
			/>
			<Styled.FieldError>{errors?.message}</Styled.FieldError>
		</>
	)
}

const select = ({ name, label, inputRef, errors, options, ...rest }) => {
	return (
		<>
			<Styled.FieldLabel htmlFor={name}>{label}</Styled.FieldLabel>
			<Styled.FieldSelect
				name={name}
				id={name}
				{...rest}
				ref={inputRef}
				$isInvalid={errors}
			>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</Styled.FieldSelect>
			<Styled.FieldError>{errors?.message}</Styled.FieldError>
		</>
	)
}

const checkbox = ({ name, label, errors, inputRef, ...rest }) => {
	return (
		<>
			<Styled.FieldLabel htmlFor={name}>
				<Styled.FieldCheckbox
					name={name}
					id={name}
					{...rest}
					ref={inputRef}
					$isInvalid={errors}
				/>
				{label}
			</Styled.FieldLabel>
			<Styled.FieldError>{errors?.message}</Styled.FieldError>
		</>
	)
}

const color = ({ name, label, errors, inputRef, ...rest }) => {
	return (
		<>
			<Styled.FieldLabel htmlFor={name}>{label}</Styled.FieldLabel>
			<Styled.FieldColor
				name={name}
				id={name}
				{...rest}
				ref={inputRef}
				$isInvalid={errors}
			/>
			<Styled.FieldError>{errors?.message}</Styled.FieldError>
		</>
	)
}

export default { input, select, checkbox, color }
