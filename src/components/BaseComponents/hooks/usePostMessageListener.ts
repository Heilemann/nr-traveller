// listen for messages from the app in window.parent
// (which are forwarded by the aux server) deal with them as needed
import _ from 'lodash'
import { MutableRefObject, useCallback, useContext, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { TSystemReceivableMessages, TValues } from '../../../interfaces'
import context from '../context'

type Props = {
	resetInProgress: MutableRefObject<boolean>
}

const usePostMessageListener = ({ resetInProgress }: Props) => {
	const { state, dispatch } = useContext(context)
	const { reset } = useFormContext<TValues>()

	const messageListener = useCallback(
		(e: MessageEvent) => {
			const messagePayload = e.data as TSystemReceivableMessages
			const { message, source, data } = { ...messagePayload }
			const wrongSource = source !== 'Aux' && source !== 'App'

			if (wrongSource) return

			console.log('System received message:', message, data)

			switch (message) {
				case 'load':
					const { documentId } = data
					console.log(
						'System received load message for document',
						documentId,
						data,
					)
					const document = data.documents.byId[documentId]

					if (!document) {
						throw new Error(`Document with id ${documentId} not found`)
					}

					const payload = {
						...data,
						document,
					}

					dispatch({
						type: 'LOAD',
						payload,
					})

					reset(payload.document.values)

					break

				case 'update data': {
					// @ts-ignore
					const { id: documentId } = data
					const newDocument = data.documents.byId[documentId]

					console.log(data.document, newDocument, state.document)

					if (!newDocument) {
						console.error('New document not found', documentId, data.documents)
						return
					}

					if (
						_.isEqual(data.documents, state.documents) &&
						_.isEqual(newDocument, state.document) &&
						_.isEqual(data.assets, state.assets)
					) {
						return
					}

					// I think the problem is that when you type fast, the data coming back is lagging behind
					// which causes the above check to fail, and the document to be reset to the old one
					// I might have to add a timestamp to the message and only accept the latest one
					// possibly a version instead of a timestamp
					// I don't love any of this because it's one more complication, and I don't want to
					// fuck up the system SDK with stuff

					dispatch({
						type: 'LOAD',
						payload: {
							...data,
							document: newDocument,
						},
					})

					resetInProgress.current = true

					reset(newDocument?.values)

					break
				}

				case 'update document mode':
					dispatch({
						type: 'LOAD',
						payload: data,
					})
					break
			}
		},
		[state, dispatch, reset, resetInProgress],
	)

	useEffect(() => {
		window.addEventListener('message', messageListener)
		return () => window.removeEventListener('message', messageListener)
	}, [messageListener])
}

export default usePostMessageListener
