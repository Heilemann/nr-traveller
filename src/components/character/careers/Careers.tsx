import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'

type FormData = {
	careers: {
		career: string
		terms: string
		rank: string
	}[]
}

const Careers: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
		control,
		name: 'careers',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ career: '', terms: '', rank: '' }, { shouldFocus: false })
		}
	}, [fields, append])
	return (
		<div>
			<h2>Careers</h2>
			<table>
				<thead>
					<tr>
						<th>Career</th>
						<th>Terms</th>
						<th>Rank</th>
						<th>
							<PlusButton
								onClick={() => append({ career: '', terms: '', rank: '' })}
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<tr key={field.id}>
							<td>
								<Input {...register(`careers.${index}.career` as const)} />
							</td>
							<td>
								<Input {...register(`careers.${index}.terms` as const)} />
							</td>
							<td>
								<Input {...register(`careers.${index}.rank` as const)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Careers
