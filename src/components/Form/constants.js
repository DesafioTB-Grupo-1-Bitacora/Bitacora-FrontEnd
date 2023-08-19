export const validationErrors = {
	mixed: {
		required: 'Campo `${label}` requerido',
		oneOf: 'Campo `${label}` debe ser uno de los siguientes valores: ${values}',
	},
	string: {
		typeError: 'Campo `${label}` debe ser texto',
		email: 'Campo `${label}` debe ser un email válido',
		min: 'Campo `${label}` demasiado corto (mínimo ${min} caracteres)',
		max: 'Campo `${label}` demasiado largo (máximo ${max} caracteres)',
	},
	date: {
		typeError: 'Campo `${label}` debe ser una fecha válida',
		min: 'Campo `${label}` debe ser una fecha posterior a ${min}',
		max: 'Campo `${label}` debe ser una fecha anterior a ${max}',
	},
	number: {
		typeError: 'Campo `${label}` debe ser un numero',
		min: 'Campo `${label}` debe ser mayor o igual a ${min}',
		max: 'Campo `${label}` debe ser menor o igual a ${max}',
		positive: 'Campo `${label}` debe ser un numero positivo',
		integer: 'Campo `${label}` debe ser un numero entero',
	},
}
