import { useCallback, useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TDocument, TSystemReceivableMessages, TValues } from '../interfaces'
import Character from './character/Character'
import context from './context'
import DragAndDrop from './DragAndDrop'
import Handout from './handout/Handout'
import Note from './note/Note'
import Scene from './scene/Scene'
import Weapon from './weapon/Weapon'

export interface IContainerProps {}

export default function Container(props: IContainerProps) {
	// const isDevelopment = process.env.NODE_ENV === 'development'
	const { state, dispatch } = useContext(context)
	const { document } = state
	const type = document?.type || null
	const form = useForm<TValues>({
		shouldUnregister: true,
	})

	const messageToApp = (message: string, data?: any) => {
		window.parent.postMessage({
			source: 'System',
			message,
			data,
		})
	}

	const handleFormChanges = () => {
		const subscription = form.watch(values => {
			console.log('trail of cthulhu: form changed', values, document, state)

			if (!document || !values) return

			const payload = {
				...document,
				values: {
					...document.values,
					...values,
				},
			}

			messageToApp('save', payload)
		})

		return () => {
			subscription.unsubscribe()
		}
	}
	useEffect(handleFormChanges, [document]) // eslint-disable-line

	const messageListener = useCallback(
		(e: MessageEvent) => {
			const messagePayload = e.data as TSystemReceivableMessages
			const { message, source, data } = { ...messagePayload }
			const wrongSource = source !== 'Aux' && source !== 'App'

			if (wrongSource) return

			console.log('trail of cthulhu: message received', message, data)

			switch (message) {
				case 'load':
					console.log('trail of cthulhu: loading data', data)
					const { documentId } = data
					const document = data.documents?.find(
						(d: TDocument) => d._id === documentId,
					)

					if (!document) {
						throw new Error(`document with id ${documentId} not found by aux`)
					}

					const payload = {
						...data,
						document,
					}

					dispatch({
						type: 'LOAD',
						payload,
					})

					form.reset(document.values)

					break

				case 'update data':
					console.log('trail of cthulhu: updating data', data)
					const newDocument = data.documents?.find(
						(d: TDocument) => d._id === state.documentId,
					)

					dispatch({
						type: 'LOAD',
						payload: {
							...data,
							document: newDocument,
						},
					})

					console.log('trail of cthulhu: resetting data', newDocument?.values)

					form.reset(newDocument?.values, {
						keepDirty: true,
						keepErrors: true,
						keepIsSubmitted: true,
						keepTouched: true,
						keepIsValid: true,
						keepSubmitCount: true,
					})

					break

				case 'update document mode':
					dispatch({
						type: 'LOAD',
						payload: data,
					})
					break
			}
		},
		[dispatch, form, state.documentId],
	)

	useEffect(() => {
		window.addEventListener('message', messageListener)

		return () => {
			window.removeEventListener('message', messageListener)
		}
	}, [messageListener])

	const addMessageToAppToState = useCallback(() => {
		dispatch({
			type: 'LOAD',
			payload: {
				messageToApp,
			},
		})

		messageToApp('system is ready')
	}, [dispatch])
	useEffect(addMessageToAppToState, [addMessageToAppToState])

	if (!type) return null

	return (
		<FormProvider {...form}>
			<DragAndDrop>
				<div
					className='bottom-0 box-border flex min-h-full w-full flex-col bg-gray-100 p-4 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100'
					onDrop={e => {
						console.log('dropped on iframe', e)
					}}
				>
					{/* <Sizes /> */}
					{type === 'character' && <Character />}
					{type === 'note' && <Note />}
					{type === 'scene' && <Scene />}
					{type === 'weapon' && <Weapon />}
					{type === 'handout' && <Handout />}
				</div>
			</DragAndDrop>
		</FormProvider>
	)
}
