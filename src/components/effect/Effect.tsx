import { Input } from 'nrsystemtools'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Label from '../BaseComponents/Form/Label'

const Effect: React.FC = () => {
	const { register } = useFormContext()

	// const name = useWatch({
	// 	name: 'name',
	// 	defaultValue: values?.text || '',
	// })

	// const defaultRoundsRemaining = useWatch({
	// 	name: 'defaultRoundsRemaining',
	// 	defaultValue: values?.defaultRoundsRemaining || '',
	// })

	return (
		<div className='space-y-2'>
			<div className='flex space-x-2'>
				<div className='w-10/12'>
					<Label>Name</Label>
					<Input
						className={twMerge('flex-0 w-full')}
						placeholder='Name...'
						{...register('name')}
					/>
				</div>
				<div className='flex w-2/12 flex-col'>
					<Label>Rounds</Label>
					<Input
						className={twMerge('flex-0 w-full text-center')}
						placeholder='Rounds...'
						{...register('roundsRemaining')}
					/>
				</div>
			</div>
			<div>
				<Label>Description</Label>
				<Input
					className={twMerge('flex-0 w-full')}
					placeholder='Description...'
					{...register('description')}
				/>
			</div>
			<p className='text-center text-gray-500'>
				Leave rounds empty for persistent effects.
			</p>
		</div>
	)
}

export default Effect
