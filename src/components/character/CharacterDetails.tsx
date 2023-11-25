import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'
import Traits from './Traits'

const CharacterDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex flex-col space-y-1'>
			<HInput label='Name' {...register('name')} />
			<HInput label='Age' {...register('age')} />
			<HInput label='Species' {...register('species')} />
			<HInput label='Homeworld' {...register('homeworld')} />
			<Traits />
		</div>
	)
}

export default CharacterDetails
