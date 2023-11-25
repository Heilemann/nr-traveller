import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'
import Heading from '../../BaseComponents/Heading'

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
			append({ type: '', TL: '', improvement: '' }, { shouldFocus: false })
		}
	}, [fields, append])

	return (
		<div>
			<Heading>Augments</Heading>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>TL</th>
						<th>Improvement</th>
						<th>
							<PlusButton
								onClick={() => append({ type: '', TL: '', improvement: '' })}
							/>
						</th>
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
		</div>
	)
}

export default Augments
