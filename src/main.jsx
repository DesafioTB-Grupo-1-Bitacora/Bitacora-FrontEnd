import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import APIClientProvider from './context/APIClientProvider'

import App from './App'
import { ReactQueryDevtools } from 'react-query/devtools'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
	<APIClientProvider>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
		<ReactQueryDevtools initialIsOpen={false} />
	</APIClientProvider>
)
