import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'
import { Input } from 'nrsystemtools'

type FormData = {
	wounds: {
		type: string
		location: string
		recoveryPeriod: string
		notes: string
	}[]
}

const Wounds: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
		control,
		name: 'wounds',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ type: '', location: '', recoveryPeriod: '', notes: '' })
		}
	}, [fields, append])

	return (
		<div>
			<h2>Wounds</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Location</th>
						<th>Recovery Period</th>
						<th>Notes</th>
						<th>
							<PlusButton
								onClick={() =>
									append({
										type: '',
										location: '',
										recoveryPeriod: '',
										notes: '',
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
								<Input {...register(`wounds.${index}.type`)} />
							</td>
							<td>
								<Input {...register(`wounds.${index}.location`)} />
							</td>
							<td>
								<Input {...register(`wounds.${index}.recoveryPeriod`)} />
							</td>
							<td>
								<Input {...register(`wounds.${index}.notes`)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Wounds
