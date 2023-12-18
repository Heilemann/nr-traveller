import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Input } from 'nrsystemtools'
import Label from './Label'
import context from '../context'

interface IVInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const VInput = React.forwardRef<HTMLInputElement, IVInputProps>(
	({ children, className, label, ...rest }: IVInputProps, ref) => {
		const { state } = React.useContext(context)
		const { editMode } = state

		return (
			<div className={twMerge('mb-1 flex flex-1 flex-col', className)}>
				<Label
					className='font-semibold uppercase text-gray-500'
					style={{
						fontSize: '0.65rem',
					}}
					htmlFor={rest.name}
				>
					{label}
				</Label>
				<div className='flex items-center'>
					<Input
						ref={ref}
						className={twMerge(
							'w-full flex-1 bg-transparent',
							editMode === 'edit' ? 'hover:bg-gray-800' : 'px-0',
						)}
						placeholder='—'
						id={rest.name}
						disabled={editMode === 'view'}
						{...rest}
					/>
					{children}
				</div>
			</div>
		)
	},
)

export default VInput
