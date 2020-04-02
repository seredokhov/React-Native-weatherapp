import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import AppWithLocation from './src/components/AppWithLocation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'

const store = createStore(reducers)

const App = () => {
	return (
		<Provider store={store}>
			<AppWithLocation />
		</Provider>
	)

}

export default App