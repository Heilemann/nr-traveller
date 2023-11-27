import Asset from '../BaseComponents/Asset'

export default function Portrait() {
	return (
		<div className='min-h-30 md:min-h-40 flex w-1/3 flex-1 flex-col text-center md:w-full'>
			<Asset
				name='token'
				addLabel='Add Portrait'
				removeLabel='Remove Portrait'
			/>
		</div>
	)
}
