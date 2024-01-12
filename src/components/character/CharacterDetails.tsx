import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'
import Traits from './Traits'

const CharacterDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex w-2/3 flex-col space-y-1'>
			<div className='flex space-x-4'>
				<HInput
					className='flex-1 text-sm'
					inputClassName='text-left'
					label='Name'
					{...register('name')}
				/>
				<HInput
					className='flex-1 text-sm'
					inputClassName='text-left'
					label='Age'
					autoComplete='off'
					{...register('age')}
				/>
			</div>
			<div className='flex space-x-4'>
				<HInput
					className='flex-1 text-sm'
					inputClassName='text-left'
					label='Species'
					{...register('species')}
				/>
				<HInput
					className='flex-1 text-sm'
					inputClassName='text-left'
					label='Homeworld'
					{...register('homeworld')}
				/>
			</div>
			<Traits />
		</div>
	)
}

export default CharacterDetails
