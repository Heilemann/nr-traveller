import React from 'react'
import Skill from './Skill'
import skillslist from './skillslist'
import Heading from '../../BaseComponents/Heading'

const Skills: React.FC = () => {
	return (
		<div>
			<Heading>Skills</Heading>
			<div className='sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
				{Object.keys(skillslist).map(skillName => (
					<Skill
						key={skillName}
						name={skillName}
						canHaveSpecialities={skillslist[skillName].can_have_specialties}
					/>
				))}
			</div>
		</div>
	)
}

export default Skills
