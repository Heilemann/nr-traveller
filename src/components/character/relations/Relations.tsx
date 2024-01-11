import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import TextArea from '../../BaseComponents/Form/Textarea'
import Heading from '../../BaseComponents/Heading'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'

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
			<table className='w-full'>
				<thead>
					<tr>
						<th className='text-left'>Name</th>
						<th>
							{/* <PlusButton onClick={() => append({ name: '', notes: '' })} /> */}
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((item, index) => (
						<React.Fragment key={item.id}>
							<tr>
								<td className='align-middle'>
									<Input
										className='w-full'
										{...register(`relations.${name}.${index}.name`)}
									/>
								</td>
								<td className='w-8 text-right align-middle'>
									<RemoveRowButton onClick={() => remove(index)} />
								</td>
							</tr>
							<tr>
								<td>
									<TextArea
										className='mt-0'
										placeholder='Notes'
										{...register(`relations.${name}.${index}.notes`)}
									/>
								</td>
							</tr>
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Relations
