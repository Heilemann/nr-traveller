import { MinusCircleIcon } from '@heroicons/react/24/solid'
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
			{/* <Heading>Augments</Heading> */}
			<table>
				<thead>
					<tr>
						<th className='w-4/12 text-left'>Augment</th>
						<th className='w-1/12'>TL</th>
						<th className='w-7/12'>Improvement</th>
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
								<button onClick={() => remove(index)}>
									<MinusCircleIcon className='h-6 w-6 text-red-500 hover:text-red-700' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Augments
