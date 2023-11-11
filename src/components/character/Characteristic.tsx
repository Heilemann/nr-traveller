import { Input } from 'nrsystemtools'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

type CharacteristicNames =
	| 'strength'
	| 'dexterity'
	| 'endurance'
	| 'intellect'
	| 'education'
	| 'social'
type DiceModifierNames = `${CharacteristicNames}DiceModifier`

type FormData = {
	[K in CharacteristicNames | DiceModifierNames]: string
}

type CharacteristicProps = {
	label: string
	characteristic: CharacteristicNames
}

const Characteristic: React.FC<CharacteristicProps> = ({
	label,
	characteristic,
}) => {
	const { register, watch, setValue } = useFormContext<FormData>()
	const characteristicScore = watch(characteristic)

	useEffect(() => {
		const diceModifier = getDiceModifier(Number(characteristicScore))
		setValue(
			`${characteristic}DiceModifier` as DiceModifierNames,
			diceModifier.toString(),
		)
	}, [characteristic, characteristicScore, setValue])

	function getDiceModifier(characteristicScore: number): number {
		if (characteristicScore <= 0) {
			return -3
		} else if (characteristicScore <= 2) {
			return -2
		} else if (characteristicScore <= 5) {
			return -1
		} else if (characteristicScore <= 8) {
			return 0
		} else if (characteristicScore <= 11) {
			return 1
		} else if (characteristicScore <= 14) {
			return 2
		} else {
			return 3
		}
	}

	return (
		<div>
			<label className='block text-center'>{label}</label>
			<div className='flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0'>
				<Input
					className='md:max-w-20 w-full'
					type='text'
					{...register(characteristic)}
				/>
				<Input
					className='md:max-w-20 w-full'
					type='text'
					{...register(`${characteristic}DiceModifier` as DiceModifierNames)}
				/>
			</div>
		</div>
	)
}

export default Characteristic
