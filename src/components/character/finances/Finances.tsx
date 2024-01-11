import React from 'react'
import { useForm } from 'react-hook-form'
import HInput from '../../BaseComponents/Form/HInput'
import Heading from '../../BaseComponents/Heading'

type FinanceDetailsNames =
	| 'monthlyShipPayments'
	| 'pension'
	| 'cashOnHand'
	| 'debt'
	| 'livingCosts'

type FormData = {
	[K in FinanceDetailsNames]: string
}

const Finances: React.FC = () => {
	const { register } = useForm<FormData>()

	return (
		<div>
			<Heading>Finances</Heading>
			<div className='grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3'>
				<HInput
					label='Monthly Ship Payments'
					className='border-0'
					{...register('monthlyShipPayments')}
				/>
				<HInput label='Pension' className='border-0' {...register('pension')} />
				<HInput
					label='Cash on Hand'
					className='border-0'
					{...register('cashOnHand')}
				/>
				<HInput label='Debt' className='border-0' {...register('debt')} />
				<HInput
					label='Living Costs'
					className='border-0'
					{...register('livingCosts')}
				/>
			</div>
		</div>
	)
}

export default Finances
