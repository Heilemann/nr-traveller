import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { twMerge } from 'tailwind-merge'
import { borderStyle } from '../../styles/borderStyle'
import Label from './Label'

interface ITextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
}

const HTextArea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
	({ className, label, ...rest }, ref) => {
		return (
			<div
				className={twMerge(
					'flex flex-1 space-x-4 pb-1 text-xl',
					borderStyle,
					className,
				)}
			>
				<Label
					className='mt-2 w-2/5 whitespace-nowrap text-gray-500 '
					htmlFor={rest.name}
				>
					{label}
				</Label>

				{/* @ts-ignore */}
				<TextareaAutosize
					ref={ref}
					className='leading-16 block w-3/5 rounded-lg border-0 bg-gray-800 bg-transparent bg-opacity-50 px-2 py-2  text-xl text-white placeholder-gray-500 shadow-none transition-all focus:ring-0 sm:text-sm'
					// @ts-ignore - the component is typed wrong; it works fine
					style={{
						fontSize: '1.25rem',
						lineHeight: '1.75rem',
					}}
					{...rest}
				/>
			</div>
		)
	},
)

export default HTextArea
