import { useFormContext, useWatch } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Label from '../../BaseComponents/Form/Label'
import Specialty from './Speciality'
import RollButton from '../../BaseComponents/RollButton'
import useMessageToApp from '../../BaseComponents/hooks/UseMessageToApp'
import { useContext } from 'react'
import context from '../../BaseComponents/context'

export interface ISkillProps {
	name: string
	specialties: string[]
}

export default function Skill({ name, specialties }: ISkillProps) {
	const { state } = useContext(context)
	const { register } = useFormContext()
	const messageToApp = useMessageToApp()

	const rating = useWatch({
		name: `skills.${name}.rating`,
		defaultValue: state.document.values.skills[name].rating,
	})

	const handleRoll = () => {
		let DM
		if (rating) {
			DM = specialties ? '0' : `+${rating}`
		} else {
			DM = '-3'
		}
		console.log('DM', DM)
		messageToApp({
			message: 'send message',
			data: {
				message: `/roll 2d6${DM} for ${name}`,
			},
		})
	}

	const SkillContent = (
		<div className='cursor-pointer border-b border-gray-800 py-1 text-base text-gray-300 hover:bg-gray-800/20'>
			<div className='flex space-x-4'>
				<Label
					className={twMerge('flex-1 self-center', !rating && 'text-gray-500')}
				>
					{name}
				</Label>
				<input
					className='focus:ring-gray-800` w-12 rounded-md border border-gray-800 bg-gray-800 text-center text-sm text-white focus:border-transparent focus:outline-none focus:ring-2'
					defaultValue=''
					autoComplete='off'
					{...register(`skills.${name}.rating`)}
				/>
				<RollButton onClick={handleRoll} />
			</div>

			<div className='flex flex-col'>
				{specialties.slice(0, rating).map((_, index) => (
					<Specialty
						key={index}
						index={index}
						skillName={name}
						specialties={specialties}
					/>
				))}
			</div>
		</div>
	)

	return SkillContent
}
