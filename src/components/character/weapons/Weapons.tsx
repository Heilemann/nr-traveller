import { isEqual, omit } from 'lodash'
import { Input } from 'nrsystemtools'
import React, { useContext, useEffect, useState } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { TWeapon, TWeaponOnCharacter } from '../../../interfaces'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'
import context from '../../BaseComponents/context'
import WeaponReferenceButton from './WeaponReferenceButton'

type FormData = {
	weapons: TWeaponOnCharacter[]
}

const emptyWeapon: TWeaponOnCharacter = {
	documentId: '',
	name: '',
	TL: '',
	range: '',
	damage: '',
	KG: '',
	magazine: '',
	// magazineCost: '',
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

	const weapons = useWatch({
		name: 'weapons',
		defaultValue: state.document.values.weapons || [],
	})

	useEffect(() => {
		const lastItem = weapons[weapons.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty = !isEqual(lastItemWithoutId, emptyWeapon)

		console.log('weapons update', {
			emptyWeapon,
			lastItemWithoutId,
			lastRowIsDirty,
		})

		if (lastRowIsDirty) {
			append(emptyWeapon, { shouldFocus: false })
		}
	}, [weapons, append])

	return (
		<div>
			<div
				onDrop={handleDrop}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				className={dragIsOver ? 'bg-white/10' : ''}
			>
				<table>
					<thead>
						<tr>
							<th className='w-4-/12 text-left text-xs'>Weapon</th>
							<th className='w-1/12 text-xs'>TL</th>
							<th className='w-1/12 text-xs'>
								<span className='block md:hidden'>Rng</span>
								<span className='hidden md:block'>Range</span>
							</th>
							<th className='w-1/12 text-xs'>
								<span className='block md:hidden'>Dmg</span>
								<span className='hidden md:block'>Damage</span>
							</th>
							<th className='w-1/12 text-xs'>KG</th>
							<th className='w-1/12 text-xs'>
								<span className='block lg:hidden'>Mag</span>
								<span className='hidden lg:block'>Magazine</span>
							</th>
							{/* <th className='w-1/12 text-xs'>Mag Cost</th> */}
							<th className='w-2/12 text-left text-xs'>Traits</th>
							<th className='w-0.5/12'></th>
							<th className='w-0.5/12 text-xs'>Carry</th>
							<th className='w-8'>
								{/* <PlusButton onClick={() => append(emptyWeapon)} /> */}
							</th>
						</tr>
					</thead>
					<tbody>
						{fields.map((field, index) => {
							let referencedValues: any = {}
							if (field?.documentId) {
								referencedValues =
									state.documents.byId[field.documentId]?.values || {}
							}

							return (
								<tr key={field?.id}>
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.name || ''}
											{...register(`weapons.${index}.name` as const)}
										/>
									</td>
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.TL || ''}
											{...register(`weapons.${index}.TL` as const)}
										/>
									</td>
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.range || ''}
											{...register(`weapons.${index}.range` as const)}
										/>
									</td>
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.damage || ''}
											{...register(`weapons.${index}.damage` as const)}
										/>
									</td>
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.KG || ''}
											{...register(`weapons.${index}.KG` as const)}
										/>
									</td>
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.magazine || ''}
											{...register(`weapons.${index}.magazine` as const)}
										/>
									</td>
									{/* <td>
										<Input
											className='w-full'
											placeholder={referencedValues.magazineCost || ''}
											{...register(`weapons.${index}.magazineCost` as const)}
										/>
									</td> */}
									<td>
										<Input
											className='w-full'
											placeholder={referencedValues.traits || ''}
											{...register(`weapons.${index}.traits` as const)}
										/>
									</td>
									<WeaponReferenceButton index={index} />
									<td className='text-center'>
										<input
											type='checkbox'
											{...register(`weapons.${index}.worn` as const)}
										/>
									</td>
									<td className='text-right'>
										{index !== fields.length - 1 && (
											<RemoveRowButton onClick={() => remove(index)} />
										)}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Weapons
