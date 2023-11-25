import React from 'react'
import { useFormContext } from 'react-hook-form'
import TextArea from '../BaseComponents/Form/Textarea'
import Heading from '../BaseComponents/Heading'

type FormData = {
	backgroundNotes: string
}

const BackgroundNotes: React.FC = () => {
	const { register } = useFormContext<FormData>()

	return (
		<div>
			<Heading>Background Notes</Heading>
			<TextArea {...register('backgroundNotes')} />
		</div>
	)
}

export default BackgroundNotes
