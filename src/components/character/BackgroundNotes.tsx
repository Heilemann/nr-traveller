import React from 'react'
import { useFormContext } from 'react-hook-form'
import TextArea from '../BaseComponents/Form/Textarea'

type FormData = {
	backgroundNotes: string
}

const BackgroundNotes: React.FC = () => {
	const { register } = useFormContext<FormData>()

	return (
		<div>
			<h2>Background Notes</h2>
			<TextArea {...register('backgroundNotes')} />
		</div>
	)
}

export default BackgroundNotes
