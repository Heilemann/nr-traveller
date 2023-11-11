import React from 'react'
import Skill from './Skill'

const Skills: React.FC = () => {
	return (
		<div className='columns gap-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
			<Skill key='Admin' name='Admin' canHaveSpecialities={true} />

			<Skill key='Admin' name='Admin' canHaveSpecialities={false} />
			<Skill key='Advocate' name='Advocate' canHaveSpecialities={false} />
			<Skill key='Animals' name='Animals' canHaveSpecialities={true} />
			<Skill key='Art' name='Art' canHaveSpecialities={true} />
			<Skill key='Astrogation' name='Astrogation' canHaveSpecialities={false} />
			<Skill key='Athletics' name='Athletics' canHaveSpecialities={true} />
			<Skill key='Broker' name='Broker' canHaveSpecialities={false} />
			<Skill key='Carouse' name='Carouse' canHaveSpecialities={false} />
			<Skill key='Deception' name='Deception' canHaveSpecialities={false} />
			<Skill key='Diplomat' name='Diplomat' canHaveSpecialities={false} />
			<Skill key='Drive' name='Drive' canHaveSpecialities={true} />
			<Skill key='Electronics' name='Electronics' canHaveSpecialities={true} />
			<Skill key='Engineer' name='Engineer' canHaveSpecialities={true} />
			<Skill key='Explosives' name='Explosives' canHaveSpecialities={false} />
			<Skill key='Flyer' name='Flyer' canHaveSpecialities={true} />
			<Skill key='Gambler' name='Gambler' canHaveSpecialities={false} />
			<Skill key='Gunner' name='Gunner' canHaveSpecialities={true} />
			<Skill key='Gun Combat' name='Gun Combat' canHaveSpecialities={true} />
			<Skill key='Hvy Weapons' name='Hvy Weapons' canHaveSpecialities={true} />
			<Skill key='Investigate' name='Investigate' canHaveSpecialities={false} />
			<Skill
				key='Jack of all Trades'
				name='Jack of all Trades'
				canHaveSpecialities={false}
			/>
			<Skill key='Language' name='Language' canHaveSpecialities={true} />
			<Skill key='Leadership' name='Leadership' canHaveSpecialities={false} />
			<Skill key='Mechanic' name='Mechanic' canHaveSpecialities={false} />
			<Skill key='Medic' name='Medic' canHaveSpecialities={false} />
			<Skill key='Melee' name='Melee' canHaveSpecialities={true} />
			<Skill key='Navigation' name='Navigation' canHaveSpecialities={false} />
			<Skill key='Persuade' name='Persuade' canHaveSpecialities={false} />
			<Skill key='Pilot' name='Pilot' canHaveSpecialities={true} />
			<Skill key='Profession' name='Profession' canHaveSpecialities={true} />
			<Skill key='Recon' name='Recon' canHaveSpecialities={false} />
			<Skill key='Science' name='Science' canHaveSpecialities={true} />
			<Skill key='Seafarer' name='Seafarer' canHaveSpecialities={true} />
			<Skill key='Stealth' name='Stealth' canHaveSpecialities={false} />
			<Skill key='Steward' name='Steward' canHaveSpecialities={false} />
			<Skill key='Streetwise' name='Streetwise' canHaveSpecialities={false} />
			<Skill key='Survival' name='Survival' canHaveSpecialities={false} />
			<Skill key='Tactics' name='Tactics' canHaveSpecialities={true} />
			<Skill key='Vacc Suit' name='Vacc Suit' canHaveSpecialities={false} />
		</div>
	)
}

export default Skills
