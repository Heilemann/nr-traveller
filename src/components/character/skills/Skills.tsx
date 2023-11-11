import React from 'react'
import Skill from './Skill'
import skillslist from './skillslist'

const Skills: React.FC = () => {
	return (
		<div className='columns gap-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
			<Skill key='Admin' name='Admin' canHaveSpecialities={true} />

			{Object.keys(skillslist).map(skillName => (
				<Skill
					key={skillName}
					name={skillName}
					canHaveSpecialities={skillslist[skillName].can_have_specialties}
				/>
			))}
		</div>
	)
}

export default Skills
