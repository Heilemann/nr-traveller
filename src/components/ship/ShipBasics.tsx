import React from 'react'
import { useFormContext } from 'react-hook-form'
import HInput from '../BaseComponents/Form/HInput'
import HTextArea from '../BaseComponents/Form/HTextArea'

const ShipDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex w-full flex-col space-y-1'>
			<HInput label='Name' {...register('name')} />
			<HInput label='Type' {...register('type')} />
			<HTextArea label='Description' {...register('description')} />
		</div>
	)
}

export default ShipDetails
