import { Input } from 'nrsystemtools'
import React, { useContext, useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import context from '../../BaseComponents/context'
import { TWeapon, TWeaponOnCharacter } from '../../../interfaces'
import PlusButton from '../../BaseComponents/PlusButton'

type FormData = {
	weapons: TWeapon[]
}

const Weapons: React.FC = () => {
	const { state } = useContext(context)
	const { documents } = state
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
		control,
		name: 'weapons',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append(
				{
					name: '',
					TL: '',
					range: '',
					damage: '',
					kg: '',
					magazine: '',
				},
				{ shouldFocus: false },
			)
		}
	}, [fields, append])

	const handleDrop = (e: React.DragEvent) => {
		// @ts-ignore
		const droppedDocumentId = e.dataTransfer.getData('documentId').documentId
		const droppedDoc = documents.byId[droppedDocumentId]
		if (!droppedDoc)
			throw new Error(
				`Could not find dropped document. ID: ${droppedDocumentId}`,
			)

		const type: string = droppedDoc.type

		if (type !== 'weapon') return

		const droppedWeapon = droppedDoc.values as TWeapon

		append(
			{
				...droppedWeapon,
				documentId: droppedDoc._id,
			} as TWeaponOnCharacter,
			{ shouldFocus: false },
		)

		setDragIsOver(false)
	}

	const [dragIsOver, setDragIsOver] = useState(false)

	const handleDragEnter = (e: React.DragEvent) => {
		setDragIsOver(true)
		e.preventDefault()
	}

	const handleDragLeave = (e: React.DragEvent) => {
		setDragIsOver(false)
		e.preventDefault()
	}

	return (
		<div>
			<h2>Weapons</h2>
			<div
				onDrop={handleDrop}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				className={dragIsOver ? 'bg-white/10' : ''}
			>
				<table>
					<thead>
						<tr>
							<th>Weapon</th>
							<th>TL</th>
							<th>Range</th>
							<th>Damage</th>
							<th>KG</th>
							<th>Magazine</th>
							<th>
								<PlusButton
									onClick={() =>
										append({
											name: '',
											TL: '',
											range: '',
											damage: '',
											kg: '',
											magazine: '',
										})
									}
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{fields.map((field, index) => (
							<tr key={field.id}>
								<td>
									<Input {...register(`weapons.${index}.name` as const)} />
								</td>
								<td>
									<Input {...register(`weapons.${index}.TL` as const)} />
								</td>
								<td>
									<Input {...register(`weapons.${index}.range` as const)} />
								</td>
								<td>
									<Input {...register(`weapons.${index}.damage` as const)} />
								</td>
								<td>
									<Input {...register(`weapons.${index}.kg` as const)} />
								</td>
								<td>
									<Input {...register(`weapons.${index}.magazine` as const)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Weapons
