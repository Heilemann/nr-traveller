import { isEqual, omit } from 'lodash'
import { Input } from 'nrsystemtools'
import React, { useContext, useEffect } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import RemoveRowButton from '../BaseComponents/RemoveRowButton'
import context from '../BaseComponents/context'

const emptyItem = {
	name: '',
	tons: '',
	cost: '',
}

interface GenericTableProps {
	title: string
	name: string
}

type Item = {
	name: string
	tons: string
	cost: string
}

type Items = {
	[key: string]: Item[]
}

interface GenericTableProps {
	title: string
	name: string
}

const GenericTable: React.FC<GenericTableProps> = ({ title, name }) => {
	const { state } = useContext(context)
	const { register, control } = useFormContext<Items>()
	const { fields, append, remove } = useFieldArray({
		control,
		name,
	})

	const item = useWatch({
		name,
		defaultValue: state.document.values[name] || [],
	})

	useEffect(() => {
		if (fields.length === 0) {
			append(emptyItem, { shouldFocus: false })
		}
	}, [fields, append])

	useEffect(() => {
		const lastItem = item[item.length - 1]
		const lastItemWithoutId = omit(lastItem, 'id')
		const lastRowIsDirty = !isEqual(lastItemWithoutId, emptyItem)

		if (
			lastRowIsDirty &&
			Object.values(lastItemWithoutId).some(value => value !== '')
		) {
			append(emptyItem, { shouldFocus: false })
		}
	}, [item, append])

	return (
		<div>
			<table className='w-full'>
				<thead>
					<tr>
						<th className='text-left text-xs'>{title}</th>
						<th className='w-28 text-xs'>Tons</th>
						<th className='w-28 text-xs'>Cost (MCr)</th>
						<th className=''></th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<tr key={field.id}>
							<td>
								<Input
									className='w-full'
									{...register(`${name}.${index}.name`)}
									defaultValue={field.name}
								/>
							</td>
							<td>
								<Input
									className='w-full text-center'
									placeholder='—'
									{...register(`${name}.${index}.tons`)}
									defaultValue={field.tons}
								/>
							</td>
							<td>
								<Input
									className='w-full text-center'
									placeholder='—'
									{...register(`${name}.${index}.cost`)}
									defaultValue={field.cost}
								/>
							</td>
							<td className='w-8 text-right'>
								{index !== fields.length - 1 && (
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

export default GenericTable
