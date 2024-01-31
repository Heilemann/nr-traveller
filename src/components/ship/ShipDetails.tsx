import React from 'react'
import { useFormContext } from 'react-hook-form'
import VInput from '../BaseComponents/Form/VInput'
import SectionDivider from '../SectionDivider'

const ShipDetails: React.FC = () => {
	const { register } = useFormContext()

	return (
		<div className='flex w-full space-x-2'>
			<div>
				<SectionDivider>Hull</SectionDivider>
				<div className='mt-1 flex space-x-2'>
					<VInput
						labelBelow
						label='&nbsp;'
						type='number'
						{...register('hull')}
					/>
				</div>
			</div>
			<div>
				<SectionDivider>Running Costs</SectionDivider>
				<div className='mt-1 flex space-x-2'>
					<VInput
						labelBelow
						label='Maint. Cost'
						type='number'
						{...register('maintenanceCost')}
					/>
					<VInput
						labelBelow
						label='Purchase Cost'
						type='number'
						{...register('purchaseCost')}
					/>
				</div>
			</div>
			<div>
				<SectionDivider>Power Requirements</SectionDivider>
				<div className='mt-1 flex w-full space-x-2'>
					<VInput
						labelBelow
						label='Basic Systems'
						type='number'
						{...register('powerRequirements.basicShipSystems')}
					/>
					<VInput
						labelBelow
						label='Manoeuvre Drive'
						type='number'
						{...register('powerRequirements.manoeuvreDrive')}
					/>
					<VInput
						labelBelow
						label='Sensors'
						type='number'
						{...register('powerRequirements.sensors')}
					/>
					<VInput
						labelBelow
						label='Weapons'
						type='number'
						{...register('powerRequirements.weapons')}
					/>
				</div>
			</div>
		</div>
	)
}

export default ShipDetails
