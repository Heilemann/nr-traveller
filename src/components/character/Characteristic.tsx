import { Input } from 'nrsystemtools'
import React, { useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import Label from '../BaseComponents/Form/Label'
import useMessageToApp from '../BaseComponents/hooks/UseMessageToApp'

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
	const messageToApp = useMessageToApp()
	const [diceModifier, setDiceModifier] = useState<string>('0')

	const handleRoll = () => {
		let DM = diceModifier ? diceModifier : null
		if (DM && parseInt(DM) > 0) DM = `+${DM}`

		messageToApp({
			message: 'send message',
			data: {
				message: `/roll 2d6${DM} ${characteristic}`,
			},
		})
	}

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

	useEffect(() => {
		const diceModifier = getDiceModifier(Number(characteristicScore))
		setDiceModifier(diceModifier.toString())

		console.log('------->', characteristic, characteristicScore, diceModifier)
	}, [characteristic, characteristicScore, setValue])

	return (
		<div>
			<Label className='block text-center text-gray-500'>{label}</Label>
			<div className='flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0'>
				<Input
					className='md:max-w-20 w-full text-center'
					type='text'
					{...register(`characteristics.${characteristic}`)}
				/>
				<Input
					disabled
					className='md:max-w-20 w-full text-center'
					type='text'
					value={diceModifier}
				/>
				<button onClick={handleRoll}>Roll</button>
			</div>
		</div>
	)
}

export default Characteristic
