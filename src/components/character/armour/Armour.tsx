import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'

type FormData = {
	armour: {
		type: string
		rad: string
		protection: string
		kg: string
		options: string
	}[]
}

const Armour: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
		control,
		name: 'armour',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append(
				{ type: '', rad: '', protection: '', kg: '', options: '' },
				{ shouldFocus: false },
			)
		}
	}, [fields, append])

	return (
		<div>
			<h2>Armour</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Rad</th>
						<th>Protection</th>
						<th>KG</th>
						<th>Options</th>
						<th>
							<PlusButton
								onClick={() =>
									append({
										type: '',
										rad: '',
										protection: '',
										kg: '',
										options: '',
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
								<Input {...register(`armour.${index}.type` as const)} />
							</td>
							<td>
								<Input {...register(`armour.${index}.rad` as const)} />
							</td>
							<td>
								<Input {...register(`armour.${index}.protection` as const)} />
							</td>
							<td>
								<Input {...register(`armour.${index}.kg` as const)} />
							</td>
							<td>
								<Input {...register(`armour.${index}.options` as const)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Armour
