import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'
import Traits from './Traits'

const CharacterDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex flex-col space-y-1'>
			<HInput className='w-60' label='Name' {...register('name')} />
			<HInput className='w-60' label='Age' {...register('age')} />
			<HInput className='w-60' label='Species' {...register('species')} />
			<HInput className='w-60' label='Homeworld' {...register('homeworld')} />
			<Traits />
		</div>
	)
}

export default CharacterDetails
