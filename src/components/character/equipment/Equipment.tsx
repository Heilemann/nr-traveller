import { Input } from 'nrsystemtools'
import React, { useContext, useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'
import { isEqual, omit } from 'lodash'
import context from '../../BaseComponents/context'

type FormData = {
	equipment: {
		name: string
		mass: string
		carried: boolean
	}[]
}

const emptyEquipment = {
	name: '',
	mass: '',
	carried: false,
}

const Equipment: React.FC = () => {
	const { state } = useContext(context)
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'equipment',
	})

	const equipment = useWatch({
		name: 'equipment',
		defaultValue: state.document.values.equipment || [],
	})

	useEffect(() => {
		const lastItem = equipment[equipment.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty = !isEqual(lastItemWithoutId, emptyEquipment)

		if (lastRowIsDirty) {
			append(emptyEquipment, { shouldFocus: false })
		}
	}, [equipment, append])

	const totalMass = fields
		? fields.reduce((total, item) => total + Number(item.mass), 0)
		: 0

	return (
		<div>
			{/* <Heading>Equipment</Heading> */}
			<table>
				<thead>
					<tr>
						<th className='w-10/12 text-left text-sm'>Equipment</th>
						<th className='w-0.5/12 text-sm'>KG</th>
						<th className='w-0.5/12 text-xs'>Carry</th>
						<th className='w-8 text-sm'>
							{/* <PlusButton onClick={() => append({ name: '', mass: '' })} /> */}
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((item, index) => (
						<tr key={item.id}>
							<td>
								<Input
									className='w-full'
									{...register(`equipment.${index}.name`)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`equipment.${index}.mass`)}
								/>
							</td>
							<td className='text-center'>
								<input
									type='checkbox'
									{...register(`equipment.${index}.carried` as const)}
								/>
							</td>
							<td className='text-right'>
								{index !== equipment.length - 1 && (
									<RemoveRowButton onClick={() => remove(index)} />
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className='text-center text-gray-500'>{totalMass}kg Carried</div>
		</div>
	)
}

export default Equipment
