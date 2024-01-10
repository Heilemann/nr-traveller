import { MinusCircleIcon } from '@heroicons/react/24/solid'

type RemoveRowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const RemoveRowButton: React.FC<RemoveRowButtonProps> = props => {
	return (
		<button {...props}>
			<MinusCircleIcon className='h-6 w-6' />
		</button>
	)
}

export default RemoveRowButton
