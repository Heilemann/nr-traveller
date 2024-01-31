import Portrait from '../character/Portrait'
import GenericTable from './GenericTable'
import ShipBasics from './ShipBasics'
import ShipDetails from './ShipDetails'

const Ship = () => {
	return (
		<div className='space-y-8'>
			<div className='flex items-start space-x-4'>
				<ShipBasics />
				<Portrait />
			</div>
			<ShipDetails />
			<div className='space-y-4'>
				<GenericTable title='Hull' name='hull' />
				<GenericTable title='M-Drive' name='mDrive' />
				<GenericTable title='Power Plant' name='powerPlant' />
				<GenericTable title='Fuel Tanks' name='fuelTanks' />
				<GenericTable title='Bridge' name='bridge' />
				<GenericTable title='Computer' name='computer' />
				<GenericTable title='Sensors' name='sensors' />
				<GenericTable title='Weapons' name='weapons' />
				<GenericTable title='Systems' name='systems' />
				<GenericTable title='Software' name='software' />
				<GenericTable title='Cargo' name='cargo' />
			</div>
		</div>
	)
}

export default Ship
