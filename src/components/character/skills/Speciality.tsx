import { Input } from 'nrsystemtools'
import { useFormContext } from 'react-hook-form'

type Props = {
	index: number
	skillName: string
}

const Specialty = ({ index, skillName }: Props) => {
	const { register } = useFormContext()

	return (
		<Input
			className='ml-12 mt-1'
			{...register(`skills.${skillName}.specialty${index}`)}
			placeholder={`Specialty ${index + 1}`}
		/>
	)
}

export default Specialty
