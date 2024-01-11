import Relations from './Relations'

const Relationships = () => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
			<Relations title='Allies' name='allies' />
			<Relations title='Contacts' name='contacts' />
			<Relations title='Rivals' name='rivals' />
			<Relations title='Enemies' name='enemies' />
		</div>
	)
}

export default Relationships
