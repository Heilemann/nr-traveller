import { Input } from 'nrsystemtools'
import React, { useContext } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import RichTextEditor from '../BaseComponents/Form/RTE/RichTextEditor'
import context from '../BaseComponents/context'

const Note: React.FC = () => {
	const { state } = useContext(context)
	const { document, editMode } = state
	const { values } = document
	const { register } = useFormContext()

	const text = useWatch({
		name: 'text',
		defaultValue: values?.text || '',
	})

	return (
		<div>
			{/* {editMode === 'view' && values?.name && (
				<h1
					className='text-xl font-bold'
					style={{
						padding: '20px 20px 0',
					}}
				>
					{values?.name}
				</h1>
			)} */}
			<Input
				className={twMerge(
					'flex-0 w-full text-lg',
					editMode === 'view' && 'hidden',
				)}
				placeholder='Name...'
				{...register('name')}
			/>
			<RichTextEditor
				name='text'
				defaultValue={text}
				className={editMode === 'edit' ? 'mt-3' : ''}
			/>
		</div>
	)
}

export default Note
