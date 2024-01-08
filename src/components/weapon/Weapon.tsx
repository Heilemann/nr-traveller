import React, { useContext } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import VInput from '../BaseComponents/Form/VInput'
import TextArea from '../BaseComponents/Form/Textarea'
import Label from '../BaseComponents/Form/Label'
import Asset from '../BaseComponents/Asset'
import RollButton from '../BaseComponents/RollButton'
import useMessageToApp from '../BaseComponents/hooks/UseMessageToApp'
import context from '../BaseComponents/context'

type FormData = {
	name: string // name
	TL: string // tech level
	range: string // range
	damage: string // damage
	KG: string // weight
	cost: string // cost
	magazine: string // magazine capacity
	magazineCost: string // magazine cost
	traits: string // weapon traits
	description: string // weapon description
}

const Weapon: React.FC = () => {
	const { state } = useContext(context)
	const { editMode } = state
	const { register } = useFormContext<FormData>()
	const messageToApp = useMessageToApp()

	const name = useWatch({
		name: 'name',
		defaultValue: state.document.values.name,
	})
	const damage = useWatch({
		name: 'damage',
		defaultValue: state.document.values.damage,
	})
	const traits = useWatch({
		name: 'traits',
		defaultValue: state.document.values.traits,
	})
	const description = useWatch({
		name: 'description',
		defaultValue: state.document.values.description,
	})

	const handleRoll = (notation: string) => {
		// Check if the notation ends with 'd' or 'D' followed by a plus sign and a number
		if (/d\+[0-9]+$/i.test(notation)) {
			// If it does, insert '6' after 'd' or 'D'
			notation = notation.replace(/d\+/i, 'd6+')
		} else if (/d$/i.test(notation)) {
			// If the notation ends with 'd' or 'D', append '6' to it
			notation += '6'
		}

		messageToApp({
			message: 'send message',
			data: {
				message: `/roll ${notation}`,
			},
		})
	}

	return (
		<div>
			<Asset
				name='portrait'
				addLabel='Add Image'
				style={{ maxHeight: '200px' }}
				className='mb-2'
			/>

			<VInput label='Weapon' {...register('name')} />
			<div className='flex space-x-1'>
				<VInput
					className='w-3/12 flex-initial'
					label='Range'
					{...register('range')}
				/>
				<VInput
					className='w-3/12 flex-initial'
					hide={editMode === 'view'}
					label='Damage'
					{...register('damage')}
				/>
				{editMode === 'view' && (
					<div className='w-3/12 flex-initial'>
						<Label
							className='font-semibold uppercase text-gray-500'
							style={{
								fontSize: '0.65rem',
							}}
						>
							Damage
						</Label>
						<div className='flex h-7 items-center space-x-1'>
							<div className='text-gray-500'>{damage}</div>
							<RollButton
								onClick={() => {
									handleRoll(damage)
								}}
							/>
						</div>
					</div>
				)}
				<VInput label='TL' {...register('TL')} />
				<VInput label='KG' {...register('KG')} />
				<VInput label='Mag.' {...register('magazine')} />
			</div>
			{editMode === 'view' && traits && (
				<VInput label='Traits' {...register('traits')} />
			)}
			<div className='flex space-x-1'>
				<VInput label='Cost' {...register('cost')} />
				<VInput label='Mag. Cost' {...register('magazineCost')} />
			</div>

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

export default Weapon
