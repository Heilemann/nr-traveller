// this is a hook that returns a function that sends a message to the parent window
import { TAppReceivableMessages } from '../../../interfaces'

export default function useMessageToApp() {
	// let searchParams = new URLSearchParams(window.parent.location.search)
	// let documentId = searchParams.get('id') || 'character'

	// if (documentId === null) {
	// 	console.warn('Document ID not found in AUX URL.')
	// }

	const targetOrigin = 'http://localhost:3003'

	const messageToApp = ({ message, data }: TAppReceivableMessages) => {
		console.log('System sending message to app:', { message, data })

		window.parent.postMessage(
			{
				source: 'System',
				message,
				data,
			} as TAppReceivableMessages,
			targetOrigin,
		)
	}

	return messageToApp
}
