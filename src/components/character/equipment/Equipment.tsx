import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'

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
			append({ name: '', mass: '' })
		}
	}, [fields, append])

	const totalMass = fields
		? fields.reduce((total, item) => total + Number(item.mass), 0)
		: 0

	return (
		<div>
			<h2>Equipment</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Mass</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((item, index) => (
						<tr key={item.id}>
							<td>
								<Input {...register(`equipment.${index}.name`)} />
							</td>
							<td>
								<Input {...register(`equipment.${index}.mass`)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<PlusButton onClick={() => append({ name: '', mass: '' })} />
			<div>Total Mass Carried: {totalMass}</div>
		</div>
	)
}

export default Equipment