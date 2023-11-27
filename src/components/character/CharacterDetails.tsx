import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'
import Traits from './Traits'

const CharacterDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex w-2/3 flex-col space-y-1'>
			<HInput className='text-sm' label='Name' {...register('name')} />
			<HInput className='text-sm' label='Age' {...register('age')} />
			<HInput className='text-sm' label='Species' {...register('species')} />
			<HInput
				className='text-sm'
				label='Homeworld'
				{...register('homeworld')}
			/>
			<Traits />
		</div>
	)
}

export default CharacterDetails
