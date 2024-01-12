import React from 'react'
import { useFormContext } from 'react-hook-form'
import HTextArea from '../BaseComponents/Form/HTextArea'

const Traits: React.FC = () => {
	const { register } = useFormContext()

	return (
		<HTextArea
			label='Traits'
			className='bg-gray-800 text-xs'
			style={{
				fontSize: '14px',
			}}
			{...register('traits')}
		/>
	)
}

export default Traits
