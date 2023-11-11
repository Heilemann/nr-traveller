import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'

type FormData = {
	weapon: string
	TL: string
	range: string
	damage: string
	KG: string
	cost: string
	magazine: string
	magazineCost: string
	traits: string
}

const Weapon: React.FC = () => {
	const { register } = useFormContext<FormData>()

	return (
		<div>
			<HInput label='Weapon' {...register('weapon')} />
			<HInput label='TL' {...register('TL')} />
			<HInput label='Range' {...register('range')} />
			<HInput label='Damage' {...register('damage')} />
			<HInput label='KG' {...register('KG')} />
			<HInput label='Cost' {...register('cost')} />
			<HInput label='Magazine' {...register('magazine')} />
			<HInput label='Magazine Cost' {...register('magazineCost')} />
			<HInput label='Traits' {...register('traits')} />
		</div>
	)
}

export default Weapon
