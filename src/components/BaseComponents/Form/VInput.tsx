import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import Input from './Input'
import Label from './Label'
import context from '../context'

interface IVInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const VInput = React.forwardRef<HTMLInputElement, IVInputProps>(
	({ className, label, ...rest }: IVInputProps, ref) => {
		const { state } = React.useContext(context)
		const { editMode } = state

		return (
			<div
				className={twMerge(
					'mb-1 flex flex-1 flex-col border-b border-gray-200 px-1 dark:border-gray-800',
					className,
				)}
				style={{
					fontFamily: 'CovingtonCondensed',
				}}
			>
				<Label className='-mb-2 text-center text-gray-500' htmlFor={rest.name}>
					{label}
				</Label>
				<Input
					ref={ref}
					className={twMerge(
						'flex-1 bg-transparent text-center dark:bg-transparent',
						editMode === 'edit'
							? 'hover:bg-gray-200 dark:hover:bg-gray-800'
							: '',
					)}
					id={rest.name}
					{...rest}
				/>
			</div>
		)
	},
)

export default VInput