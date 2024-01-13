import React, { useContext } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import VInput from '../BaseComponents/Form/VInput'
import TextArea from '../BaseComponents/Form/Textarea'
import Label from '../BaseComponents/Form/Label'
import Asset from '../BaseComponents/Asset'
import context from '../BaseComponents/context'

type FormData = {
	item: string // item
	protection: string // protection
	TL: string // tech level
	Rad: string // radiation
	KG: string // weight
	cost: string // cost
	skill: string // skill
	description: string // description
}

const Armour: React.FC = () => {
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
			<VInput label='Protection' {...register('protection')} />
			<VInput label='TL' {...register('TL')} />
			<VInput label='Rad' {...register('Rad')} />
			<VInput label='KG' {...register('KG')} />
			<VInput label='Cost' {...register('cost')} />
			<VInput label='Skill' {...register('skill')} />

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

export default Armour
