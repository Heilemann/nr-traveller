import { useReducer } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Container from './components/BaseComponents/Container'
import DragAndDrop from './components/BaseComponents/DragAndDrop'
import Context from './components/BaseComponents/context'
import DevToolbar from './components/BaseComponents/dev/DevMode'
import Reducer from './components/BaseComponents/reducer'
import { TState, TValues } from './interfaces'
import './App.css'

function App() {
	const [state, dispatch] = useReducer(Reducer, {} as TState)
	const isDevelopment = process.env.NODE_ENV === 'development'
	const form = useForm<TValues>({
		shouldUnregister: true,
	})

	console.log('state', state)

	return (
		<Context.Provider value={{ state, dispatch }}>
			<FormProvider {...form}>
				<DragAndDrop>
					{isDevelopment && <DevToolbar />}
					<Container />
				</DragAndDrop>
			</FormProvider>
		</Context.Provider>
	)
}

export default App
