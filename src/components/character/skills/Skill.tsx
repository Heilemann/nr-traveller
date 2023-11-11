import { NumberInput } from 'nrsystemtools'
import { useFormContext, useWatch } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Specialty from './Speciality'

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
	if (name === 'Art') {
		console.log('rating', rating)
	}

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
				<span
					className={twMerge(
						'flex-1 self-center',
						rating === null && 'text-gray-500',
					)}
				>
					{name}
				</span>
				<div className='flex space-x-0.5'>
					<input
						className='w-12 text-black'
						{...register(`skills.${name}.rating`)}
					/>
					<NumberInput
						className='w-12 py-0.5 text-center'
						title='Rating'
						placeholder='0'
						centerValue={true}
						{...register(`skills.${name}.rating`, {
							valueAsNumber: true,
						})}
					/>
				</div>
			</div>

			<div className='flex flex-col space-x-1'>
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
