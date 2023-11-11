import { NumberInput } from 'nrsystemtools'
import { useFormContext, useWatch } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Specialty from './Speciality'
import { useEffect, useState } from 'react'

export interface ISkillProps {
	name: string
	specialities: boolean
}

export default function Skill({ name, specialities }: ISkillProps) {
	const { register } = useFormContext()

	const rating = useWatch({
		name: `skills.${name}.rating`,
		defaultValue: null,
	})

	const [specialties, setSpecialties] = useState<null[]>([])

	useEffect(() => {
		setSpecialties(Array(parseInt(rating)).fill(null))
	}, [rating])

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
						rating === 0 && 'text-gray-500',
					)}
				>
					{name}
				</span>
				<div className='flex space-x-0.5'>
					<NumberInput
						className='w-12 py-0.5 text-center'
						title='Rating points'
						placeholder='0'
						centerValue={true}
						min={0}
						{...register(`skills.${name}.rating`, {
							min: 0,
							valueAsNumber: true,
						})}
					/>
				</div>
			</div>

			<div className='flex space-x-1'>
				{specialities &&
					specialties.map((_, index) => (
						<Specialty key={index} index={index} skillName={name} />
					))}
			</div>
		</div>
	)

	return SkillContent
}
