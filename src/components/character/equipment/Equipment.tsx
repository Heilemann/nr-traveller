import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'
import Heading from '../../BaseComponents/Heading'

type FormData = {
	equipment: {
		name: string
		mass: string
	}[]
}

const Equipment: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
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
			<Heading>Equipment</Heading>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Mass</th>
						<th>
							<PlusButton onClick={() => append({ name: '', mass: '' })} />
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
						</tr>
					))}
				</tbody>
			</table>
			<div>Total Mass Carried: {totalMass}</div>
		</div>
	)
}

export default Equipment
