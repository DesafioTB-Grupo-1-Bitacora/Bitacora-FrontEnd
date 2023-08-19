export default [
	{
		name: 'email',
		label: 'Email',
		placeholder: 'email@domain.com...',
		validation: {
			validationType: 'string',
			validations: ['email', 'required'],
		},
	},
	// campo opcional
	{
		name: 'username',
		label: 'Nombre de usuario',
		validation: {
			validationType: 'string',
			validations: ['optional'],
		},
	},
	// con mensaje de validación de tipo y validadores customizados
	{
		name: 'age',
		label: 'Edad',
		placeholder: 'Tu edad...',
		type: 'number',
		validation: {
			validationType: 'number',
			validationTypeError: 'Campo `${label}` no ES UN NUMERO',
			validations: [
				{ type: 'positive', params: ['Campo `${label}` Debe ser un POSITIVO'] },
				{
					type: 'min',
					params: [18, 'Campo `${label}` Debe ser MAS QUE ${min}'],
				},
				'integer',
			],
		},
	},
	// con valor por defecto
	{
		name: 'genre',
		label: 'Genero',
		placeholder: 'Your genre...',
		type: 'select',
		options: [
			{ label: 'Seleccione', value: '' },
			{ label: 'Hombre', value: 'h' },
			{ label: 'Mujer', value: 'm' },
			{ label: 'Otro', value: 'o' },
		],
		validation: {
			validationType: 'string',
			validations: ['required', { type: 'oneOf', params: [['h', 'm', 'o']] }],
		},
		defaultValue: 'm',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: '********',
		type: 'password',
		validation: {
			validationType: 'string',
			validations: ['required', { type: 'min', params: [8] }],
		},
		defaultValue: '12345678',
	},
	{
		name: 'color',
		label: 'Color',
		placeholder: '********',
		type: 'color',
		validation: {
			validationType: 'string',
			validations: ['required'],
		},
		defaultValue: '#33FF99',
	},
	{
		name: 'date',
		label: 'Fecha',
		type: 'date',
		validation: {
			validationType: 'date',
			validations: ['required', { type: 'min', params: [new Date()] }],
		},
		defaultValue: new Date().toISOString().substring(0, 10),
	},

	{
		name: 'accept',
		label: 'Leer y aceptar',
		type: 'checkbox',
		validation: {
			validationType: 'bool',
			validations: ['required', { type: 'oneOf', params: [[true]] }],
		},
		defaultValue: true,
	},
]
