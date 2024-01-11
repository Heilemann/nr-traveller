import CharacterDetails from './CharacterDetails'
import Characteristics from './Characteristics'
import Portrait from './Portrait'
import Armour from './armour/Armour'
import Careers from './careers/Careers'
import Finances from './finances/Finances'
import Skills from './skills/Skills'
import Weapons from './weapons/Weapons'
import Augments from './augments/Augments'
import Equipment from './equipment/Equipment'
import BackgroundNotes from './BackgroundNotes'
import Relations from './relations/Relations'
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
			<Wounds />
			<Finances />
			<Augments />
			<Careers />
			<BackgroundNotes />
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				<Relations title='Allies' name='allies' />
				<Relations title='Contacts' name='contacts' />
				<Relations title='Rivals' name='rivals' />
				<Relations title='Enemies' name='enemies' />
			</div>{' '}
		</div>
	)
}
