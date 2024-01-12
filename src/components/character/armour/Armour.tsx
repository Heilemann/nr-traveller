import { isEqual, omit } from 'lodash'
import { Input } from 'nrsystemtools'
import React, { useContext, useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'
import context from '../../BaseComponents/context'

type Armours = {
	armour: {
		type: string
		rad: string
		protection: string
		kg: string
		notes: string
		worn: boolean
	}[]
}

const emptyArmour = {
	type: '',
	rad: '',
	protection: '',
	kg: '',
	notes: '',
	worn: false,
}

const Armour: React.FC = () => {
	const { state } = useContext(context)
	const { register, control } = useFormContext<Armours>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'armour',
	})

	const armour = useWatch({
		name: 'armour',
		defaultValue: state.document.values.armour || [],
	})

	useEffect(() => {
		if (fields.length === 0) {
			append(emptyArmour, { shouldFocus: false })
		}
	}, [fields, append])

	useEffect(() => {
		const lastItem = armour[armour.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty = !isEqual(lastItemWithoutId, emptyArmour)

		if (lastRowIsDirty) {
			append(emptyArmour, { shouldFocus: false })
		}
	}, [armour, append])

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th className='w-3/12 text-left text-xs'>Armour</th>
						<th className='w-1/12 text-xs'>Protection</th>
						<th className='w-1/12 text-xs'>Rad</th>
						<th className='w-1/12 text-xs'>KG</th>
						<th className='w-5/12 text-left text-xs'>Notes</th>
						<th className='w-1/12 text-xs'>Wear</th>
						<th className='w-1/12'>
							{/* <PlusButton onClick={() => append(emptyArmour)} /> */}
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<tr key={field.id}>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.type` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full text-center'
									{...register(`armour.${index}.protection` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full text-center'
									{...register(`armour.${index}.rad` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full text-center'
									{...register(`armour.${index}.kg` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.notes` as const)}
								/>
							</td>
							<td className='text-center'>
								<input
									type='checkbox'
									{...register(`armour.${index}.worn` as const)}
								/>
							</td>
							<td className='w-8 text-right'>
								{index !== fields.length - 1 && (
									<RemoveRowButton onClick={() => remove(index)} />
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Armour
