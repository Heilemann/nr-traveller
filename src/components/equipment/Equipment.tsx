import React, { useContext } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import VInput from '../BaseComponents/Form/VInput'
import TextArea from '../BaseComponents/Form/Textarea'
import Label from '../BaseComponents/Form/Label'
import Asset from '../BaseComponents/Asset'
import context from '../BaseComponents/context'

type FormData = {
	item: string // item
	TL: string // tech level
	notes: string // notes
	KG: string // weight
	cost: string // cost
	description: string // description
}

const Equipment: React.FC = () => {
	const { state } = useContext(context)
	const { editMode } = state
	const { register } = useFormContext<FormData>()

	const description = useWatch({
		name: 'description',
		defaultValue: state.document.values.description,
	})

	return (
		<div>
			<Asset
				name='portrait'
				addLabel='Add Image'
				mediaStyle={{ maxHeight: '150px' }}
				className='mb-2'
			/>

			<VInput label='Item' {...register('item')} />
			<div className='flex space-x-1'>
				<VInput
					className='w-3/12 flex-initial'
					label='Notes'
					{...register('notes')}
				/>
				<VInput label='TL' {...register('TL')} />
				<VInput label='KG' {...register('KG')} />
			</div>
			<VInput label='Cost' {...register('cost')} />

			<Label
				className='font-semibold uppercase text-gray-500'
				style={{
					fontSize: '0.65rem',
				}}
			>
				Description
			</Label>
			{editMode === 'view' && description && (
				<TextArea {...register('description')} />
			)}
		</div>
	)
}

export default Equipment
