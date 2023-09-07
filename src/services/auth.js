import { getConfig } from "./memories"

const PATH = '/auth'

export const addAccessToken = (client) => {
	client.interceptors.request.use(
		config => {
		  if (token) {
			config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access-token')
		  }
		  return config
		},
		error => {
		  Promise.reject(error)
		}
	  )
}

export const login = (client) => async (params) => {
	try {
		const {data} = await client.post(`${PATH}/signin`, params)
		localStorage.setItem('access-token', data.token)
		console.log('access-token', localStorage.getItem('access-token'))
		addAccessToken(client)
		return data
	} catch (error) {
		console.log('Login error:', error.message)
		return { success: false }
	}
}

export const register = (client) => async (params) => {
	try {
		const { data } = await client.post(`${PATH}/signup`, params)
		return data
	} catch (error) {
		console.log('Register error:', error.message)
		return { success: false }
	}
}

export const logout = (client) => async () => {
	try {
		const { data } = await client.post(`${PATH}/signout`, {}, getConfig())
		return data
	} catch (error) {
		console.log('Logout error:', error.message)
		return { success: false }
	}
}

export const getUser = (client) => async () => {
	const config = {
		headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
	};

	try {
		const { data } = await client.get(`${PATH}/user`, config)
		return data
	} catch (error) {
		console.log('GetUser error:', error.message)
		return { success: false }
	}
}
