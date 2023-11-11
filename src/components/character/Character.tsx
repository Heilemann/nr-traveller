import BackgroundNotes from './BackgroundNotes'
import CharacterDetails from './CharacterDetails'
import Characteristics from './Characteristics'
import Portrait from './Portrait'
import Armour from './armour/Armour'
import Augments from './augments/Augments'
import Careers from './careers/Careers'
import Equipment from './equipment/Equipment'
import Finances from './finances/Finances'
import Relations from './relations/Relations'
import Skills from './skills/Skills'
import Weapons from './weapons/Weapons'
import Wounds from './wounds/Wounds'

export default function Character() {
	return (
		<div className=''>
			<div className='grid grid-cols-2 gap-4'>
				<CharacterDetails />
				<Portrait />
			</div>
			<Characteristics />
			<Careers />
			<Skills />
			<Finances />
			<Armour />
			<Weapons />
			<Augments />
			<Equipment />
			<BackgroundNotes />
			<Relations title='Allies' name='allies' />
			<Relations title='Contacts' name='contacts' />
			<Relations title='Rivals' name='rivals' />
			<Relations title='Enemies' name='enemies' />
			<Wounds />
		</div>
	)
}
