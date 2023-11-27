import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { Input } from 'nrsystemtools'
import React, { useContext, useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TWeapon, TWeaponOnCharacter } from '../../../interfaces'
import PlusButton from '../../BaseComponents/PlusButton'
import context from '../../BaseComponents/context'

type FormData = {
	weapons: TWeapon[]
}

const emptyWeapon: TWeapon = {
	name: '',
	TL: '',
	range: '',
	damage: '',
	kg: '',
	magazine: '',
	magazineCost: '',
	traits: '',
	worn: false,
}

const Weapons: React.FC = () => {
	const { state } = useContext(context)
	const { documents } = state
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'weapons',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ ...emptyWeapon }, { shouldFocus: false })
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
			{/* <Heading>Weapons</Heading> */}
			<div
				onDrop={handleDrop}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				className={dragIsOver ? 'bg-white/10' : ''}
			>
				<table>
					<thead>
						<tr>
							<th className='w-3-/12 text-left text-xs'>Weapon</th>
							<th className='w-1/12 text-xs'>TL</th>
							<th className='w-1/12 text-xs'>Range</th>
							<th className='w-1/12 text-xs'>Damage</th>
							<th className='w-1/12 text-xs'>KG</th>
							<th className='w-1/12 text-xs'>Magazine</th>
							<th className='w-1/12 text-xs'>Mag Cost</th>
							<th className='w-3/12 text-left text-xs'>Traits</th>
							<th className='w-0.5/12'>Worn</th>
							<th>
								<PlusButton onClick={() => append(emptyWeapon)} />
							</th>
						</tr>
					</thead>
					<tbody>
						{fields.map((field, index) => (
							<tr key={field.id}>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.name` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.TL` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.range` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.damage` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.kg` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.magazine` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.magazineCost` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full'
										{...register(`weapons.${index}.traits` as const)}
									/>
								</td>
								<td className='text-center'>
									<input
										type='checkbox'
										{...register(`weapons.${index}.worn` as const)}
									/>
								</td>
								<td>
									<button onClick={() => remove(index)}>
										<MinusCircleIcon className='h-6 w-6 text-red-500 hover:text-red-700' />
									</button>
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
