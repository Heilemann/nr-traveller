import CharacterDetails from './CharacterDetails'
import Characteristics from './Characteristics'
import Portrait from './Portrait'
import Careers from './careers/Careers'
import Skills from './skills/Skills'

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
			{/* <Finances />
			<Armour />
			<Weapons />
			<Augments />
			<Equipment />
			<BackgroundNotes />
			<Relations title='Allies' name='allies' />
			<Relations title='Contacts' name='contacts' />
			<Relations title='Rivals' name='rivals' />
			<Relations title='Enemies' name='enemies' />
			<Wounds /> */}
		</div>
	)
}
