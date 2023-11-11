export type SkillList = {
	[key: string]: {
		can_have_specialties: boolean
	}
}

const skillslist: SkillList = {
	Admin: { can_have_specialties: false },
	Advocate: { can_have_specialties: false },
	Animals: { can_have_specialties: true },
	Art: { can_have_specialties: true },
	Astrogation: { can_have_specialties: false },
	Athletics: { can_have_specialties: true },
	Broker: { can_have_specialties: false },
	Carouse: { can_have_specialties: false },
	Deception: { can_have_specialties: false },
	Diplomat: { can_have_specialties: false },
	Drive: { can_have_specialties: true },
	Electronics: { can_have_specialties: true },
	Engineer: { can_have_specialties: true },
	Explosives: { can_have_specialties: false },
	Flyer: { can_have_specialties: true },
	Gambler: { can_have_specialties: false },
	Gunner: { can_have_specialties: true },
	'Gun Combat': { can_have_specialties: true },
	'Hvy Weapons': { can_have_specialties: true },
	Investigate: { can_have_specialties: false },
	'Jack of all Trades': { can_have_specialties: false },
	Language: { can_have_specialties: true },
	Leadership: { can_have_specialties: false },
	Mechanic: { can_have_specialties: false },
	Medic: { can_have_specialties: false },
	Melee: { can_have_specialties: true },
	Navigation: { can_have_specialties: false },
	Persuade: { can_have_specialties: false },
	Pilot: { can_have_specialties: true },
	Profession: { can_have_specialties: true },
	Recon: { can_have_specialties: false },
	Science: { can_have_specialties: true },
	Seafarer: { can_have_specialties: true },
	Stealth: { can_have_specialties: false },
	Steward: { can_have_specialties: false },
	Streetwise: { can_have_specialties: false },
	Survival: { can_have_specialties: false },
	Tactics: { can_have_specialties: true },
	'Vacc Suit': { can_have_specialties: false },
}

export default skillslist
