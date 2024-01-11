import { Input } from 'nrsystemtools'
import React, { useContext, useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import RemoveRowButton from '../../BaseComponents/RemoveRowButton'
import { omit } from 'lodash'
import context from '../../BaseComponents/context'

type FormData = {
	augments: {
		type: string
		TL: string
		improvement: string
	}[]
}

const emptyAugment = {
	type: '',
	TL: '',
	improvement: '',
}

const Augments: React.FC = () => {
	const { state } = useContext(context)
	const { register, control } = useFormContext<FormData>()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'augments',
	})

	useEffect(() => {
		if (fields.length === 0) {
			append(emptyAugment, { shouldFocus: false })
		}
	}, [fields, append])

	const augments = useWatch({
		name: 'augments',
		defaultValue: state.document.values.augments || [],
	})

	useEffect(() => {
		const lastItem = augments[augments.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty =
			JSON.stringify(lastItemWithoutId) !== JSON.stringify(emptyAugment)

		if (lastRowIsDirty) {
			append(emptyAugment, { shouldFocus: false })
		}
	}, [augments, append])

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th className='w-4/12 text-left'>Augment</th>
						<th className='w-1/12'>TL</th>
						<th className='w-7/12 text-left'>Improvement</th>
						<th>{/* <PlusButton onClick={() => append(emptyAugment)} /> */}</th>
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
