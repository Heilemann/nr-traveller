import React from 'react'
import Heading from '../../BaseComponents/Heading'
import Skill from './Skill'
import skillslist from './skillslist'

const Skills: React.FC = () => {
	// const { state } = useContext(context)

	// const skills = useWatch({
	// 	name: 'skills',
	// 	defaultValue: state?.document?.values?.skills || [],
	// })

	return (
		<div>
			<Heading>Skills</Heading>

			{/* <div>
				{Object.keys(skills).map((key: string) => {
					console.log(skills[key])
					const skill = skills[key]
					if (skill.rating !== '' && skill.rating > -1)
						return (
							<div key={key} className='inline-block'>
								{key} {skill.rating}
							</div>
						)
				})}
			</div> */}

			<div className='sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
				{Object.keys(skillslist).map(skillName => (
					<Skill
						key={skillName}
						name={skillName}
						specialties={skillslist[skillName].specialities || []}
					/>
				))}
			</div>
		</div>
	)
}

export default Skills
