import React from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import VInput from '../BaseComponents/Form/VInput'
import TextArea from '../BaseComponents/Form/Textarea'
import Label from '../BaseComponents/Form/Label'
import Asset from '../BaseComponents/Asset'
import RollButton from '../BaseComponents/RollButton'
import useMessageToApp from '../BaseComponents/hooks/UseMessageToApp'

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
	const { register } = useFormContext<FormData>()
	const messageToApp = useMessageToApp()

	const name = useWatch({
		name: 'name',
	})
	const damage = useWatch({
		name: 'damage',
	})

	const handleRoll = (notation: string) => {
		messageToApp({
			message: 'send message',
			data: {
				message: `/roll ${notation} for ${name}`,
			},
		})
	}

	return (
		<div>
			<Asset name='token' addLabel='Add Image' />

			<div className='flex space-x-1'>
				<VInput label='Weapon' {...register('name')} />
				<VInput
					className='w-3/12 flex-initial'
					label='Range'
					{...register('range')}
				/>
				<VInput
					className='w-3/12 flex-initial'
					label='Damage'
					{...register('damage')}
				>
					<RollButton
						onClick={() => {
							handleRoll(damage)
						}}
					/>
				</VInput>
			</div>
			<div className='flex space-x-1'>
				<VInput label='TL' {...register('TL')} />
				<VInput label='KG' {...register('KG')} />
				<VInput label='Magazine' {...register('magazine')} />
				<VInput label='Mag. Cost' {...register('magazineCost')} />
				<VInput label='Cost' {...register('cost')} />
			</div>
			<VInput label='Traits' {...register('traits')} />

			<Label
				className='font-semibold uppercase text-gray-500'
				style={{
					fontSize: '0.65rem',
				}}
			>
				Description
			</Label>
			<TextArea {...register('description')} />
		</div>
	)
}

export default Weapon
