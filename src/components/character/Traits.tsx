import React from 'react'
import { useForm } from 'react-hook-form'
import HTextArea from '../BaseComponents/Form/HTextArea'

type FormData = {
	traits: string
}

const Traits: React.FC = () => {
	const { register } = useForm<FormData>()

	return (
		<div>
			<label>
				<HTextArea label='Traits' {...register('traits')} />
			</label>
		</div>
	)
}

export default Traits
