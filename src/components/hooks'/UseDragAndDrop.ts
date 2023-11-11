import { DragEvent, useState } from 'react'
import { TWeapon, TWeaponOnCharacter } from '../../interfaces'

type DropHandler = (data: any) => void

const useDragAndDrop = (
	onDrop: DropHandler,
	prepend: (data: TWeaponOnCharacter) => void,
	documents: any,
) => {
	const [dragIsOver, setDragIsOver] = useState(false)

	const handleDrop = (e: DragEvent) => {
		e.preventDefault()
		const droppedDocumentId = JSON.parse(
			e.dataTransfer.getData('documentId'),
		).documentId
		const droppedDoc = documents.byId[droppedDocumentId]
		if (!droppedDoc) {
			throw new Error(
				`Could not find dropped document. ID: ${droppedDocumentId}`,
			)
		}

		const type: string = droppedDoc.type

		if (type !== 'weapon') return

		const droppedWeapon = droppedDoc.values as TWeapon

		prepend({
			...droppedWeapon,
			documentId: droppedDoc._id,
		} as TWeaponOnCharacter)

		setDragIsOver(false)
	}

	const handleDragEnter = (e: DragEvent) => {
		e.preventDefault()
		setDragIsOver(true)
	}

	const handleDragLeave = (e: DragEvent) => {
		e.preventDefault()
		setDragIsOver(false)
	}

	return { dragIsOver, handleDrop, handleDragEnter, handleDragLeave }
}

export default useDragAndDrop
