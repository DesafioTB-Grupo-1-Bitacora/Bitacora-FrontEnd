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
	{
		name: 'password',
		label: 'Password',
		placeholder: '********',
		type: 'password',
		validation: {
			validationType: 'string',
			validations: ['required'],
		},
	},
]
