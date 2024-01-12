import { Input } from 'nrsystemtools'
import React, { useContext, useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import TextArea from '../../BaseComponents/Form/Textarea'
import Heading from '../../BaseComponents/Heading'
import PlusButton from '../../BaseComponents/PlusButton'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'
import { isEqual, omit } from 'lodash'
import context from '../../BaseComponents/context'

type FormData = {
	wounds: {
		type: string
		location: string
		recoveryPeriod: string
		notes: string
	}[]
}

const emptyWound = {
	type: '',
	location: '',
	recoveryPeriod: '',
	notes: '',
}

const Wounds: React.FC = () => {
	const { state } = useContext(context)
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'wounds',
	})

	const wounds = useWatch({
		name: 'wounds',
		defaultValue: state.document.values.wounds || [],
	})

	useEffect(() => {
		const lastItem = wounds[wounds.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty = !isEqual(lastItemWithoutId, emptyWound)

		if (lastRowIsDirty) {
			append(emptyWound, { shouldFocus: false })
		}
	}, [wounds, append])

	useEffect(() => {
		if (fields.length === 0) {
			append(emptyWound, { shouldFocus: false })
		}
	}, [fields, append])

	return (
		<div>
			<Heading>Wounds</Heading>
			<table>
				<thead>
					<tr className='text-left text-gray-500'>
						<th>Type</th>
						<th>Location</th>
						<th>Recovery Period</th>
						<th>Notes</th>
						<th>
							{/* <PlusButton
								className='hover:text-white'
								onClick={() => append(emptyWound)}
							/> */}
						</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<tr key={field.id}>
							<td className='align-top'>
								<Input {...register(`wounds.${index}.type`)} />
							</td>
							<td className='align-top'>
								<Input {...register(`wounds.${index}.location`)} />
							</td>
							<td className='align-top'>
								<Input {...register(`wounds.${index}.recoveryPeriod`)} />
							</td>
							<td className='align-top'>
								<TextArea
									className='mt-0'
									{...register(`wounds.${index}.notes`)}
								/>
							</td>
							<td>
								{index !== wounds.length - 1 && (
									<RemoveRowButton onClick={() => remove(index)} />
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Wounds
