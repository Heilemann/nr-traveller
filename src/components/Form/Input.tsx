import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={twMerge(
					'w-full rounded-lg bg-white p-2 disabled:text-gray-500 dark:bg-gray-800/50 dark:disabled:text-gray-400',
					className,
				)}
				{...rest}
			/>
		)
	},
)

export default Input