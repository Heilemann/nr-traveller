import { useFormContext, useWatch } from 'react-hook-form'
import Dropdown from '../../BaseComponents/Form/Dropdown'
import RollButton from '../../BaseComponents/RollButton'
import useMessageToApp from '../../BaseComponents/hooks/UseMessageToApp'

type Props = {
	index: number
	skillName: string
	specialties: string[]
}

const Specialty = ({ index, skillName, specialties }: Props) => {
	const { register } = useFormContext()
	const messageToApp = useMessageToApp()

	const specialityName = useWatch({
		name: `skills.${skillName}.specialty${index}`,
		defaultValue: null,
	})

	const handleRoll = () => {
		const DM = `+${index + 1}`

		messageToApp({
			message: 'send message',
			data: {
				message: `/roll 2d6${DM} for ${specialityName} (${skillName} specialty)`,
			},
		})
	}

	return (
		<div className='flex items-center space-x-4'>
			<Dropdown
				className='mt-1 py-1.5 text-sm'
				{...register(`skills.${skillName}.specialty${index}`)}
				// placeholder={`Specialty ${index + 1}`}
			>
				<option value=''>Unselected</option>
				{specialties.map(specialty => (
					<option key={specialty} value={specialty}>
						{specialty}
					</option>
				))}
			</Dropdown>

			<RollButton onClick={handleRoll} />
		</div>
	)
}

export default Specialty
