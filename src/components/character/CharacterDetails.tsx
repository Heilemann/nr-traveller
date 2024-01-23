import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'
import Traits from './Traits'
import HTextArea from '../BaseComponents/Form/HTextArea'

const CharacterDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex w-full flex-col space-y-1'>
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
			<HTextArea
				label='Belief'
				className='bg-gray-800 text-xs'
				style={{
					fontSize: '14px',
				}}
				{...register('beliefs')}
			/>
		</div>
	)
}

export default CharacterDetails
