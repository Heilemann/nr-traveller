import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'

type FormData = {
	equipment: {
		name: string
		mass: string
	}[]
}

const Equipment: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'equipment',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ name: '', mass: '' }, { shouldFocus: false })
		}
	}, [fields, append])

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
						<th className='w-1/12 text-sm'>KG</th>
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
							<td className='text-right'>
								<RemoveRowButton onClick={() => remove(index)} />
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
