import styled, { css } from 'styled-components'

const input = css`
	border-radius: 3%;
	border: 1px solid;
	padding: 10px;
	width: 100%;
	border-color: ${({ $isInvalid }) => ($isInvalid ? 'red' : '#000')};
`

const inline = css`
	width: auto;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: start;
	padding: 30px 10px;
`

const FormButton = styled.button`
	border-radius: 3%;
`

const FormTitle = styled.h3`
	font-size: 40px;
`

const FieldLabel = styled.label`
	width: 100%;
`

const FieldError = styled.span`
	color: red;
`

const FieldInput = styled.input`
	${input}
`

const FieldSelect = styled.select`
	${input}
`

const FieldCheckbox = styled.input`
	${input}
	${inline}
`

const FieldColor = styled.input`
	${input}

	padding: 0;
`

export default {
	Form,
	FormButton,
	FormTitle,
	FieldLabel,
	FieldInput,
	FieldSelect,
	FieldCheckbox,
	FieldColor,
	FieldError,
}
