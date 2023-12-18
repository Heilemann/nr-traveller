import { PlayIcon } from '@heroicons/react/24/solid'

type Props = {
	onClick?: () => void
	className?: string
}

const RollButton = ({ onClick, className }: Props) => {
	return (
		<button onClick={onClick} className={className}>
			<PlayIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
		</button>
	)
}

export default RollButton
