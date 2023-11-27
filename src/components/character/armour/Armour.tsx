import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'

type Armours = {
	armour: {
		type: string
		rad: string
		protection: string
		kg: string
		notes: string
	}[]
}

const emptyArmoor = {
	type: '',
	rad: '',
	protection: '',
	kg: '',
	notes: '',
}

const Armour: React.FC = () => {
	const { register, control } = useFormContext<Armours>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'armour',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append(emptyArmoor, { shouldFocus: false })
		}
	}, [fields, append])

	return (
		<div>
			{/* <Heading>Armour</Heading> */}
			<table>
				<thead>
					<tr>
						<th className='w-3/12 text-left text-xs'>Armour</th>
						<th className='w-1/12 text-xs'>Protection</th>
						<th className='w-1/12 text-xs'>Rad</th>
						<th className='w-1/12 text-xs'>KG</th>
						<th className='w-6/12 text-left text-xs'>Notes</th>
						<th>
							<PlusButton onClick={() => append(emptyArmoor)} />
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<tr key={field.id}>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.type` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.protection` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.rad` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.kg` as const)}
								/>
							</td>
							<td>
								<Input
									className='w-full'
									{...register(`armour.${index}.notes` as const)}
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

export default Armour
