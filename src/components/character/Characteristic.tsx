import { Input } from 'nrsystemtools'
import React, { useContext, useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import Label from '../BaseComponents/Form/Label'
import useMessageToApp from '../BaseComponents/hooks/UseMessageToApp'
import Button from '../BaseComponents/Form/Button'
import context from '../BaseComponents/context'

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
	const { state } = useContext(context)
	const { document } = state
	const { values } = document
	const { register, setValue } = useFormContext()
	const messageToApp = useMessageToApp()
	const [diceModifier, setDiceModifier] = useState<string>('-')

	const characteristicScore = useWatch({
		name: `characteristics.${characteristic}`,
		defaultValue: values?.characteristics?.[characteristic] || '',
	})

	const characteristicScoreCurrent = useWatch({
		name: `characteristics.${characteristic}Current`,
		defaultValue: values?.characteristics?.[`${characteristic}Current`] || '',
	})

	const handleRoll = () => {
		let DM = diceModifier ? diceModifier : null
		if (DM && parseInt(DM) > 0) DM = `+${DM}`
		else if (DM && parseInt(DM) === 0) DM = ''

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
		let score = characteristicScoreCurrent
		if (!score) {
			score = characteristicScore
		}
		if (!score) {
			setDiceModifier('-')
		} else {
			const newDiceModifier = getDiceModifier(Number(score))
			setDiceModifier(newDiceModifier.toString())
		}
	}, [
		characteristic,
		characteristicScoreCurrent,
		characteristicScore,
		setValue,
	])

	return (
		<div>
			<Label className='block text-gray-500'>{label}</Label>
			<div className='flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0'>
				<div className='flex flex-1 space-x-px'>
					<Input
						className='md:max-w-20 w-1/2 text-center'
						style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
						type='text'
						autoComplete='off'
						{...register(`characteristics.${characteristic}`)}
					/>
					<Input
						className='md:max-w-20 w-1/2 text-center'
						style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
						type='text'
						autoComplete='off'
						placeholder={characteristicScore}
						{...register(`characteristics.${characteristic}Current`)}
					/>
				</div>
				<Button
					className='p-1 text-sm md:w-12'
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
