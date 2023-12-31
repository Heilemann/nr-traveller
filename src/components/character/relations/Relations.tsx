import { Input, RichTextEditor } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PlusButton from '../../BaseComponents/PlusButton'
import Heading from '../../BaseComponents/Heading'
import TextArea from '../../BaseComponents/Form/Textarea'
import { MinusCircleIcon } from '@heroicons/react/24/solid'

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
	const { fields, append, remove } = useFieldArray({
		control,
		name: `relations.${name}`, // Adjust the name here
	})

	useEffect(() => {
		if (fields.length === 0) {
			append({ name: '', notes: '' }, { shouldFocus: false })
		}
	}, [fields, append])

	return (
		<div>
			<Heading>{title}</Heading>
			<table>
				<thead>
					<tr>
						<th className='w-1/3 text-left'>Name</th>
						<th className='w-2/3 text-left'>Notes</th>
						<th>
							<PlusButton onClick={() => append({ name: '', notes: '' })} />
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((item, index) => (
						<tr key={item.id}>
							<td className='align-top'>
								<Input
									className='w-full'
									{...register(`relations.${name}.${index}.name`)}
								/>
							</td>
							<td className='align-top'>
								<TextArea
									className='mt-0'
									{...register(`relations.${name}.${index}.notes`)}
								/>
							</td>
							<td className='align-top'>
								<button onClick={() => remove(index)}>
									<MinusCircleIcon className='h-6 w-6 text-red-500' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Relations
