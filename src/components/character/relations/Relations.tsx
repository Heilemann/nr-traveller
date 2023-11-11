import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'

type Relation = {
	name: string
	notes: string
}

type FormData = {
	[key: string]: Relation[]
}

type RelationsProps = {
	title: string
	name: string
}

const Relations: React.FC<RelationsProps> = ({ title, name }) => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
		control,
		name,
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ name: '', notes: '' })
		}
	}, [fields, append])

	return (
		<div>
			<h2>{title}</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((item, index) => (
						<tr key={item.id}>
							<td>
								<Input {...register(`${name}.${index}.name`)} />
							</td>
							<td>
								<Input {...register(`${name}.${index}.notes`)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<PlusButton onClick={() => append({ name: '', notes: '' })} />
		</div>
	)
}

export default Relations
