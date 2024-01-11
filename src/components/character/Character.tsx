import BackgroundNotes from './BackgroundNotes'
import CharacterDetails from './CharacterDetails'
import Characteristics from './Characteristics'
import Portrait from './Portrait'
import Armour from './armour/Armour'
import Augments from './augments/Augments'
import Careers from './careers/Careers'
import Equipment from './equipment/Equipment'
import Finances from './finances/Finances'
import Relationships from './relations/Relationships'
import Skills from './skills/Skills'
import Weapons from './weapons/Weapons'
import Wounds from './wounds/Wounds'

export default function Character() {
	return (
		<div className='space-y-8'>
			<div className='flex space-x-4'>
				<CharacterDetails />
				<Portrait />
			</div>
			<Characteristics />
			<Skills />
			<Armour />
			<Weapons />
			<Equipment />
			<Augments />
			<Wounds />
			<Finances />
			<Careers />
			<BackgroundNotes />
			<Relationships />
		</div>
	)
}
