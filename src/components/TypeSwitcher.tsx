// this component renders the correct component based on a given document's type.
// This is where you add and remove your sheets.
import { TDocumentType } from '../interfaces'
import Character from './character/Character'
import Effect from './effect/Effect'
import Handout from './handout/Handout'
import Note from './note/Note'
import Scene from './scene/Scene'
import Weapon from './weapon/Weapon'
import Equipment from './equipment/Equipment'
import Armour from './armour/Armour'

type Props = {
	type: TDocumentType
}

export default function TypeSwitcher({ type }: Props) {
	if (!type) return null

	return (
		<div className='bottom-0 box-border flex min-h-full w-full flex-col bg-gray-900 p-4 text-sm text-gray-100'>
			{type === 'character' && <Character />}
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
