import { Input } from 'nrsystemtools'
import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import Label from '../BaseComponents/Form/Label'
import useMessageToApp from '../BaseComponents/hooks/UseMessageToApp'
import Button from '../BaseComponents/Form/Button'

type CharacteristicNames =
	| 'strength'
	| 'dexterity'
	| 'endurance'
	| 'intellect'
	| 'education'
	| 'social'

type CharacteristicProps = {
	label: string
	characteristic: CharacteristicNames
}

const Characteristic: React.FC<CharacteristicProps> = ({
	label,
	characteristic,
}) => {
	const { register, setValue } = useFormContext()
	const characteristicScore = useWatch({
		name: `characteristics.${characteristic}`,
	})
	const characteristicScoreCurrent = useWatch({
		name: `characteristics.${characteristic}Current`,
	})
	const messageToApp = useMessageToApp()
	const [diceModifier, setDiceModifier] = useState<string>('0')

	const handleRoll = () => {
		let DM = diceModifier ? diceModifier : null
		if (DM && parseInt(DM) > 0) DM = `+${DM}`

		messageToApp({
			message: 'send message',
			data: {
				message: `/roll 2d6${DM} for ${label}`,
			},
		})
	}

	function getDiceModifier(characteristicScore: number): number | string {
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

	useEffect(() => {
		if (!characteristicScoreCurrent) setDiceModifier('-')
		const newDiceModifier = getDiceModifier(Number(characteristicScoreCurrent))
		setDiceModifier(newDiceModifier.toString())
	}, [characteristic, characteristicScoreCurrent, setValue])

	return (
		<div>
			<Label className='block text-center text-gray-500'>{label}</Label>
			<div className='flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0'>
				<Input
					className='md:max-w-20 w-1/2 text-center'
					type='text'
					{...register(`characteristics.${characteristic}`)}
				/>
				<Input
					className='md:max-w-20 w-1/2 text-center'
					type='text'
					{...register(`characteristics.${characteristic}Current`)}
				/>
				<Button
					className='w-1/2 p-1'
					onClick={handleRoll}
					disabled={diceModifier === '-'}
				>
					{parseInt(diceModifier) > 0 ? `+${diceModifier}` : diceModifier}
				</Button>
			</div>
		</div>
	)
}

export default Characteristic
