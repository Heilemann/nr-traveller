// this component renders the correct component based on a given document's type.
// This is where you add and remove your sheets.
import { TDocumentType } from '../interfaces'
import Armour from './armour/Armour'
import Character from './character/Character'
import Effect from './effect/Effect'
import Equipment from './equipment/Equipment'
import Handout from './handout/Handout'
import Note from './note/Note'
import Scene from './scene/Scene'
import Ship from './ship/Ship'
import Weapon from './weapon/Weapon'

type Props = {
	type: TDocumentType
}

export default function TypeSwitcher({ type }: Props) {
	if (!type) return null

	return (
		<div className='bottom-0 box-border flex min-h-full w-full flex-col bg-gray-900 p-4 text-sm text-gray-100'>
			{type === 'character' && <Character />}
			{type === 'ship' && <Ship />}
			{type === 'note' && <Note />}
			{type === 'scene' && <Scene />}
			{type === 'weapon' && <Weapon />}
			{type === 'handout' && <Handout />}
			{type === 'effect' && <Effect />}
			{type === 'equipment' && <Equipment />}
			{type === 'armour' && <Armour />}
		</div>
	)
}
