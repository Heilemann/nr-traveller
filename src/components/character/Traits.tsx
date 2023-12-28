import React from 'react'
import { useFormContext } from 'react-hook-form'
import HTextArea from '../BaseComponents/Form/HTextArea'

const Traits: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div>
			<label>
				<HTextArea label='Traits' {...register('traits')} />
			</label>
		</div>
	)
}

export default Traits
