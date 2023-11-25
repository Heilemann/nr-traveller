import React from 'react'
import Characteristic from './Characteristic'
import Heading from '../BaseComponents/Heading'

const Characteristics: React.FC = () => {
	return (
		<div>
			<Heading>Characteristics</Heading>
			<div className='flex space-x-2'>
				<Characteristic label='Strength' characteristic='strength' />
				<Characteristic label='Dexterity' characteristic='dexterity' />
				<Characteristic label='Endurance' characteristic='endurance' />
				<Characteristic label='Intellect' characteristic='intellect' />
				<Characteristic label='Education' characteristic='education' />
				<Characteristic label='Social' characteristic='social' />
			</div>
		</div>
	)
}

export default Characteristics
