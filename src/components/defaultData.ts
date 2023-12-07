import {
	Documents,
	TAccess,
	TDocument,
	TEffect,
	TNote,
	TScene,
	TWeaponDocument,
} from '../interfaces'

const note: TNote = {
	_id: 'note',
	creator: 'abc',
	access: 'public' as TAccess,
	accessList: [],
	type: 'note',
	values: {
		name: 'Note',
		text: 'This is a **note**.',
	},
}

const weapon: TWeaponDocument = {
	_id: 'weapon',
	type: 'weapon',
	creator: 'abc',
	access: 'public',
	accessList: [],
	values: {
		name: 'Knife',
		TL: '3',
		range: '0',
		damage: '1d6+1',
		kg: '1',
		magazine: '0',
		magazineCost: '0',
		traits: '',
		worn: false,
	},
}

const character: TDocument = {
	_id: 'character',
	creator: 'abc',
	access: 'public' as TAccess,
	accessList: [],
	type: 'character',
	values: {
		name: 'Bob',
		weapons: [
			{
				documentId: 'weapon',
				...weapon,
			},
		],
		skills: {
			Art: {
				rating: '1',
			},
		},
	},
}

const handout: TDocument = {
	_id: 'handout',
	creator: 'abc',
	access: 'public' as TAccess,
	accessList: [],
	type: 'handout',
	values: {
		name: 'Handout',
		text: 'This is a **handout**.',
	},
}

const scene: TScene = {
	_id: 'scene',
	creator: 'abc',
	access: 'public' as TAccess,
	accessList: [],
	type: 'scene',
	values: {
		name: 'Scene Name',
		subtitle: 'Scene Subtitle',
		nameIsSecret: 'false',
		mapId: '',
		coverId: '',
		showMap: 'false',
	},
}

const effect: TEffect = {
	_id: 'effect',
	creator: 'abc',
	access: 'public' as TAccess,
	accessList: [],
	type: 'effect',
	values: {
		name: 'Effect Name',
		description: 'Effect Description',
		roundsRemaining: '3',
	},
}

const defaultDocuments: Documents = {
	byId: {
		note,
		weapon,
		character,
		handout,
		scene,
		effect,
	},
	allIds: ['note', 'weapon', 'character', 'handout', 'scene', 'effect'],
}

export default defaultDocuments
