import { useFormContext, useWatch } from 'react-hook-form'
import useMessageToApp from '../../BaseComponents/hooks/UseMessageToApp'
import Button from '../../BaseComponents/Form/Button'
import { TWeaponOnCharacter } from '../../../interfaces'
import { WindowIcon } from '@heroicons/react/24/solid'
import { useContext, useMemo } from 'react'
import context from '../../BaseComponents/context'

type Props = {
	index: number
}

const WeaponReferenceButton = ({ index }: Props) => {
	const { state } = useContext(context)
	const messageToApp = useMessageToApp()
	const { register } = useFormContext()

	const watchedWeapon: TWeaponOnCharacter | undefined = useWatch({
		name: `weapons.${index}`,
	})

	const isReferenceDocument = useMemo(() => {
		return watchedWeapon?.documentId ? true : false
	}, [watchedWeapon?.documentId])

	const referenceDocumentExists = useMemo(() => {
		return watchedWeapon?.documentId
			? state.documents.byId.hasOwnProperty(watchedWeapon.documentId)
			: false
	}, [state.documents.byId, watchedWeapon?.documentId])

	const handleOpenWeapon = () => {
		if (watchedWeapon?.documentId) {
			messageToApp({
				message: 'open document',
				data: { documentId: watchedWeapon.documentId },
			})
		}
	}

	return (
		<td>
			{isReferenceDocument && referenceDocumentExists && (
				<Button
					onClick={handleOpenWeapon}
					className='self-end p-1.5'
					aria-label='Open weapon sheet'
				>
					<WindowIcon className='h-4 w-4' title='Open weapon sheet' />
				</Button>
			)}

			<input type='hidden' {...register(`weapons.${index}.documentId`)} />
		</td>
	)
}

export default WeaponReferenceButton
