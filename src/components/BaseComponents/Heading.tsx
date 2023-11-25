type Props = React.HTMLAttributes<HTMLHeadingElement>

const Heading = ({ children, ...props }: Props) => {
	return (
		<h2
			className='mt-4 border-t border-gray-800 pt-2 text-lg font-bold'
			{...props}
		>
			{children}
		</h2>
	)
}

export default Heading
