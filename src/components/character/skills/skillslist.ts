export type SkillList = {
	[key: string]: {
		specialities?: string[]
	}
}

const skillslist: SkillList = {
	Admin: {},
	Advocate: {},
	Animals: { specialities: ['Handling', 'Veterinary', 'Training'] },
	Art: {
		specialities: [
			'Performer',
			'Holography',
			'Instrument',
			'Visual Media',
			'Write',
		],
	},
	Astrogation: {},
	Athletics: { specialities: ['Dexterity', 'Endurance', 'Strength'] },
	Broker: {},
	Carouse: {},
	Deception: {},
	Diplomat: {},
	Drive: { specialities: ['Hovercraft', 'Mole', 'Track', 'Walker', 'Wheel'] },
	Electronics: {
		specialities: ['Comms', 'Computers', 'Remote Ops', 'Sensors'],
	},
	Engineer: { specialities: ['M-drive', 'J-drive', 'Life Support', 'Power'] },
	Explosives: {},
	Flyer: { specialities: ['Airship', 'Grav', 'Ornithopter', 'Roto', 'Wing'] },
	Gambler: {},
	Gunner: { specialities: ['Turret', 'Ortillery', 'Screen', 'Capital'] },
	'Gun Combat': { specialities: ['Archaic', 'Energy', 'Slug'] },
	'Heavy Weapons': { specialities: ['Artillery', 'Portable', 'Vehicle'] },
	Investigate: {},
	'Jack of all Trades': {},
	Language: {
		specialities: [
			'Galanglic',
			'Vilani',
			'Zdetl',
			'Oynprith',
			'Trokh',
			'Gvegh',
		],
	},
	Leadership: {},
	Mechanic: {},
	Medic: {},
	Melee: { specialities: ['Unarmed', 'Blade', 'Bludgeon', 'Natural'] },
	Navigation: {},
	Persuade: {},
	Pilot: { specialities: ['Small Craft', 'Spacecraft', 'Capital Ships'] },
	Profession: {
		specialities: [
			'Belter',
			'Biologicals',
			'Civil Engineering',
			'Construction',
			'Hydroponics',
			'Polymers',
		],
	},
	Recon: {},
	Science: {
		specialities: [
			'Archaeology',
			'Astronomy',
			'Biology',
			'Chemistry',
			'Cosmology',
			'Cybernetics',
			'Economics',
			'Genetics',
			'History',
			'Linguistics',
			'Philosophy',
			'Physics',
			'Planetology',
			'Psionicology',
			'Psychology',
			'Robotics',
			'Sophontology',
			'Xenology',
		],
	},
	Seafarer: { specialities: ['Ocean Ships', 'Personal', 'Sail', 'Submarine'] },
	Stealth: {},
	Steward: {},
	Streetwise: {},
	Survival: {},
	Tactics: { specialities: ['Military', 'Naval'] },
	'Vacc Suit': {},
}

export default skillslist
