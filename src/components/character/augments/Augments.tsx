import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'

type FormData = {
	augments: {
		type: string
		TL: string
		improvement: string
	}[]
}

const Augments: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append } = useFieldArray({
		control,
		name: 'augments',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ type: '', TL: '', improvement: '' })
		}
	}, [fields, append])

	return (
		<div>
			<h2>Augments</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>TL</th>
						<th>Improvement</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((item, index) => (
						<tr key={item.id}>
							<td>
								<Input {...register(`augments.${index}.type`)} />
							</td>
							<td>
								<Input {...register(`augments.${index}.TL`)} />
							</td>
							<td>
								<Input {...register(`augments.${index}.improvement`)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<PlusButton
				onClick={() => append({ type: '', TL: '', improvement: '' })}
			/>
		</div>
	)
}

export default Augments
