import React from 'react'
import Characteristic from './Characteristic'

const Characteristics: React.FC = () => {
	return (
		<div className='flex space-x-2'>
			<Characteristic label='Strength' characteristic='strength' />
			<Characteristic label='Dexterity' characteristic='dexterity' />
			<Characteristic label='Endurance' characteristic='endurance' />
			<Characteristic label='Intellect' characteristic='intellect' />
			<Characteristic label='Education' characteristic='education' />
			<Characteristic label='Social' characteristic='social' />
		</div>
	)
}

export default Characteristics
