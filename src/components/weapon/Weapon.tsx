import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'

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
}

const Weapon: React.FC = () => {
	const { register } = useFormContext<FormData>()

	return (
		<div>
			<HInput label='Weapon' {...register('name')} />
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
