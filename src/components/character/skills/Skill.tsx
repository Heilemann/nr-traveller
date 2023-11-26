import { useFormContext, useWatch } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Specialty from './Speciality'
import Label from '../../BaseComponents/Form/Label'

export interface ISkillProps {
	name: string
	canHaveSpecialities: boolean
}

export default function Skill({ name, canHaveSpecialities }: ISkillProps) {
	const { register } = useFormContext()

	const rating = useWatch({
		name: `skills.${name}.rating`,
		defaultValue: null,
	})

	const parsedRating = parseInt(rating)
	const specialties = isNaN(parsedRating) ? [] : Array(parsedRating).fill(null)

	const SkillContent = (
		<div
			className={twMerge(
				'border-b border-gray-800 py-1 text-base',
				'cursor-pointer text-gray-300 hover:bg-gray-800',
			)}
		>
			<div className='flex space-x-2'>
				<Label
					className={twMerge('flex-1 self-center', !rating && 'text-gray-500')}
				>
					{name}
				</Label>
				<div className='flex space-x-0.5'>
					<input
						className='w-12 rounded-md border border-gray-800 bg-gray-800 text-center text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800'
						defaultValue=''
						{...register(`skills.${name}.rating`)}
					/>
				</div>
			</div>

			<div className='flex flex-col'>
				{canHaveSpecialities &&
					specialties
						.slice(0, rating)
						.map((_, index) => (
							<Specialty key={index} index={index} skillName={name} />
						))}
			</div>
		</div>
	)

	return SkillContent
}
