import { Input } from 'nrsystemtools'
import React, { useContext, useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import TextArea from '../../BaseComponents/Form/Textarea'
import Heading from '../../BaseComponents/Heading'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'
import context from '../../BaseComponents/context'
import { isEqual, omit } from 'lodash'

type FormData = {
	careers: {
		career: string
		terms: string
		rank: string
		event: string
	}[]
}

const emptyCareer = {
	career: '',
	terms: '',
	rank: '',
	event: '',
}

const Careers: React.FC = () => {
	const { state } = useContext(context)
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'careers',
	})

	const careers = useWatch({
		name: 'careers',
		defaultValue: state.document.values.careers || [],
	})

	useEffect(() => {
		const lastItem = careers[careers.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty = !isEqual(lastItemWithoutId, emptyCareer)

		if (lastRowIsDirty) {
			append(emptyCareer, { shouldFocus: false })
		}
	}, [careers, append])

	return (
		<div>
			<Heading>Careers</Heading>
			<table className='w-full'>
				<thead>
					<tr className='text-left text-gray-500'>
						<th className='pb-2 text-white'>Career</th>
						<th className='text-white'>Terms</th>
						<th className='text-white'>Rank</th>
						<th className='text-white'>
							{/* <PlusButton
								className='hover:text-white'
								onClick={() => append(emptyCareer)}
							/> */}
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<>
							<tr key={field.id}>
								<td>
									<Input
										className='w-full placeholder:text-gray-500'
										placeholder='Career'
										autoComplete='off'
										{...register(`careers.${index}.career` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full placeholder:text-gray-500'
										placeholder='Terms'
										autoComplete='off'
										{...register(`careers.${index}.terms` as const)}
									/>
								</td>
								<td>
									<Input
										className='w-full placeholder:text-gray-500'
										placeholder='Rank'
										autoComplete='off'
										{...register(`careers.${index}.rank` as const)}
									/>
								</td>
								<td className='w-8'>
									<RemoveRowButton onClick={() => remove(index)} />
								</td>
							</tr>
							<tr>
								<td className='pb-4 ' colSpan={3}>
									<TextArea
										placeholder='Notes, events, etc...'
										className='my-0 w-full'
										{...register(`careers.${index}.event` as const)}
									/>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Careers
