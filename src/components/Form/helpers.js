import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { validationErrors } from './constants'

yup.setLocale(validationErrors)

export const getFields = (formData) =>
	formData.map(({ validation, ...rest }) => ({
		...rest,
	}))

export const getDefaultValues = (formData) =>
	formData.reduce((values, field) => {
		const { name, defaultValue } = field
		return { ...values, [name]: defaultValue }
	}, {})

export const resolver = (formData) => yupResolver(_getSchema(formData))

function _getSchema(formData) {
	const schema = formData.reduce((schema, field) => {
		const {
			name,
			validation: {
				validationType,
				validationTypeError,
				validations = [],
			} = {},
		} = field
		const isObject = name.indexOf('.') >= 0

		if (isObject || !yup[validationType]) {
			return schema
		}
		let validator = yup[validationType]().typeError(validationTypeError || '')
		validations.forEach((validation) => {
			if (typeof validation !== 'object') {
				return (validator = validator[validation]())
			}
			const { params = [], type } = validation
			if (!validator[type]) {
				return
			}
			validator = validator[type](...params)
		})

		return schema.concat(yup.object().shape({ [name]: validator.label(name) }))
	}, yup.object().shape({}))

	return schema
}
