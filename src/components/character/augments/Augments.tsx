import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'

type FormData = {
	augments: {
		type: string
		TL: string
		improvement: string
	}[]
}

const Augments: React.FC = () => {
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
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
			<table>
				<thead>
					<tr>
						<th className='w-4/12 text-left'>Augment</th>
						<th className='w-1/12'>TL</th>
						<th className='w-7/12 text-left'>Improvement</th>
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
								<Input
									className='w-full'
									{...register(`augments.${index}.type`)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`augments.${index}.TL`)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`augments.${index}.improvement`)}
								/>
							</td>
							<td>
								<RemoveRowButton onClick={() => remove(index)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Augments
